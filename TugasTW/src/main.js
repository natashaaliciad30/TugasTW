import './style.css'

const icon = (name, className = 'h-5 w-5') => {
  const paths = {
    dashboard:
      '<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>',
    analytics:
      '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-5 5"/><path d="M19 9h-5"/><path d="M19 9v5"/>',
    customers:
      '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    settings:
      '<path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"/><path d="m19.4 15 .1.1a1.7 1.7 0 0 1-2.4 2.4l-.1-.1a1.7 1.7 0 0 0-2.9 1.2v.3a1.7 1.7 0 0 1-3.4 0v-.2a1.7 1.7 0 0 0-2.9-1.2l-.1.1a1.7 1.7 0 1 1-2.4-2.4l.1-.1a1.7 1.7 0 0 0-1.2-2.9h-.3a1.7 1.7 0 0 1 0-3.4h.2a1.7 1.7 0 0 0 1.2-2.9l-.1-.1a1.7 1.7 0 1 1 2.4-2.4l.1.1a1.7 1.7 0 0 0 2.9-1.2v-.3a1.7 1.7 0 0 1 3.4 0v.2a1.7 1.7 0 0 0 2.9 1.2l.1-.1a1.7 1.7 0 1 1 2.4 2.4l-.1.1a1.7 1.7 0 0 0 1.2 2.9h.3a1.7 1.7 0 0 1 0 3.4h-.2a1.7 1.7 0 0 0-1.2 2.9Z"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    close: '<path d="m18 6-12 12M6 6l12 12"/>',
    chevron: '<path d="m15 18-6-6 6-6"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/>',
  }

  return `<svg class="${className} shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`
}

const navigation = [
  { label: 'Dashboard', icon: 'dashboard', active: true },
  { label: 'Analytics', icon: 'analytics' },
  { label: 'Customers', icon: 'customers' },
  { label: 'Settings', icon: 'settings' },
]

document.querySelector('#app').innerHTML = `
  <div class="flex min-h-screen bg-slate-50 text-slate-900">
    <div id="sidebar-overlay" class="hidden fixed inset-0 z-30 bg-slate-950/40 md:hidden" aria-hidden="true"></div>

    <aside id="sidebar" class="hidden fixed inset-y-0 left-0 z-40 h-screen w-64 shrink-0 flex flex-col border-r border-slate-200 bg-white md:sticky md:top-0 md:flex">
      <div class="flex h-20 shrink-0 items-center justify-between border-b border-slate-100 px-5">
        <a href="#dashboard" class="flex min-w-0 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" aria-label="Orbit home">
          <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white shadow-sm shadow-indigo-200">O</span>
          <span data-sidebar-label class="text-lg font-semibold tracking-tight text-slate-900">orbit<span class="text-indigo-600">.</span></span>
        </a>
        <button id="sidebar-toggle" type="button" class="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 md:flex" aria-label="Collapse sidebar" aria-expanded="true" title="Collapse sidebar">
          ${icon('chevron', 'h-4 w-4 transition-transform duration-300')}
        </button>
      </div>

      <nav class="flex-1 overflow-y-auto px-3 py-6" aria-label="Main navigation">
        <p data-sidebar-label class="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">Workspace</p>
        <ul class="space-y-1">
          ${navigation
            .map(
              ({ label, icon: iconName, active }) => `
                <li>
                  <a href="#${label.toLowerCase()}" title="${label}" ${active ? 'aria-current="page"' : ''} class="sidebar-link group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                    active
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                  }">
                    ${icon(iconName, `h-5 w-5 ${active ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-600'}`)}
                    <span data-sidebar-label>${label}</span>
                  </a>
                </li>
              `,
            )
            .join('')}
        </ul>
      </nav>

      <div class="shrink-0 border-t border-slate-100 p-4">
        <div class="flex items-center gap-3 rounded-xl bg-slate-50 p-2.5">
          <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-xs font-semibold text-white" aria-hidden="true">JD</div>
          <div data-sidebar-label class="min-w-0">
            <p class="truncate text-sm font-semibold text-slate-800">Jamie Doe</p>
            <p class="truncate text-xs text-slate-500">Admin</p>
          </div>
        </div>
      </div>
    </aside>

    <div class="flex min-w-0 flex-1 flex-col">
      <header class="sticky top-0 z-20 flex h-20 shrink-0 items-center justify-between gap-3 border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6 lg:px-8">
        <div class="flex min-w-0 flex-1 items-center gap-3">
          <button id="mobile-menu-toggle" type="button" class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-slate-600 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 md:hidden" aria-label="Open navigation menu" aria-expanded="false" aria-controls="sidebar">
            ${icon('menu')}
          </button>
          <label class="flex h-11 min-w-0 w-full max-w-md items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-slate-400 transition focus-within:border-indigo-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-50">
            ${icon('search', 'h-4 w-4 shrink-0')}
            <input type="search" placeholder="Search..." aria-label="Search" class="min-w-0 w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400" />
            <kbd class="hidden shrink-0 rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-slate-400 sm:inline">⌘ K</kbd>
          </label>
        </div>

        <div class="flex shrink-0 items-center gap-2 sm:gap-4">
          <button type="button" class="relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" aria-label="Notifications">
            ${icon('bell')}
            <span class="absolute right-2.5 top-2 h-2 w-2 rounded-full border-2 border-white bg-rose-500" aria-label="Unread notifications"></span>
          </button>
          <div class="hidden h-8 w-px bg-slate-200 sm:block" aria-hidden="true"></div>
          <button type="button" class="flex items-center gap-2.5 rounded-xl p-1.5 text-left transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" aria-label="User profile: Jamie Doe">
            <span class="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-xs font-semibold text-white" aria-hidden="true">JD</span>
            <span class="hidden pr-1 sm:block">
              <span class="block text-sm font-semibold leading-5 text-slate-800">Jamie Doe</span>
              <span class="block text-xs leading-4 text-slate-500">Admin</span>
            </span>
          </button>
        </div>
      </header>

      <main id="dashboard-content" class="min-h-0 flex-1" aria-label="Dashboard content"></main>
    </div>
  </div>
`

