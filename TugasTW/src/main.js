import './style.css'

const icon = (name, className = 'h-5 w-5') => {
  const paths = {
    dashboard:
      '<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>',
    analytics:
      '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-5 5"/><path d="M19 9h-5"/><path d="M19 9v5"/>',
    customers:
      '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    settings:
      '<path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"/><path d="m19.4 15 .1.1a1.7 1.7 0 0 1-2.4 2.4l-.1-.1a1.7 1.7 0 0 0-2.9 1.2v.3a1.7 1.7 0 0 1-3.4 0v-.2a1.7 1.7 0 0 0-2.9-1.2l-.1.1a1.7 1.7 0 1 1-2.4-2.4l.1-.1a1.7 1.7 0 0 0-1.2-2.9h-.3a1.7 1.7 0 0 1 0-3.4h.2a1.7 1.7 0 0 0 1.2-2.9l-.1-.1a1.7 1.7 0 1 1 2.4-2.4l.1.1a1.7 1.7 0 0 0 2.9-1.2v-.3a1.7 1.7 0 0 1 3.4 0v.2a1.7 1.7 0 0 0 2.9 1.2l.1-.1a1.7 1.7 0 1 1 2.4 2.4l-.1.1a1.7 1.7 0 0 0 1.2 2.9h.3a1.7 1.7 0 0 1 0 3.4h-.2a1.7 1.7 0 0 0-1.2 2.9Z"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    close: '<path d="m18 6-12 12M6 6l12 12"/>',
    chevron: '<path d="m15 18-6-6 6-6"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/>',
    revenue: '<path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
    orders: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>',
    conversion: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    trendUp: '<path d="m3 17 6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
    trendDown: '<path d="m3 7 6 6 4-4 8 8"/><path d="M15 17h6v-6"/>',
    filter: '<path d="M4 7h16M7 12h10m-7 5h4"/><circle cx="8" cy="7" r="1.5"/><circle cx="15" cy="12" r="1.5"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
    chevronDown: '<path d="m6 9 6 6 6-6"/>',
  }

  return `<svg class="${className} shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`
}

const navigation = [
  { label: 'Dasbor', icon: 'dashboard', active: true },
  { label: 'Analitik', icon: 'analytics' },
  { label: 'Pelanggan', icon: 'customers' },
  { label: 'Pengaturan', icon: 'settings' },
]

const stats = [
  {
    label: 'Total Pendapatan',
    value: 'Rp48.294.000',
    change: '+12,8%',
    comparison: 'dibanding bulan lalu',
    icon: 'revenue',
    trendIcon: 'trendUp',
    trend: 'up',
    iconColor: 'bg-indigo-50 text-indigo-600',
  },
  {
    label: 'Pengguna Aktif',
    value: '2,420',
    change: '+8,2%',
    comparison: 'dibanding bulan lalu',
    icon: 'customers',
    trendIcon: 'trendUp',
    trend: 'up',
    iconColor: 'bg-sky-50 text-sky-600',
  },
  {
    label: 'Pesanan Baru',
    value: '1,245',
    change: '-2,4%',
    comparison: 'dibanding bulan lalu',
    icon: 'orders',
    trendIcon: 'trendDown',
    trend: 'down',
    iconColor: 'bg-amber-50 text-amber-600',
  },
  {
    label: 'Tingkat Konversi',
    value: '3,62%',
    change: '+0,6%',
    comparison: 'dibanding bulan lalu',
    icon: 'conversion',
    trendIcon: 'trendUp',
    trend: 'up',
    iconColor: 'bg-emerald-50 text-emerald-600',
  },
]

const transactions = [
  { name: 'Dewi Lestari', email: 'dewi.lestari@example.com', date: '24 Okt 2025', amount: 2400000, method: 'Transfer Bank BCA', status: 'Lunas' },
  { name: 'Budi Santoso', email: 'budi.santoso@example.com', date: '23 Okt 2025', amount: 1250000, method: 'DANA', status: 'Menunggu' },
  { name: 'Siti Nurhaliza', email: 'siti.nurhaliza@example.com', date: '22 Okt 2025', amount: 890000, method: 'GoPay', status: 'Lunas' },
  { name: 'Andi Pratama', email: 'andi.pratama@example.com', date: '21 Okt 2025', amount: 3200000, method: 'Transfer Bank Mandiri', status: 'Gagal' },
  { name: 'Putri Maharani', email: 'putri.maharani@example.com', date: '20 Okt 2025', amount: 560000, method: 'QRIS', status: 'Lunas' },
  { name: 'Rizky Firmansyah', email: 'rizky.firmansyah@example.com', date: '19 Okt 2025', amount: 1780000, method: 'Transfer Bank BRI', status: 'Dibatalkan' },
  { name: 'Ayu Wulandari', email: 'ayu.wulandari@example.com', date: '18 Okt 2025', amount: 940000, method: 'ShopeePay', status: 'Menunggu' },
  { name: 'Fajar Ramadhan', email: 'fajar.ramadhan@example.com', date: '17 Okt 2025', amount: 2150000, method: 'LinkAja', status: 'Lunas' },
]

