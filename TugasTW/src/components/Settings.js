import {
  formatCurrency,
  formatWorkspaceTime,
  getCurrencyRateNote,
  getDashboardPreferences,
  getTimeZoneLabel,
  dashboardPreferencesStorageKey,
} from '../utils/preferences.js'

export const renderSettings = () => `
  <section aria-labelledby="settings-heading">
    <div class="mb-6">
      <h1 id="settings-heading" class="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Pengaturan</h1>
      <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Atur preferensi regional dan notifikasi akun Anda.</p>
    </div>

    <form id="settings-form" class="space-y-6">
      <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none sm:p-6" aria-labelledby="regional-settings-heading">
        <div class="mb-6">
          <h2 id="regional-settings-heading" class="text-base font-semibold text-slate-900 dark:text-white">Preferensi Regional</h2>
          <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Pilih zona waktu dan mata uang untuk tampilan dashboard.</p>
        </div>
        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label class="block">
            <span class="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Zona waktu</span>
            <select id="settings-timezone" name="timezone" class="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-indigo-300 focus:ring-4 focus:ring-indigo-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:focus:border-indigo-500 dark:focus:ring-indigo-950">
              <option value="Asia/Jakarta">WIB — Jakarta</option>
              <option value="Asia/Makassar">WITA — Makassar</option>
              <option value="Asia/Jayapura">WIT — Jayapura</option>
            </select>
          </label>
          <label class="block">
            <span class="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Mata uang</span>
            <select id="settings-currency" name="currency" class="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-indigo-300 focus:ring-4 focus:ring-indigo-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:focus:border-indigo-500 dark:focus:ring-indigo-950">
              <option value="IDR">Rupiah Indonesia (IDR)</option>
              <option value="USD">Dolar Amerika (USD)</option>
              <option value="SGD">Dolar Singapura (SGD)</option>
            </select>
          </label>
        </div>
        <div class="mt-5 rounded-xl bg-slate-50 p-4 dark:bg-slate-800/70">
          <p class="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">Pratinjau preferensi</p>
          <p id="settings-currency-preview" class="mt-2 text-lg font-semibold text-slate-900 dark:text-white"></p>
          <p id="settings-currency-rate-note" class="mt-1 text-xs text-slate-500 dark:text-slate-400"></p>
          <p class="mt-3 text-sm text-slate-600 dark:text-slate-300">
            Waktu saat ini (<span id="settings-timezone-label"></span>):
            <time id="settings-time-preview" class="font-medium tabular-nums text-slate-800 dark:text-slate-100"></time>
          </p>
        </div>
      </section>

      <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none sm:p-6" aria-labelledby="notification-settings-heading">
        <div class="mb-5">
          <h2 id="notification-settings-heading" class="text-base font-semibold text-slate-900 dark:text-white">Notifikasi</h2>
          <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Pilih pembaruan yang ingin Anda terima melalui email.</p>
        </div>
        <div class="divide-y divide-slate-100 dark:divide-slate-800">
          <label class="flex cursor-pointer items-center justify-between gap-4 py-4 first:pt-0">
            <span>
              <span class="block text-sm font-medium text-slate-800 dark:text-slate-200">Ringkasan analitik mingguan</span>
              <span class="mt-1 block text-sm text-slate-500 dark:text-slate-400">Terima ringkasan performa setiap minggu.</span>
            </span>
            <input id="settings-weekly-summary" name="weeklySummary" type="checkbox" class="h-4 w-4 shrink-0 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-800" />
          </label>
          <label class="flex cursor-pointer items-center justify-between gap-4 py-4 last:pb-0">
            <span>
              <span class="block text-sm font-medium text-slate-800 dark:text-slate-200">Pembaruan transaksi</span>
              <span class="mt-1 block text-sm text-slate-500 dark:text-slate-400">Terima pemberitahuan saat status pembayaran berubah.</span>
            </span>
            <input id="settings-transaction-updates" name="transactionUpdates" type="checkbox" class="h-4 w-4 shrink-0 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-800" />
          </label>
        </div>
      </section>

      <div class="flex flex-wrap items-center gap-4">
        <button type="submit" class="inline-flex h-10 items-center justify-center rounded-lg bg-indigo-600 px-4 text-sm font-medium text-white transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2">
          Simpan Pengaturan
        </button>
        <p id="settings-feedback" class="text-sm text-slate-500 dark:text-slate-400" role="status" aria-live="polite"></p>
      </div>
    </form>
  </section>
`

export const initSettings = () => {
  const form = document.querySelector('#settings-form')
  if (!form) return

  const timezone = document.querySelector('#settings-timezone')
  const currency = document.querySelector('#settings-currency')
  const weeklySummary = document.querySelector('#settings-weekly-summary')
  const transactionUpdates = document.querySelector('#settings-transaction-updates')
  const feedback = document.querySelector('#settings-feedback')
  const currencyPreview = document.querySelector('#settings-currency-preview')
  const currencyRateNote = document.querySelector('#settings-currency-rate-note')
  const timeZoneLabel = document.querySelector('#settings-timezone-label')
  const timePreview = document.querySelector('#settings-time-preview')
  const savedSettings = getDashboardPreferences()

  timezone.value = savedSettings.timeZone
  currency.value = savedSettings.currency
  weeklySummary.checked = savedSettings.weeklySummary === true
  transactionUpdates.checked = savedSettings.transactionUpdates === true

  const updatePreviews = () => {
    const selectedCurrency = currency.value
    const selectedTimeZone = timezone.value
    currencyPreview.textContent = formatCurrency(48294000, selectedCurrency)
    currencyRateNote.textContent = getCurrencyRateNote(selectedCurrency)
    timeZoneLabel.textContent = getTimeZoneLabel(selectedTimeZone)
    timePreview.textContent = formatWorkspaceTime(new Date(), selectedTimeZone)
  }

  currency.addEventListener('change', updatePreviews)
  timezone.addEventListener('change', updatePreviews)
  updatePreviews()
  const previewTimer = window.setInterval(updatePreviews, 1000)

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const settings = {
      timezone: timezone.value,
      currency: currency.value,
      weeklySummary: weeklySummary.checked,
      transactionUpdates: transactionUpdates.checked,
    }

    try {
      localStorage.setItem(dashboardPreferencesStorageKey, JSON.stringify(settings))
      feedback.textContent = 'Pengaturan berhasil disimpan di perangkat ini.'
      feedback.className = 'text-sm text-emerald-600 dark:text-emerald-400'
      window.dispatchEvent(new CustomEvent('orbit-settings-updated'))
    } catch (error) {
      console.error('Pengaturan tidak dapat disimpan ke penyimpanan lokal.', error)
      feedback.textContent = 'Pengaturan gagal disimpan. Periksa penyimpanan browser Anda.'
      feedback.className = 'text-sm text-rose-600 dark:text-rose-400'
    }
  })

  return () => window.clearInterval(previewTimer)
}
