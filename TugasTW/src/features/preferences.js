import { formatWorkspaceTime, getDashboardPreferences, getTimeZoneLabel } from '../utils/preferences.js'

export const initWorkspaceClock = () => {
  const clock = document.querySelector('#workspace-clock')
  const timeZone = document.querySelector('#workspace-timezone')
  if (!clock || !timeZone) return

  const updateClock = () => {
    const preferences = getDashboardPreferences()
    clock.textContent = new Intl.DateTimeFormat('id-ID', {
      timeZone: preferences.timeZone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(new Date())
    timeZone.textContent = getTimeZoneLabel(preferences.timeZone)
  }

  updateClock()
  const timer = window.setInterval(updateClock, 1000)
  window.addEventListener('orbit-settings-updated', updateClock)
  window.addEventListener('pagehide', () => window.clearInterval(timer), { once: true })
}