const statusStyles = {
  Aktif: 'bg-emerald-50 text-emerald-700',
  Lunas: 'bg-emerald-50 text-emerald-700',
  Menunggu: 'bg-amber-50 text-amber-700',
  Gagal: 'bg-rose-50 text-rose-700',
  Dibatalkan: 'bg-rose-50 text-rose-700',
}

document.querySelector('#app').innerHTML = `
  <div class="flex min-h-screen bg-slate-50 text-slate-900">
    <div id="sidebar-overlay" class="hidden fixed inset-0 z-30 bg-slate-950/40 md:hidden" aria-hidden="true"></div>

    <aside id="sidebar" class="hidden fixed inset-y-0 left-0 z-40 h-screen w-64 shrink-0 flex flex-col border-r border-slate-200 bg-white md:sticky md:top-0 md:flex">
      <div class="flex h-20 shrink-0 items-center justify-between border-b border-slate-100 px-5">
        <a href="#dasbor" class="flex min-w-0 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" aria-label="Beranda Orbit">
          <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white shadow-sm shadow-indigo-200">O</span>
          <span data-sidebar-label class="text-lg font-semibold tracking-tight text-slate-900">orbit<span class="text-indigo-600">.</span></span>
        </a>
        <button id="sidebar-toggle" type="button" class="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 md:flex" aria-label="Ciutkan bilah sisi" aria-expanded="true" title="Ciutkan bilah sisi">
          ${icon('chevron', 'h-4 w-4 transition-transform duration-300')}
        </button>
      </div>

      <nav class="flex-1 overflow-y-auto px-3 py-6" aria-label="Navigasi utama">
        <p data-sidebar-label class="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">Ruang Kerja</p>
        <ul class="space-y-1">
          ${navigation
            .map(
              ({ label, icon: iconName, active }) => `
                <li>
                  <a href="#${label.toLowerCase()}" title="${label}" ${active ? 'aria-current="page"' : ''} class="sidebar-link group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                    active
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                  }">
                    ${icon(iconName, `h-5 w-5 ${active ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-600'}`)}
                    <span data-sidebar-label>${label}</span>
                  </a>
                </li>
              `,
            )
            .join('')}
        </ul>
      </nav>

      <div class="shrink-0 border-t border-slate-100 p-4">
        <div class="flex items-center gap-3 rounded-xl bg-slate-50 p-2.5">
          <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-xs font-semibold text-white" aria-hidden="true">AL</div>
          <div data-sidebar-label class="min-w-0">
            <p class="truncate text-sm font-semibold text-slate-800">Alice</p>
            <p class="truncate text-xs text-slate-500">Administrator</p>
          </div>
        </div>
      </div>
    </aside>

    <div class="flex min-w-0 flex-1 flex-col">
      <header class="sticky top-0 z-20 flex h-20 shrink-0 items-center justify-between gap-3 border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6 lg:px-8">
        <div class="flex min-w-0 flex-1 items-center gap-3">
          <button id="mobile-menu-toggle" type="button" class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-slate-600 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 md:hidden" aria-label="Buka menu navigasi" aria-expanded="false" aria-controls="sidebar">
            ${icon('menu')}
          </button>
          <label class="flex h-11 min-w-0 w-full max-w-md items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-slate-400 transition focus-within:border-indigo-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-50">
            ${icon('search', 'h-4 w-4 shrink-0')}
            <input type="search" placeholder="Cari..." aria-label="Cari" class="min-w-0 w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400" />
            <kbd class="hidden shrink-0 rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-slate-400 sm:inline">Ctrl K</kbd>
          </label>
        </div>

        <div class="flex shrink-0 items-center gap-2 sm:gap-4">
          <button type="button" class="relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" aria-label="Notifikasi">
            ${icon('bell')}
            <span class="absolute right-2.5 top-2 h-2 w-2 rounded-full border-2 border-white bg-rose-500" aria-label="Notifikasi belum dibaca"></span>
          </button>
          <div class="hidden h-8 w-px bg-slate-200 sm:block" aria-hidden="true"></div>
          <button type="button" class="flex items-center gap-2.5 rounded-xl p-1.5 text-left transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" aria-label="Profil pengguna: Alice">
            <span class="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-xs font-semibold text-white" aria-hidden="true">AL</span>
            <span class="hidden pr-1 sm:block">
              <span class="block text-sm font-semibold leading-5 text-slate-800">Alice</span>
              <span class="block text-xs leading-4 text-slate-500">Administrator</span>
            </span>
          </button>
        </div>
      </header>

      <main id="dashboard-content" class="min-h-0 flex-1 p-4 sm:p-6 lg:p-8" aria-label="Konten dasbor">
        <section aria-labelledby="stats-heading">
          <div class="mb-6">
            <h1 id="stats-heading" class="text-xl font-semibold tracking-tight text-slate-900">Ringkasan Dasbor</h1>
            <p class="mt-1 text-sm text-slate-500">Ringkasan singkat metrik utama Anda.</p>
          </div>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            ${stats
              .map(
                ({ label, value, change, comparison, icon: statIcon, trendIcon, trend, iconColor }) => `
                  <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/40">
                    <div class="flex items-start justify-between gap-4">
                      <div class="min-w-0">
                        <h2 class="text-sm font-medium text-slate-500">${label}</h2>
                        <p class="mt-3 text-3xl font-semibold tracking-tight text-slate-900">${value}</p>
                      </div>
                      <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconColor}" aria-hidden="true">
                        ${icon(statIcon, 'h-5 w-5')}
                      </span>
                    </div>
                    <div class="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs">
                      <span class="inline-flex items-center gap-0.5 font-semibold ${trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}">
                        ${icon(trendIcon, 'h-3.5 w-3.5')}
                        ${change}
                      </span>
                      <span class="text-slate-400">${comparison}</span>
                    </div>
                  </article>
                `,
              )
              .join('')}
          </div>
        </section>

        <section class="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-200/40" aria-labelledby="transactions-heading">
          <div class="flex flex-col gap-4 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 id="transactions-heading" class="text-base font-semibold text-slate-900">Transaksi Terbaru</h2>
              <p class="mt-1 text-sm text-slate-500">Pantau dan kelola pembayaran terbaru Anda.</p>
            </div>
            <div class="flex flex-col gap-2 sm:flex-row sm:items-center">
              <label class="flex h-10 min-w-0 items-center gap-2 rounded-lg border border-slate-200 px-3 text-slate-400 focus-within:border-indigo-300 focus-within:ring-4 focus-within:ring-indigo-50 sm:w-56">
                ${icon('search', 'h-4 w-4 shrink-0')}
                <input id="transaction-search" type="search" placeholder="Cari transaksi..." aria-label="Cari transaksi" class="min-w-0 w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400" />
              </label>
              <div class="relative">
                <button id="transaction-filter-toggle" type="button" class="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 sm:w-auto" aria-haspopup="true" aria-expanded="false" aria-controls="transaction-filter-menu">
                  ${icon('filter', 'h-4 w-4')}
                  <span id="transaction-filter-label">Semua status</span>
                  ${icon('chevronDown', 'h-4 w-4')}
                </button>
                <div id="transaction-filter-menu" class="absolute right-0 z-10 mt-2 hidden w-44 rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg shadow-slate-900/10" role="menu" aria-label="Filter transaksi berdasarkan status">
                  ${['Semua status', 'Lunas', 'Menunggu', 'Gagal', 'Dibatalkan', 'Aktif']
                    .map(
                      (status) => `<button type="button" class="transaction-filter-option block w-full rounded-lg px-3 py-2 text-left text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-900" role="menuitem" data-status="${status === 'Semua status' ? '' : status}">${status}</button>`,
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
              <thead class="bg-slate-50">
                <tr>
                  <th scope="col" class="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Informasi Pengguna</th>
                  <th scope="col" class="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Tanggal</th>
                  <th scope="col" class="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Jumlah</th>
                  <th scope="col" class="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Metode Pembayaran</th>
                  <th scope="col" class="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Status</th>
                </tr>
              </thead>
              <tbody id="transaction-rows" class="divide-y divide-slate-100"></tbody>
            </table>
          </div>

          <div class="flex flex-col gap-3 border-t border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p id="transaction-count" class="text-sm text-slate-500" aria-live="polite"></p>
            <nav id="transaction-pagination" class="flex items-center justify-between gap-1 sm:justify-end" aria-label="Halaman transaksi"></nav>
          </div>
        </section>
      </main>
    </div>
  </div>
`

