import { statusStyles, transactions } from '../data/dashboardData.js'
import { icon } from '../utils/icons.js'
import { formatCurrency, getDashboardPreferences } from '../utils/preferences.js'

const pageSize = 5

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (character) => {
    const entities = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }
    return entities[character]
  })

export const renderTransactionsTable = () => `
  <section class="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none" aria-labelledby="transactions-heading">
    <div class="flex flex-col gap-4 border-b border-slate-200 p-5 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 id="transactions-heading" class="text-base font-semibold text-slate-900 dark:text-white">Transaksi Terbaru</h2>
        <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Pantau dan kelola pembayaran terbaru Anda.</p>
      </div>
      <div class="flex flex-col gap-2 sm:flex-row sm:items-center">
        <label class="flex h-10 min-w-0 items-center gap-2 rounded-lg border border-slate-200 px-3 text-slate-400 focus-within:border-indigo-300 focus-within:ring-4 focus-within:ring-indigo-50 dark:border-slate-700 dark:focus-within:border-indigo-500 dark:focus-within:ring-indigo-950 sm:w-56">
          ${icon('search', 'h-4 w-4 shrink-0')}
          <input id="transaction-search" type="search" placeholder="Cari transaksi..." aria-label="Cari transaksi" class="min-w-0 w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:text-slate-100 dark:placeholder:text-slate-500" />
        </label>
        <div class="relative">
          <button id="transaction-filter-toggle" type="button" class="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 sm:w-auto" aria-haspopup="true" aria-expanded="false" aria-controls="transaction-filter-menu">
            ${icon('filter', 'h-4 w-4')}
            <span id="transaction-filter-label">Semua status</span>
            ${icon('chevronDown', 'h-4 w-4')}
          </button>
          <div id="transaction-filter-menu" class="absolute right-0 z-10 mt-2 hidden w-44 rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg shadow-slate-900/10 dark:border-slate-700 dark:bg-slate-800" role="menu" aria-label="Filter transaksi berdasarkan status">
            ${['Semua status', 'Lunas', 'Menunggu', 'Gagal', 'Dibatalkan', 'Aktif']
              .map(
                (status) => `<button type="button" class="transaction-filter-option block w-full rounded-lg px-3 py-2 text-left text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white" role="menuitem" data-status="${status === 'Semua status' ? '' : status}">${status}</button>`,
              )
              .join('')}
          </div>
        </div>
        <button id="transaction-export" type="button" class="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-3.5 text-sm font-medium text-white transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2">
          ${icon('download', 'h-4 w-4')}
          Ekspor
        </button>
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full min-w-[760px] border-collapse text-left">
        <thead class="bg-slate-50 dark:bg-slate-800/70">
          <tr>
            <th scope="col" class="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Informasi Pengguna</th>
            <th scope="col" class="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Tanggal</th>
            <th scope="col" class="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Jumlah</th>
            <th scope="col" class="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Metode Pembayaran</th>
            <th scope="col" class="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Status</th>
          </tr>
        </thead>
        <tbody id="transaction-rows" class="divide-y divide-slate-100 dark:divide-slate-800"></tbody>
      </table>
    </div>

    <div class="flex flex-col gap-3 border-t border-slate-200 px-5 py-4 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
      <p id="transaction-count" class="text-sm text-slate-500 dark:text-slate-400" aria-live="polite"></p>
      <nav id="transaction-pagination" class="flex items-center justify-between gap-1 sm:justify-end" aria-label="Halaman transaksi"></nav>
    </div>
  </section>
`

