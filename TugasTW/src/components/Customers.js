import { icon } from '../utils/icons.js'

const customers = [
  { name: 'Dewi Lestari', email: 'dewi.lestari@gmail.com', company: 'Nusa Kreatif', joined: '12 Agu 2025', orders: 18, spent: 12450000, status: 'Aktif' },
  { name: 'Budi Santoso', email: 'budi.santoso@gmail.com', company: 'Bumi Digital', joined: '03 Sep 2025', orders: 12, spent: 8725000, status: 'Aktif' },
  { name: 'Siti Nurhaliza', email: 'siti.nurhaliza@gmail.com', company: 'Karya Bersama', joined: '19 Sep 2025', orders: 9, spent: 6340000, status: 'Aktif' },
  { name: 'Andi Pratama', email: 'andi.pratama@gmail.com', company: 'Sentra Niaga', joined: '02 Okt 2025', orders: 7, spent: 5180000, status: 'Menunggu' },
  { name: 'Putri Maharani', email: 'putri.maharani@gmail.com', company: 'Langit Studio', joined: '14 Okt 2025', orders: 6, spent: 4260000, status: 'Aktif' },
  { name: 'Rizky Firmansyah', email: 'rizky.firmansyah@gmail.com', company: 'Ruang Solusi', joined: '27 Okt 2025', orders: 4, spent: 2980000, status: 'Tidak aktif' },
  { name: 'Ayu Wulandari', email: 'ayu.wulandari@gmail.com', company: 'Tumbuh Jaya', joined: '08 Nov 2025', orders: 3, spent: 2140000, status: 'Aktif' },
  { name: 'Fajar Ramadhan', email: 'fajar.ramadhan@gmail.com', company: 'Cipta Mandiri', joined: '21 Nov 2025', orders: 2, spent: 1580000, status: 'Menunggu' },
]

const statusClasses = {
  Aktif: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300',
  Menunggu: 'bg-amber-50 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300',
  'Tidak aktif': 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300',
}

const formatCurrency = (amount) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(amount)

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (character) => {
    const entities = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }
    return entities[character]
  })

export const renderCustomers = () => `
  <section aria-labelledby="customers-heading">
    <div class="mb-6 flex flex-wrap items-end justify-between gap-3">
      <div>
        <h1 id="customers-heading" class="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Pelanggan</h1>
        <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Lihat dan pantau hubungan Anda dengan pelanggan.</p>
      </div>
    </div>

    <div class="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
      <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
        <p class="text-sm font-medium text-slate-500 dark:text-slate-400">Total pelanggan</p>
        <p class="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">${customers.length}</p>
      </article>
      <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
        <p class="text-sm font-medium text-slate-500 dark:text-slate-400">Pelanggan aktif</p>
        <p class="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">${customers.filter(({ status }) => status === 'Aktif').length}</p>
      </article>
      <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
        <p class="text-sm font-medium text-slate-500 dark:text-slate-400">Total nilai transaksi</p>
        <p class="mt-3 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">${formatCurrency(customers.reduce((total, customer) => total + customer.spent, 0))}</p>
      </article>
    </div>

    <section class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none" aria-labelledby="customer-list-heading">
      <div class="flex flex-col gap-4 border-b border-slate-200 p-5 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 id="customer-list-heading" class="text-base font-semibold text-slate-900 dark:text-white">Daftar Pelanggan</h2>
          <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Cari berdasarkan nama, email, atau perusahaan.</p>
        </div>
        <div class="flex flex-col gap-2 sm:flex-row">
          <label class="flex h-10 min-w-0 items-center gap-2 rounded-lg border border-slate-200 px-3 text-slate-400 focus-within:border-indigo-300 focus-within:ring-4 focus-within:ring-indigo-50 dark:border-slate-700 dark:focus-within:border-indigo-500 dark:focus-within:ring-indigo-950 sm:w-64">
            ${icon('search', 'h-4 w-4 shrink-0')}
            <input id="customer-search" type="search" placeholder="Cari pelanggan..." aria-label="Cari pelanggan" class="min-w-0 w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:text-slate-100 dark:placeholder:text-slate-500" />
          </label>
          <label class="sr-only" for="customer-status-filter">Filter status pelanggan</label>
          <select id="customer-status-filter" class="h-10 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-600 outline-none focus:border-indigo-300 focus:ring-4 focus:ring-indigo-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:focus:border-indigo-500 dark:focus:ring-indigo-950">
            <option value="">Semua status</option>
            <option value="Aktif">Aktif</option>
            <option value="Menunggu">Menunggu</option>
            <option value="Tidak aktif">Tidak aktif</option>
          </select>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full min-w-[760px] border-collapse text-left">
          <thead class="bg-slate-50 dark:bg-slate-800/70">
            <tr>
              <th scope="col" class="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Pelanggan</th>
              <th scope="col" class="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Perusahaan</th>
              <th scope="col" class="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Bergabung</th>
              <th scope="col" class="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Pesanan</th>
              <th scope="col" class="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Total belanja</th>
              <th scope="col" class="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Status</th>
            </tr>
          </thead>
          <tbody id="customer-rows" class="divide-y divide-slate-100 dark:divide-slate-800"></tbody>
        </table>
      </div>
      <p id="customer-count" class="border-t border-slate-200 px-5 py-4 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400" aria-live="polite"></p>
    </section>
  </section>
`

