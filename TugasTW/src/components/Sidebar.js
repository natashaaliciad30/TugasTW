import { navigationItems } from '../data/dashboardData.js'
import { icon } from '../utils/icons.js'

export const renderSidebar = (activePage = 'dasbor') => `
  <div id="sidebar-overlay" class="hidden fixed inset-0 z-30 bg-slate-950/40 md:hidden" aria-hidden="true"></div>

  <aside id="sidebar" class="hidden fixed inset-y-0 left-0 z-40 h-screen w-64 shrink-0 flex flex-col border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 md:sticky md:top-0 md:flex">
    <div class="flex h-20 shrink-0 items-center justify-between border-b border-slate-100 px-5 dark:border-slate-800">
      <a href="#dasbor" class="flex min-w-0 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" aria-label="Beranda Orbit">
        <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white shadow-sm shadow-indigo-200">O</span>
        <span data-sidebar-label class="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">orbit<span class="text-indigo-600">.</span></span>
      </a>
      <button id="sidebar-toggle" type="button" class="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white md:flex" aria-label="Ciutkan bilah sisi" aria-expanded="true" title="Ciutkan bilah sisi">
        ${icon('chevron', 'h-4 w-4 transition-transform duration-300')}
      </button>
    </div>

    <nav class="flex-1 overflow-y-auto px-3 py-6" aria-label="Navigasi utama">
      <p data-sidebar-label class="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">Ruang Kerja</p>
      <ul class="space-y-1">
        ${navigationItems
          .map(
            ({ label, icon: iconName }) => {
              const page = label.toLowerCase()
              const active = page === activePage

              return `
              <li>
                <a href="#${page}" data-nav-link title="${label}" ${active ? 'aria-current="page"' : ''} class="sidebar-link group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  active
                    ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-300'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100'
                }">
                  ${icon(iconName, `h-5 w-5 ${active ? 'text-indigo-600 dark:text-indigo-300' : 'text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300'}`)}
                  <span data-sidebar-label>${label}</span>
                </a>
              </li>
            `
            },
          )
          .join('')}
      </ul>
    </nav>

    <div class="shrink-0 border-t border-slate-100 p-4 dark:border-slate-800">
      <div class="flex items-center gap-3 rounded-xl bg-slate-50 p-2.5 dark:bg-slate-800">
        <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-xs font-semibold text-white" aria-hidden="true">AL</div>
        <div data-sidebar-label class="min-w-0">
          <p class="truncate text-sm font-semibold text-slate-800 dark:text-slate-100">Alice</p>
          <p class="truncate text-xs text-slate-500 dark:text-slate-400">Administrator</p>
        </div>
      </div>
    </div>
  </aside>
`
