export const dashboardPreferencesStorageKey = 'orbit-settings'
const demoConversionRates = {
  IDR: 1,
  USD: 1 / 16000,
  SGD: 1 / 12000,
}

const supportedCurrencies = ['IDR', 'USD', 'SGD']
const supportedTimeZones = ['Asia/Jakarta', 'Asia/Makassar', 'Asia/Jayapura']

export const getDashboardPreferences = () => {
  try {
    const storedPreferences = localStorage.getItem(dashboardPreferencesStorageKey)
    if (!storedPreferences) return { currency: 'IDR', timeZone: 'Asia/Jakarta' }

    const preferences = JSON.parse(storedPreferences)
    if (!preferences || typeof preferences !== 'object' || Array.isArray(preferences)) {
      return { currency: 'IDR', timeZone: 'Asia/Jakarta' }
    }

    return {
      currency: supportedCurrencies.includes(preferences.currency) ? preferences.currency : 'IDR',
      timeZone: supportedTimeZones.includes(preferences.timezone) ? preferences.timezone : 'Asia/Jakarta',
      weeklySummary: preferences.weeklySummary === true,
      transactionUpdates: preferences.transactionUpdates === true,
    }
  } catch (error) {
    console.warn('Preferensi regional tidak dapat dibaca dari penyimpanan lokal.', error)
    return { currency: 'IDR', timeZone: 'Asia/Jakarta' }
  }
}

export const formatCurrency = (amount, currency = getDashboardPreferences().currency) => {
  const convertedAmount = amount * demoConversionRates[currency]

  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency,
    maximumFractionDigits: currency === 'IDR' ? 0 : 2,
  }).format(convertedAmount)
}

export const getCurrencyRateNote = (currency) => {
  if (currency === 'USD') return 'Kurs contoh: Rp16.000 = US$1. Tidak menggunakan kurs real-time.'
  if (currency === 'SGD') return 'Kurs contoh: Rp12.000 = S$1. Tidak menggunakan kurs real-time.'
  return 'Nominal ditampilkan dalam Rupiah Indonesia.'
}

export const formatWorkspaceTime = (date, timeZone) =>
  new Intl.DateTimeFormat('id-ID', {
    timeZone,
    dateStyle: 'medium',
    timeStyle: 'medium',
  }).format(date)

export const getTimeZoneLabel = (timeZone) => {
  const labels = {
    'Asia/Jakarta': 'WIB — Jakarta',
    'Asia/Makassar': 'WITA — Makassar',
    'Asia/Jayapura': 'WIT — Jayapura',
  }

  return labels[timeZone] || labels['Asia/Jakarta']
}