const pageSize = 5
const transactionRows = document.querySelector('#transaction-rows')
const transactionCount = document.querySelector('#transaction-count')
const transactionPagination = document.querySelector('#transaction-pagination')
const transactionSearch = document.querySelector('#transaction-search')
const filterToggle = document.querySelector('#transaction-filter-toggle')
const filterMenu = document.querySelector('#transaction-filter-menu')
const filterLabel = document.querySelector('#transaction-filter-label')
let activeStatusFilter = ''
let currentPage = 1

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (character) => {
    const entities = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }
    return entities[character]
  })

const getFilteredTransactions = () => {
  const query = transactionSearch.value.trim().toLowerCase()

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

const renderTransactions = () => {
  const filteredTransactions = getFilteredTransactions()
  const pageCount = Math.ceil(filteredTransactions.length / pageSize)
  currentPage = Math.min(currentPage, Math.max(pageCount, 1))
  const firstIndex = (currentPage - 1) * pageSize
  const pageTransactions = filteredTransactions.slice(firstIndex, firstIndex + pageSize)

  transactionRows.innerHTML = pageTransactions.length
    ? pageTransactions
        .map(
          ({ name, email, date, amount, method, status }) => `
            <tr class="transition-colors hover:bg-slate-50">
              <td class="whitespace-nowrap px-5 py-4">
                <div class="flex items-center gap-3">
                  <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-700" aria-hidden="true">${name.split(/\s+/).slice(0, 2).map((part) => part[0]).join('').toLocaleUpperCase('id-ID')}</span>
                  <div>
                    <p class="text-sm font-medium text-slate-900">${escapeHtml(name)}</p>
                    <p class="mt-0.5 text-xs text-slate-500">${escapeHtml(email)}</p>
                  </div>
                </div>
              </td>
              <td class="whitespace-nowrap px-5 py-4 text-sm text-slate-600">${escapeHtml(date)}</td>
              <td class="whitespace-nowrap px-5 py-4 text-sm font-medium text-slate-900">${new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(amount)}</td>
              <td class="whitespace-nowrap px-5 py-4 text-sm text-slate-600">${escapeHtml(method)}</td>
              <td class="whitespace-nowrap px-5 py-4">
                <span class="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[status]}">${escapeHtml(status)}</span>
              </td>
            </tr>
          `,
        )
        .join('')
    : '<tr><td colspan="5" class="px-5 py-12 text-center text-sm text-slate-500">Tidak ada transaksi yang cocok dengan pencarian Anda.</td></tr>'

  transactionCount.textContent = filteredTransactions.length
    ? `Menampilkan ${firstIndex + 1}–${Math.min(firstIndex + pageSize, filteredTransactions.length)} dari ${filteredTransactions.length} transaksi`
    : 'Menampilkan 0 dari 0 transaksi'

  const pageButtons = Array.from({ length: pageCount }, (_, index) => index + 1)
    .map(
      (page) => `
        <button type="button" data-page="${page}" ${page === currentPage ? 'aria-current="page"' : ''} class="h-9 min-w-9 rounded-lg px-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
          page === currentPage ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-100'
        }">${page}</button>
      `,
    )
    .join('')

  transactionPagination.innerHTML = `
    <button type="button" data-page="${Math.max(currentPage - 1, 1)}" ${currentPage <= 1 ? 'disabled' : ''} aria-label="Halaman sebelumnya" class="inline-flex h-9 items-center gap-1 rounded-lg px-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40">
      ${icon('chevron', 'h-4 w-4')}
      <span class="hidden sm:inline">Sebelumnya</span>
    </button>
    ${pageButtons}
    <button type="button" data-page="${Math.min(currentPage + 1, Math.max(pageCount, 1))}" ${currentPage >= pageCount ? 'disabled' : ''} aria-label="Halaman berikutnya" class="inline-flex h-9 items-center gap-1 rounded-lg px-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40">
      <span class="hidden sm:inline">Berikutnya</span>
      ${icon('chevron', 'h-4 w-4 rotate-180')}
    </button>
  `
}

renderTransactions()
transactionSearch.addEventListener('input', () => {
  currentPage = 1
  renderTransactions()
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
  renderTransactions()
  filterToggle.setAttribute('aria-expanded', 'false')
  filterMenu.classList.add('hidden')
})

document.addEventListener('click', (event) => {
  if (!event.target.closest('#transaction-filter-toggle, #transaction-filter-menu')) {
    filterToggle.setAttribute('aria-expanded', 'false')
    filterMenu.classList.add('hidden')
  }
})

transactionPagination.addEventListener('click', (event) => {
  const button = event.target.closest('[data-page]')
  if (!button || button.disabled) return

  currentPage = Number(button.dataset.page)
  renderTransactions()
})

document.querySelector('#transaction-export').addEventListener('click', () => {
  const csvValue = (value) => {
    const safeValue = /^[=+\-@]/.test(String(value)) ? `'${value}` : value
    return `"${String(safeValue).replace(/"/g, '""')}"`
  }
  const rows = [
    ['Pengguna', 'Email', 'Tanggal', 'Jumlah (Rp)', 'Metode Pembayaran', 'Status'],
    ...getFilteredTransactions().map(({ name, email, date, amount, method, status }) => [
      name,
      email,
      date,
      amount,
      method,
      status,
    ]),
  ]
  const csv = rows.map((row) => row.map(csvValue).join(',')).join('\r\n')
  const blobUrl = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const downloadLink = document.createElement('a')
  downloadLink.href = blobUrl
  downloadLink.download = 'transaksi.csv'
  downloadLink.click()
  setTimeout(() => URL.revokeObjectURL(blobUrl), 1000)
})

const sidebar = document.querySelector('#sidebar')
const sidebarToggle = document.querySelector('#sidebar-toggle')
const mobileMenuToggle = document.querySelector('#mobile-menu-toggle')
const sidebarOverlay = document.querySelector('#sidebar-overlay')
const sidebarLabels = document.querySelectorAll('[data-sidebar-label]')
const sidebarLinks = document.querySelectorAll('.sidebar-link')
const sidebarToggleIcon = sidebarToggle.querySelector('svg')
let sidebarCollapsed = false

sidebarToggle.addEventListener('click', () => {
  sidebarCollapsed = !sidebarCollapsed

  sidebar.style.width = sidebarCollapsed ? '5rem' : '16rem'
  sidebarLabels.forEach((label) => label.classList.toggle('md:hidden', sidebarCollapsed))
  sidebarLinks.forEach((link) => link.classList.toggle('md:justify-center', sidebarCollapsed))
  sidebarToggleIcon.classList.toggle('rotate-180', sidebarCollapsed)
  sidebarToggle.setAttribute('aria-expanded', String(!sidebarCollapsed))
  sidebarToggle.setAttribute('aria-label', sidebarCollapsed ? 'Lebarkan bilah sisi' : 'Ciutkan bilah sisi')
  sidebarToggle.title = sidebarCollapsed ? 'Lebarkan bilah sisi' : 'Ciutkan bilah sisi'
})

const setMobileMenuOpen = (isOpen) => {
  if (isOpen && window.innerWidth < 768) sidebar.style.width = ''
  sidebar.classList.toggle('hidden', !isOpen)
  sidebarOverlay.classList.toggle('hidden', !isOpen)
  mobileMenuToggle.setAttribute('aria-expanded', String(isOpen))
  mobileMenuToggle.setAttribute('aria-label', isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi')
  mobileMenuToggle.innerHTML = icon(isOpen ? 'close' : 'menu')
}

mobileMenuToggle.addEventListener('click', () => {
  const isOpen = mobileMenuToggle.getAttribute('aria-expanded') === 'true'
  setMobileMenuOpen(!isOpen)
})
sidebarOverlay.addEventListener('click', () => setMobileMenuOpen(false))
sidebarLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) setMobileMenuOpen(false)
  })
})
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMobileMenuOpen(false)
})
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    setMobileMenuOpen(false)
    sidebar.style.width = sidebarCollapsed ? '5rem' : ''
  } else {
    sidebar.style.width = ''
  }
})
