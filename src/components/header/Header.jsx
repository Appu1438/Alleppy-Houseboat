import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './header.css'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Houseboats', to: '/houseboats' },
  { label: 'Packages', to: '/packages' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'FAQ', to: '/faq' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [, setDropOpen] = useState(false)

  const dropRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false)
    setDropOpen(false)
  }, [pathname])

  useEffect(() => {
    const handler = (e) => {
      if (
        dropRef.current &&
        !dropRef.current.contains(e.target)
      ) {
        setDropOpen(false)
      }
    }

    document.addEventListener('mousedown', handler)

    return () =>
      document.removeEventListener(
        'mousedown',
        handler
      )
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const isHome = pathname === '/'

  return (
    <>
      <header
        className={`site-header ${
          scrolled ? 'scrolled' : ''
        } ${!isHome ? 'header-solid' : ''}`}
      >
        <div className="header-inner container">
          <Link
            to="/"
            className="logo"
            aria-label="Alappuzha Houseboat Holidays Home"
          >
            <span className="logo-text">
              <strong>Alappuzha</strong>
              <em>Houseboat Holidays</em>
            </span>
          </Link>

          <nav
            className="desktop-nav"
            aria-label="Main navigation"
          >
            <ul className="nav-list">
              {navLinks.map(({ label, to }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      isActive
                        ? 'nav-link active'
                        : 'nav-link'
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}

            </ul>
          </nav>

          <div className="header-actions">
            <button
              className={`hamburger ${
                menuOpen ? 'open' : ''
              }`}
              onClick={() =>
                setMenuOpen((v) => !v)
              }
              aria-label="Toggle mobile menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            className="mobile-backdrop"
            onClick={() =>
              setMenuOpen(false)
            }
          />
        )}

        <div
          className={`mobile-menu ${
            menuOpen ? 'open' : ''
          }`}
          aria-hidden={!menuOpen}
        >
          <nav>
            <ul>
              {navLinks.map(({ label, to }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      isActive ? 'active' : ''
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}

            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}