export const initTransactionsTable = () => {
  const rowsElement = document.querySelector('#transaction-rows')
  const countElement = document.querySelector('#transaction-count')
  const paginationElement = document.querySelector('#transaction-pagination')
  const searchInput = document.querySelector('#transaction-search')
  const filterToggle = document.querySelector('#transaction-filter-toggle')
  const filterMenu = document.querySelector('#transaction-filter-menu')
  const filterLabel = document.querySelector('#transaction-filter-label')
  let activeStatusFilter = ''
  let currentPage = 1

  const getFilteredTransactions = () => {
    const query = searchInput.value.trim().toLowerCase()

    return transactions.filter((transaction) => {
      const matchesStatus = !activeStatusFilter || transaction.status === activeStatusFilter
      const searchableText = [
        transaction.name,
        transaction.email,
        transaction.date,
        transaction.amount,
        transaction.method,
        transaction.status,
      ]
        .join(' ')
        .toLowerCase()

      return matchesStatus && searchableText.includes(query)
    })
  }

  const renderPage = () => {
    const filteredTransactions = getFilteredTransactions()
    const pageCount = Math.ceil(filteredTransactions.length / pageSize)
    currentPage = Math.min(currentPage, Math.max(pageCount, 1))
    const firstIndex = (currentPage - 1) * pageSize
    const pageTransactions = filteredTransactions.slice(firstIndex, firstIndex + pageSize)

    rowsElement.innerHTML = pageTransactions.length
      ? pageTransactions
          .map(
            ({ name, email, date, amount, method, status }) => `
              <tr class="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/60">
                <td class="whitespace-nowrap px-5 py-4">
                  <div class="flex items-center gap-3">
                    <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-700 dark:bg-indigo-400/15 dark:text-indigo-300" aria-hidden="true">${name.split(/\s+/).slice(0, 2).map((part) => part[0]).join('').toLocaleUpperCase('id-ID')}</span>
                    <div>
                      <p class="text-sm font-medium text-slate-900 dark:text-slate-100">${escapeHtml(name)}</p>
                      <p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400">${escapeHtml(email)}</p>
                    </div>
                  </div>
                </td>
                <td class="whitespace-nowrap px-5 py-4 text-sm text-slate-600 dark:text-slate-300">${escapeHtml(date)}</td>
                <td class="whitespace-nowrap px-5 py-4 text-sm font-medium text-slate-900 dark:text-slate-100">${formatCurrency(amount)}</td>
                <td class="whitespace-nowrap px-5 py-4 text-sm text-slate-600 dark:text-slate-300">${escapeHtml(method)}</td>
                <td class="whitespace-nowrap px-5 py-4">
                  <span class="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[status]}">${escapeHtml(status)}</span>
                </td>
              </tr>
            `,
          )
          .join('')
      : '<tr><td colspan="5" class="px-5 py-12 text-center text-sm text-slate-500 dark:text-slate-400">Tidak ada transaksi yang cocok dengan pencarian Anda.</td></tr>'

    countElement.textContent = filteredTransactions.length
      ? `Menampilkan ${firstIndex + 1}–${Math.min(firstIndex + pageSize, filteredTransactions.length)} dari ${filteredTransactions.length} transaksi`
      : 'Menampilkan 0 dari 0 transaksi'

    const pageButtons = Array.from({ length: pageCount }, (_, index) => index + 1)
      .map(
        (page) => `
          <button type="button" data-page="${page}" ${page === currentPage ? 'aria-current="page"' : ''} class="h-9 min-w-9 rounded-lg px-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
            page === currentPage ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-300' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
          }">${page}</button>
        `,
      )
      .join('')

    paginationElement.innerHTML = `
      <button type="button" data-page="${Math.max(currentPage - 1, 1)}" ${currentPage <= 1 ? 'disabled' : ''} aria-label="Halaman sebelumnya" class="inline-flex h-9 items-center gap-1 rounded-lg px-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 dark:text-slate-300 dark:hover:bg-slate-800">
        ${icon('chevron', 'h-4 w-4')}
        <span class="hidden sm:inline">Sebelumnya</span>
      </button>
      ${pageButtons}
      <button type="button" data-page="${Math.min(currentPage + 1, Math.max(pageCount, 1))}" ${currentPage >= pageCount ? 'disabled' : ''} aria-label="Halaman berikutnya" class="inline-flex h-9 items-center gap-1 rounded-lg px-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 dark:text-slate-300 dark:hover:bg-slate-800">
        <span class="hidden sm:inline">Berikutnya</span>
        ${icon('chevron', 'h-4 w-4 rotate-180')}
      </button>
    `
  }

  searchInput.addEventListener('input', () => {
    currentPage = 1
    renderPage()
  })

  filterToggle.addEventListener('click', () => {
    const isOpen = filterToggle.getAttribute('aria-expanded') === 'true'
    filterToggle.setAttribute('aria-expanded', String(!isOpen))
    filterMenu.classList.toggle('hidden', isOpen)
  })

  filterMenu.addEventListener('click', (event) => {
    const option = event.target.closest('.transaction-filter-option')
    if (!option) return

    activeStatusFilter = option.dataset.status
    filterLabel.textContent = activeStatusFilter || 'Semua status'
    currentPage = 1
    renderPage()
    filterToggle.setAttribute('aria-expanded', 'false')
    filterMenu.classList.add('hidden')
  })

  document.addEventListener('click', (event) => {
    if (!event.target.closest('#transaction-filter-toggle, #transaction-filter-menu')) {
      filterToggle.setAttribute('aria-expanded', 'false')
      filterMenu.classList.add('hidden')
    }
  })

  paginationElement.addEventListener('click', (event) => {
    const button = event.target.closest('[data-page]')
    if (!button || button.disabled) return

    currentPage = Number(button.dataset.page)
    renderPage()
  })

  document.querySelector('#transaction-export').addEventListener('click', () => {
    const csvValue = (value) => {
      const safeValue = /^[=+\-@]/.test(String(value)) ? `'${value}` : value
      return `"${String(safeValue).replace(/"/g, '""')}"`
    }
    const csvRows = [
      ['Pengguna', 'Email', 'Tanggal', `Jumlah (${getDashboardPreferences().currency})`, 'Metode Pembayaran', 'Status'],
      ...getFilteredTransactions().map(({ name, email, date, amount, method, status }) => [
        name,
        email,
        date,
        formatCurrency(amount),
        method,
        status,
      ]),
    ]
    const csv = csvRows.map((row) => row.map(csvValue).join(',')).join('\r\n')
    const blobUrl = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
    const downloadLink = document.createElement('a')
    downloadLink.href = blobUrl
    downloadLink.download = 'transaksi.csv'
    downloadLink.click()
    setTimeout(() => URL.revokeObjectURL(blobUrl), 1000)
  })

  renderPage()
}
