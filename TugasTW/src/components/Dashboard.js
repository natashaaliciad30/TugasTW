import { renderHeader } from './Header.js'
import { renderRevenueChart } from './RevenueChart.js'
import { renderSidebar } from './Sidebar.js'
import { renderStatsCards } from './StatsCards.js'
import { renderTransactionsTable } from './TransactionsTable.js'

export const renderDashboardContent = () => `
  ${renderStatsCards()}
  ${renderRevenueChart()}
  ${renderTransactionsTable()}
`

export const renderDashboard = () => `
  <div class="flex min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    ${renderSidebar()}
    <div class="flex min-w-0 flex-1 flex-col">
      ${renderHeader()}
      <main id="dashboard-content" class="min-h-0 flex-1 p-4 sm:p-6 lg:p-8" aria-label="Konten dasbor">
        ${renderDashboardContent()}
      </main>
    </div>
  </div>
`
