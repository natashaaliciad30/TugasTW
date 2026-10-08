import { icon } from '../utils/icons.js'

export const renderHeader = () => `
  <header class="sticky top-0 z-20 flex h-20 shrink-0 items-center justify-between gap-3 border-b border-slate-200 bg-white/95 px-4 backdrop-blur dark:border-slate-800 dark:bg-slate-900/95 sm:px-6 lg:px-8">
    <div class="flex min-w-0 flex-1 items-center gap-3">
      <button id="mobile-menu-toggle" type="button" class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-slate-600 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-slate-300 dark:hover:bg-slate-800 md:hidden" aria-label="Buka menu navigasi" aria-expanded="false" aria-controls="sidebar">
        ${icon('menu')}
      </button>
      <label class="flex h-11 min-w-0 w-full max-w-md items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-slate-400 transition focus-within:border-indigo-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-50 dark:border-slate-700 dark:bg-slate-800 dark:focus-within:border-indigo-500 dark:focus-within:bg-slate-800 dark:focus-within:ring-indigo-950">
        ${icon('search', 'h-4 w-4 shrink-0')}
        <input type="search" placeholder="Cari..." aria-label="Cari" class="min-w-0 w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:text-slate-100 dark:placeholder:text-slate-500" />
        <kbd class="hidden shrink-0 rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-500 sm:inline">Ctrl K</kbd>
      </label>
    </div>

    <div class="hidden shrink-0 text-right lg:block" aria-live="off">
      <p id="workspace-clock" class="text-sm font-semibold tabular-nums text-slate-800 dark:text-slate-100"></p>
      <p id="workspace-timezone" class="mt-0.5 text-xs text-slate-500 dark:text-slate-400"></p>
    </div>

    <div class="flex shrink-0 items-center gap-2 sm:gap-4">
      <button id="theme-toggle" type="button" class="flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100" aria-label="Aktifkan mode gelap" aria-pressed="false" title="Aktifkan mode gelap"></button>
      <button type="button" class="relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100" aria-label="Notifikasi">
        ${icon('bell')}
        <span class="absolute right-2.5 top-2 h-2 w-2 rounded-full border-2 border-white bg-rose-500 dark:border-slate-900" aria-label="Notifikasi belum dibaca"></span>
      </button>
      <div class="hidden h-8 w-px bg-slate-200 dark:bg-slate-700 sm:block" aria-hidden="true"></div>
      <button type="button" class="flex items-center gap-2.5 rounded-xl p-1.5 text-left transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:hover:bg-slate-800" aria-label="Profil pengguna: Alice">
        <span class="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-xs font-semibold text-white" aria-hidden="true">AL</span>
        <span class="hidden pr-1 sm:block">
          <span class="block text-sm font-semibold leading-5 text-slate-800 dark:text-slate-100">Alice</span>
          <span class="block text-xs leading-4 text-slate-500 dark:text-slate-400">Administrator</span>
        </span>
      </button>
    </div>
  </header>
`
