import { stats } from '../data/dashboardData.js'
import { icon } from '../utils/icons.js'

export const renderStatsCards = () => `
  <section aria-labelledby="stats-heading">
    <div class="mb-6">
      <h1 id="stats-heading" class="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Ringkasan Dasbor</h1>
      <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Ringkasan singkat metrik utama Anda.</p>
    </div>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      ${stats
        .map(
          ({ label, value, change, comparison, icon: statIcon, trendIcon, trend, iconColor }) => `
            <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
              <div class="flex items-start justify-between gap-4">
                <div class="min-w-0">
                  <h2 class="text-sm font-medium text-slate-500 dark:text-slate-400">${label}</h2>
                  <p class="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">${value}</p>
                </div>
                <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconColor} dark:bg-slate-800 dark:text-indigo-300" aria-hidden="true">
                  ${icon(statIcon, 'h-5 w-5')}
                </span>
              </div>
              <div class="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs">
                <span class="inline-flex items-center gap-0.5 font-semibold ${trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}">
                  ${icon(trendIcon, 'h-3.5 w-3.5')}
                  ${change}
                </span>
                <span class="text-slate-400 dark:text-slate-500">${comparison}</span>
              </div>
            </article>
          `,
        )
        .join('')}
    </div>
  </section>
`