const sidebar = document.querySelector('#sidebar')
const sidebarToggle = document.querySelector('#sidebar-toggle')
const mobileMenuToggle = document.querySelector('#mobile-menu-toggle')
const sidebarOverlay = document.querySelector('#sidebar-overlay')
const sidebarLabels = document.querySelectorAll('[data-sidebar-label]')
const sidebarLinks = document.querySelectorAll('.sidebar-link')
const sidebarToggleIcon = sidebarToggle.querySelector('svg')
let sidebarCollapsed = false

sidebarToggle.addEventListener('click', () => {
  sidebarCollapsed = !sidebarCollapsed

  sidebar.style.width = sidebarCollapsed ? '5rem' : '16rem'
  sidebarLabels.forEach((label) => label.classList.toggle('md:hidden', sidebarCollapsed))
  sidebarLinks.forEach((link) => link.classList.toggle('md:justify-center', sidebarCollapsed))
  sidebarToggleIcon.classList.toggle('rotate-180', sidebarCollapsed)
  sidebarToggle.setAttribute('aria-expanded', String(!sidebarCollapsed))
  sidebarToggle.setAttribute('aria-label', sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar')
  sidebarToggle.title = sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'
})

const setMobileMenuOpen = (isOpen) => {
  if (isOpen && window.innerWidth < 768) sidebar.style.width = ''
  sidebar.classList.toggle('hidden', !isOpen)
  sidebarOverlay.classList.toggle('hidden', !isOpen)
  mobileMenuToggle.setAttribute('aria-expanded', String(isOpen))
  mobileMenuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu')
  mobileMenuToggle.innerHTML = icon(isOpen ? 'close' : 'menu')
}

mobileMenuToggle.addEventListener('click', () => {
  const isOpen = mobileMenuToggle.getAttribute('aria-expanded') === 'true'
  setMobileMenuOpen(!isOpen)
})
sidebarOverlay.addEventListener('click', () => setMobileMenuOpen(false))
sidebarLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) setMobileMenuOpen(false)
  })
})
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMobileMenuOpen(false)
})
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    setMobileMenuOpen(false)
    sidebar.style.width = sidebarCollapsed ? '5rem' : ''
  } else {
    sidebar.style.width = ''
  }
})
