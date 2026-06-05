import  { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './notFound.css'

const quickLinks = [
  { label: 'Home',              to: '/',           icon: '🏠' },
  { label: 'Our Houseboats',    to: '/houseboats',  icon: '🛶' },
  { label: 'Packages & Pricing',to: '/packages',    icon: '📋' },
  { label: 'Photo Gallery',     to: '/gallery',     icon: '📸' },
  { label: 'Contact Us',        to: '/contact',     icon: '📞' },
  { label: 'FAQ',               to: '/faq',         icon: '❓' },
]

export default function NotFound() {
  const navigate  = useNavigate()
  const [count, setCount] = useState(10)

  /* Auto-redirect countdown */
  useEffect(() => {
    if (count <= 0) { navigate('/'); return }
    const t = setTimeout(() => setCount(c => c - 1), 1000)
    return () => clearTimeout(t)
  }, [count, navigate])

  return (
    <div className="notfound-page">

      {/* Animated water background */}
      <div className="nf-bg">
        <div className="nf-water">
          <svg className="nf-wave wave-1" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z" fill="rgba(42,138,130,0.18)"/>
          </svg>
          <svg className="nf-wave wave-2" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,40 C360,90 720,10 1080,50 C1260,70 1380,30 1440,40 L1440,120 L0,120 Z" fill="rgba(42,138,130,0.12)"/>
          </svg>
          <svg className="nf-wave wave-3" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,70 C180,30 420,90 720,55 C1020,20 1260,80 1440,70 L1440,120 L0,120 Z" fill="rgba(42,138,130,0.08)"/>
          </svg>
        </div>

        {/* Floating houseboat */}
        <div className="nf-boat-wrap">
          <div className="nf-boat">
            <svg viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Water reflection */}
              <ellipse cx="110" cy="118" rx="85" ry="8" fill="rgba(42,138,130,0.2)"/>
              {/* Hull */}
              <path d="M30 100 L40 72 L110 58 L180 72 L190 100 Z" fill="#1a5c57" opacity="0.9"/>
              <path d="M32 100 L43 74 L110 61 L177 74 L188 100" stroke="#2a8a82" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Cabin */}
              <rect x="50" y="42" width="120" height="32" rx="3" fill="#0d3d3a"/>
              <rect x="50" y="42" width="120" height="32" rx="3" stroke="#2a8a82" strokeWidth="1" fill="none"/>
              {/* Windows */}
              <rect x="62"  y="50" width="18" height="14" rx="2" fill="#4db8ae" opacity="0.7"/>
              <rect x="91"  y="50" width="18" height="14" rx="2" fill="#4db8ae" opacity="0.7"/>
              <rect x="120" y="50" width="18" height="14" rx="2" fill="#c9973a" opacity="0.8"/>
              <rect x="149" y="50" width="12" height="14" rx="2" fill="#4db8ae" opacity="0.5"/>
              {/* Roof */}
              <path d="M46 44 L110 28 L174 44 Z" fill="#c9973a" opacity="0.85"/>
              <path d="M46 44 L110 28 L174 44" stroke="#e8bc6a" strokeWidth="1" fill="none"/>
              {/* Flag */}
              <line x1="110" y1="28" x2="110" y2="14" stroke="#e8bc6a" strokeWidth="1.2"/>
              <path d="M110 14 L122 19 L110 24 Z" fill="#c9973a"/>
              {/* Water line */}
              <rect x="25" y="100" width="170" height="10" rx="5" fill="#1a5c57" opacity="0.6"/>
              {/* Ripples */}
              <path d="M15 108 Q55 104 95 108 Q135 112 175 108 Q195 106 210 108" stroke="#2a8a82" strokeWidth="1" fill="none" opacity="0.5" strokeLinecap="round"/>
              <path d="M10 114 Q50 111 90 114 Q130 117 170 114 Q190 112 215 114" stroke="#2a8a82" strokeWidth="0.8" fill="none" opacity="0.35" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Floating lily pads / bubbles */}
        <div className="nf-lily nf-lily-1">🌸</div>
        <div className="nf-lily nf-lily-2">🌿</div>
        <div className="nf-lily nf-lily-3">🪷</div>
      </div>

      {/* Main Content */}
      <div className="nf-content">

        <div className="nf-code-wrap">
          <span className="nf-four">4</span>
          <div className="nf-zero">
            <svg viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="36" stroke="var(--gold)" strokeWidth="3" opacity="0.3"/>
              <circle cx="40" cy="40" r="24" stroke="var(--gold)" strokeWidth="2" opacity="0.2"/>
              <path d="M20 50 Q30 28 40 42 Q50 56 60 35" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6"/>
              <circle cx="40" cy="40" r="4" fill="var(--gold)" opacity="0.8"/>
            </svg>
          </div>
          <span className="nf-four">4</span>
        </div>

        <h1 className="nf-title">Lost on the Backwaters?</h1>
        <p className="nf-subtitle">
          It seems this page has drifted away like a leaf on the Vembanad Lake.
          <br />Don't worry — let us navigate you back to shore.
        </p>

        {/* Countdown */}
        <div className="nf-countdown">
          <div className="nf-countdown-ring">
            <svg viewBox="0 0 60 60">
              <circle cx="30" cy="30" r="26" fill="none" stroke="rgba(201,151,58,0.2)" strokeWidth="3"/>
              <circle
                cx="30" cy="30" r="26"
                fill="none"
                stroke="var(--gold)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={`${(count / 10) * 163.4} 163.4`}
                transform="rotate(-90 30 30)"
                style={{transition:'stroke-dasharray 1s linear'}}
              />
            </svg>
            <span>{count}</span>
          </div>
          <p>Redirecting to Home in <strong>{count}s</strong></p>
        </div>

        {/* CTA Buttons */}
        <div className="nf-actions">
          <Link to="/" className="btn btn-primary nf-btn-home">
            <svg viewBox="0 0 20 20" fill="currentColor" style={{width:18,height:18}}>
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
            </svg>
            Back to Home
          </Link>
          <button onClick={() => navigate(-1)} className="btn btn-outline-dark nf-btn-back">
            <svg viewBox="0 0 20 20" fill="currentColor" style={{width:18,height:18}}>
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"/>
            </svg>
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="nf-links-section">
          <p className="nf-links-label">Or explore these pages:</p>
          <div className="nf-quick-links">
            {quickLinks.map(link => (
              <Link key={link.to} to={link.to} className="nf-quick-link">
                <span className="nf-ql-icon">{link.icon}</span>
                <span>{link.label}</span>
                <svg viewBox="0 0 16 16" fill="none" className="nf-ql-arrow">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            ))}
          </div>
        </div>

        {/* Help strip */}
        <div className="nf-help-strip">
          <span>Need help?</span>
          <a href="tel:+917736262841">📞 +91 7736 26 2841</a>
          <span>·</span>
          <a href="https://wa.me/917736262841" target="_blank" rel="noopener noreferrer">💬 WhatsApp Us</a>
          <span>·</span>
          <Link to="/contact">✉️ Send Enquiry</Link>
        </div>

      </div>
    </div>
  )
}