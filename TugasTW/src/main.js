import './style.css'
import { renderDashboard } from './components/Dashboard.js'
import { initSidebar } from './features/sidebar.js'
import { initTheme } from './features/theme.js'
import { initNavigation } from './features/navigation.js'
import { initWorkspaceClock } from './features/preferences.js'

document.querySelector('#app').innerHTML = renderDashboard()

initTheme()
initSidebar()
initWorkspaceClock()
initNavigation()
