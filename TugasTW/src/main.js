import './style.css'
import { renderDashboard } from './components/Dashboard.js'
import { initSidebar } from './features/sidebar.js'
import { initTheme } from './features/theme.js'
import { initTransactionsTable } from './components/TransactionsTable.js'

document.querySelector('#app').innerHTML = renderDashboard()

initTheme()
initSidebar()
initTransactionsTable()
