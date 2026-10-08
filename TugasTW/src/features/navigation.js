import { renderAnalytics } from '../components/Analytics.js'
import { initCustomersPage, renderCustomers } from '../components/Customers.js'
import { renderDashboardContent } from '../components/Dashboard.js'
import { initSettings, renderSettings } from '../components/Settings.js'
import { initTransactionsTable } from '../components/TransactionsTable.js'

const setActiveNavigation = (page) => {
  document.querySelectorAll('[data-nav-link]').forEach((link) => {
    const active = link.getAttribute('href') === `#${page}`
    const icon = link.querySelector('svg')

    link.classList.toggle('bg-indigo-50', active)
    link.classList.toggle('text-indigo-700', active)
    link.classList.toggle('dark:bg-indigo-400/10', active)
    link.classList.toggle('dark:text-indigo-300', active)
    link.classList.toggle('text-slate-500', !active)
    link.classList.toggle('hover:bg-slate-50', !active)
    link.classList.toggle('hover:text-slate-900', !active)
    link.classList.toggle('dark:text-slate-400', !active)
    link.classList.toggle('dark:hover:bg-slate-800', !active)
    link.classList.toggle('dark:hover:text-slate-100', !active)
    if (active) {
      link.setAttribute('aria-current', 'page')
    } else {
      link.removeAttribute('aria-current')
    }

    icon.classList.toggle('text-indigo-600', active)
    icon.classList.toggle('dark:text-indigo-300', active)
    icon.classList.toggle('text-slate-400', !active)
    icon.classList.toggle('group-hover:text-slate-600', !active)
    icon.classList.toggle('dark:group-hover:text-slate-300', !active)
  })
}

export const initNavigation = () => {
  const content = document.querySelector('#dashboard-content')
  let cleanupCurrentPage

  const renderCurrentPage = () => {
    const page = window.location.hash.slice(1) || 'dasbor'
    const pages = {
      dasbor: {
        label: 'Konten dasbor',
        render: renderDashboardContent,
        initialize: initTransactionsTable,
      },
      analitik: {
        label: 'Konten analitik',
        render: renderAnalytics,
      },
      pelanggan: {
        label: 'Konten pelanggan',
        render: renderCustomers,
        initialize: initCustomersPage,
      },
      pengaturan: {
        label: 'Konten pengaturan',
        render: renderSettings,
        initialize: initSettings,
      },
    }

    const currentPage = pages[page]
    if (!currentPage) return

    cleanupCurrentPage?.()
    content.innerHTML = currentPage.render()
    content.setAttribute('aria-label', currentPage.label)
    cleanupCurrentPage = currentPage.initialize?.()
    setActiveNavigation(page)
  }

  window.addEventListener('hashchange', renderCurrentPage)
  renderCurrentPage()
}
