import { useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { siteControl } from '../config/siteControl.js'
import { HeartBackdrop } from './HeartBackdrop.jsx'
import { MusicDock } from './MusicDock.jsx'

const THEMES = new Set(['default', 'swan', 'golden', 'lilac'])

const navLinkClass = ({ isActive }) =>
  [
    'rounded-full px-3 py-1.5 text-sm font-medium transition',
    isActive
      ? 'shadow-sm bg-[color:var(--site-nav-active-bg)] text-[color:var(--site-nav-active-fg)] shadow-[color:var(--site-nav-shadow)]'
      : 'text-[color:var(--site-nav-inactive)] hover:bg-[color:var(--site-nav-hover-bg)] hover:text-[color:var(--site-fg)]',
  ].join(' ')

const proposalNavClass = ({ isActive }) =>
  [
    'site-nav-proposal inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium transition',
    isActive ? 'site-nav-proposal--active' : 'site-nav-proposal--idle',
  ].join(' ')

export function SiteLayout() {
  const { shortName } = siteControl.people.her

  useEffect(() => {
    const raw = siteControl.ui?.theme ?? 'default'
    const theme = THEMES.has(raw) ? raw : 'default'
    document.documentElement.dataset.theme = theme

    document.title = siteControl.meta.siteTitle
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', siteControl.meta.description)
  }, [])

  return (
    <div className="site-shell relative min-h-screen overflow-hidden">
      <div className="site-aurora pointer-events-none absolute inset-0 opacity-[0.62]" />
      <HeartBackdrop />

      <header className="relative z-10 border-b border-[color:var(--site-header-border)] bg-[color:var(--site-header-bg)] backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
          <NavLink
            to="/"
            className="text-center font-display text-xl font-semibold text-[color:var(--site-fg)] md:text-left"
          >
            {shortName}
            <span className="ml-2 font-body text-sm font-normal text-[color:var(--site-fg-muted)]">
              — with love
            </span>
          </NavLink>
          <nav
            className="flex flex-wrap items-center justify-center gap-1 md:justify-end"
            aria-label="Main"
          >
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/her" className={navLinkClass}>
              Her
            </NavLink>
            <NavLink to="/swan" className={navLinkClass}>
              Swan
            </NavLink>
            <NavLink to="/flowers" className={navLinkClass}>
              Flowers
            </NavLink>
            <NavLink to="/cities" className={navLinkClass}>
              Cities
            </NavLink>
            <NavLink to="/poetry" className={navLinkClass}>
              Poetry
            </NavLink>
            <NavLink to="/proposal" className={proposalNavClass} title="A letter about us">
              <span>{siteControl.proposal?.navLabel ?? 'Proposal'}</span>
              {siteControl.proposal?.navHint ? (
                <span className="text-[0.85em] opacity-90" aria-hidden>
                  {siteControl.proposal.navHint}
                </span>
              ) : null}
            </NavLink>
            <NavLink to="/gifts" className={navLinkClass}>
              Gifts
            </NavLink>
          </nav>
        </div>
      </header>

      <div className="relative z-10 pb-28">
        <Outlet />
      </div>

      <MusicDock />

      <footer className="relative z-10 border-t border-[color:var(--site-footer-border)] bg-[color:var(--site-footer-bg)] py-8 text-center text-sm text-[color:var(--site-footer-text)] backdrop-blur-sm">
        <p className="font-body">{siteControl.footer.line}</p>
      </footer>
    </div>
  )
}
