import { icon } from '../utils/icons.js'

export const initSidebar = () => {
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
    sidebarToggle.setAttribute('aria-label', sidebarCollapsed ? 'Lebarkan bilah sisi' : 'Ciutkan bilah sisi')
    sidebarToggle.title = sidebarCollapsed ? 'Lebarkan bilah sisi' : 'Ciutkan bilah sisi'
  })

  const setMobileMenuOpen = (isOpen) => {
    if (isOpen && window.innerWidth < 768) sidebar.style.width = ''
    sidebar.classList.toggle('hidden', !isOpen)
    sidebarOverlay.classList.toggle('hidden', !isOpen)
    mobileMenuToggle.setAttribute('aria-expanded', String(isOpen))
    mobileMenuToggle.setAttribute('aria-label', isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi')
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
}
