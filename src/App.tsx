import { useEffect, useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './Home'
import Events from './Events'
import EventDetails from './EventDetails'
import Contact from './Contact'
import Terms from './Terms'
import './App.css'

const NAV_ITEMS = [
  { label: 'Home Page', to: '/' },
  { label: 'Events', to: '/Events' },
]

function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <Link to="/" className="brand">
          SOUTH <span>BLR</span>
        </Link>

        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={location.pathname === item.to ? 'active' : ''}
            >
              {item.label}
            </Link>
          ))}

          <a
            href="https://instagram.com/southblr.ent"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <Link
            to="/Contact"
            className={location.pathname === '/Contact' ? 'active' : ''}
          >
            Contact
          </Link>
        </div>

        <button
          className="nav-toggle"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          &#9776;
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button
          className="mobile-close"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          &times;
        </button>

        <Link
          to="/"
          className={location.pathname === '/' ? 'active' : ''}
        >
          HOME
        </Link>

        <Link
          to="/Events"
          className={location.pathname === '/Events' ? 'active' : ''}
        >
          Events
        </Link>

        <a
          href="https://instagram.com/southblr.ent"
          target="_blank"
          rel="noopener noreferrer"
        >
          INSTAGRAM
        </a>

        <Link
          to="/Contact"
          className={location.pathname === '/Contact' ? 'active' : ''}
        >
          CONTACT
        </Link>
      </div>
    </>
  )
}

function Footer() {
  return (
    <footer>
      <div className="f-wrap">
        <div>
          <div className="f-brand">SOUTH BLR</div>

          <p className="f-tag">
            Nightlife &amp; Events in South Bengaluru.
          </p>
        </div>

        <div className="f-links">
          <div className="f-col">
            <a
              href="https://instagram.com/southblr.ent"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

            <Link to="/Contact">Contact</Link>
          </div>

          <div className="f-col">
            <Link to="/terms">
              Terms
            </Link>

            <a
              href="#privacy"
              onClick={(e) => e.preventDefault()}
            >
              Privacy
            </a>
          </div>
        </div>
      </div>

      <div className="f-wrap f-bottom">
        <span>&copy; 2026 SOUTH BLR</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Events" element={<Events />} />

        <Route
          path="/Events/pre-halloween"
          element={<EventDetails />}
        />

        <Route path="/Contact" element={<Contact />} />

        <Route path="/terms" element={<Terms />} />
      </Routes>

      <Footer />
    </>
  )
}
