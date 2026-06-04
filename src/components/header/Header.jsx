import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './header.css'

const navLinks = [
  { label: 'Home',     to: '/' },
  { label: 'Houseboats', to: '/houseboats' },
  { label: 'Packages', to: '/packages' },
  { label: 'Gallery',  to: '/gallery' },
  { label: 'About',    to: '/about' },
  { label: 'Contact',  to: '/contact' },
  { label: 'FAQ',      to: '/faq' },
]

export default function Header() {
  const [scrolled,   setScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [dropOpen,   setDropOpen]   = useState(false)
  const dropRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); setDropOpen(false) }, [pathname])

  // Click outside dropdown
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const isHome = pathname === '/'

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''} ${!isHome ? 'header-solid' : ''}`}>
      <div className="header-inner container">

        {/* Logo */}
        <Link to="/" className="logo" aria-label="Kerala Houseboat Holidays Home">
          <span className="logo-icon">
            <svg viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 22 Q10 10 20 14 Q30 18 38 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
              <path d="M6 22 L8 12 L20 8 L32 12 L34 22 Z" fill="currentColor" opacity="0.18"/>
              <path d="M8 22 L12 14 L20 11 L28 14 L32 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <rect x="2" y="22" width="36" height="3" rx="1.5" fill="currentColor" opacity="0.35"/>
              <path d="M17 11 L17 6 L23 6 L23 11" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
              <path d="M17 6 L20 3 L23 6" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="logo-text">
            <strong>Kerala</strong>
            <em>Houseboat Holidays</em>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav" aria-label="Main navigation">
          <ul className="nav-list">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                >
                  {label}
                </NavLink>
              </li>
            ))}

            {/* SEO Dropdown */}
            <li className="dropdown-parent" ref={dropRef}>
              <button
                className={`nav-link dropdown-trigger ${dropOpen ? 'open' : ''}`}
                onClick={() => setDropOpen(v => !v)}
                aria-expanded={dropOpen}
              >
                Destinations
                <svg viewBox="0 0 12 8" className="chevron"><path d="M1 1l5 5 5-5" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round"/></svg>
              </button>
              {dropOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/alleppey-houseboats">Alleppey Houseboats</Link></li>
                  <li><Link to="/luxury-houseboats-alleppey">Luxury Houseboats</Link></li>
                  <li><Link to="/honeymoon-houseboats-alleppey">Honeymoon Houseboats</Link></li>
                  <li><Link to="/alleppey-houseboat-packages">Houseboat Packages</Link></li>
                </ul>
              )}
            </li>
          </ul>
        </nav>

        {/* CTA + Hamburger */}
        <div className="header-actions">
          <a
            href="tel:+919876543210"
            className="header-phone"
            aria-label="Call us"
          >
            <svg viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
            <span>+91 98765 43210</span>
          </a>
          <Link to="/contact" className="btn btn-primary header-cta">Book Now</Link>
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <nav>
          <ul>
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <NavLink to={to} end={to === '/'} className={({ isActive }) => isActive ? 'active' : ''}>
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="mobile-sep">Destinations</li>
            <li><Link to="/alleppey-houseboats">Alleppey Houseboats</Link></li>
            <li><Link to="/luxury-houseboats-alleppey">Luxury Houseboats</Link></li>
            <li><Link to="/honeymoon-houseboats-alleppey">Honeymoon Houseboats</Link></li>
            <li><Link to="/alleppey-houseboat-packages">Houseboat Packages</Link></li>
          </ul>
        </nav>
        <div className="mobile-cta">
          <a href="tel:+919876543210" className="btn btn-outline">Call Us</a>
          <Link to="/contact" className="btn btn-primary">Book Now</Link>
        </div>
      </div>
    </header>
  )
}