import { icon } from '../utils/icons.js'

export const initTheme = () => {
  const themeToggle = document.querySelector('#theme-toggle')

  const updateThemeToggle = (isDark) => {
    themeToggle.innerHTML = icon(isDark ? 'sun' : 'moon')
    themeToggle.setAttribute('aria-pressed', String(isDark))
    themeToggle.setAttribute('aria-label', isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap')
    themeToggle.title = isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'
  }

  updateThemeToggle(document.documentElement.classList.contains('dark'))
  themeToggle.addEventListener('click', () => {
    const isDark = !document.documentElement.classList.contains('dark')
    document.documentElement.classList.toggle('dark', isDark)
    updateThemeToggle(isDark)

    try {
      localStorage.setItem('orbit-theme', isDark ? 'dark' : 'light')
    } catch (error) {
      console.warn('Preferensi tema tidak dapat disimpan. Tema hanya berlaku selama sesi ini.', error)
    }
  })
}