export const initCustomersPage = () => {
  const searchInput = document.querySelector('#customer-search')
  const statusFilter = document.querySelector('#customer-status-filter')
  const rows = document.querySelector('#customer-rows')
  const count = document.querySelector('#customer-count')

  if (!searchInput || !statusFilter || !rows || !count) return

  const renderRows = () => {
    const query = searchInput.value.trim().toLocaleLowerCase('id-ID')
    const selectedStatus = statusFilter.value
    const filteredCustomers = customers.filter((customer) => {
      const matchesSearch = [customer.name, customer.email, customer.company]
        .join(' ')
        .toLocaleLowerCase('id-ID')
        .includes(query)

      return matchesSearch && (!selectedStatus || customer.status === selectedStatus)
    })

    rows.innerHTML = filteredCustomers.length
      ? filteredCustomers.map(({ name, email, company, joined, orders, spent, status }) => `
          <tr class="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/60">
            <td class="whitespace-nowrap px-5 py-4">
              <div class="flex items-center gap-3">
                <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-700 dark:bg-indigo-400/15 dark:text-indigo-300" aria-hidden="true">${escapeHtml(name.split(/\s+/).slice(0, 2).map((part) => part[0]).join('').toLocaleUpperCase('id-ID'))}</span>
                <div>
                  <p class="text-sm font-medium text-slate-900 dark:text-slate-100">${escapeHtml(name)}</p>
                  <p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400">${escapeHtml(email)}</p>
                </div>
              </div>
            </td>
            <td class="whitespace-nowrap px-5 py-4 text-sm text-slate-600 dark:text-slate-300">${escapeHtml(company)}</td>
            <td class="whitespace-nowrap px-5 py-4 text-sm text-slate-600 dark:text-slate-300">${escapeHtml(joined)}</td>
            <td class="whitespace-nowrap px-5 py-4 text-sm text-slate-600 dark:text-slate-300">${orders}</td>
            <td class="whitespace-nowrap px-5 py-4 text-sm font-medium text-slate-900 dark:text-slate-100">${formatCurrency(spent)}</td>
            <td class="whitespace-nowrap px-5 py-4"><span class="inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusClasses[status]}">${status}</span></td>
          </tr>
        `).join('')
      : '<tr><td colspan="6" class="px-5 py-10 text-center text-sm text-slate-500 dark:text-slate-400">Tidak ada pelanggan yang cocok dengan pencarian.</td></tr>'

    count.textContent = `Menampilkan ${filteredCustomers.length} dari ${customers.length} pelanggan`
  }

  searchInput.addEventListener('input', renderRows)
  statusFilter.addEventListener('change', renderRows)
  renderRows()
}
