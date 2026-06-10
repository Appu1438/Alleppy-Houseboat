import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './houseboatDetails.css'
import { boatData } from '../../themes/constants/boats/boatsData'

const fallback = boatData['royal-lotus']

export default function HouseboatDetail() {
  const { id } = useParams()
  const boat = boatData[id] || { ...fallback, name: 'Houseboat Details' }
  const [tab, setTab] = useState('overview')

  return (
    <div className="detail-page">

      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="page-hero-pattern" />
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/houseboats">Houseboats</Link>
            <span className="breadcrumb-sep">/</span>
            <span>{boat.name}</span>
          </nav>
          <span className="section-label">{boat.type} Houseboat</span>
          <h1>{boat.name}</h1>
          <p>
            Starting from{' '}
            <strong style={{ color: 'var(--coral-light)', fontFamily: 'Clash Display, sans-serif' }}>
              {boat.price}
            </strong>{' '}
            per night · All meals included
          </p>
        </div>
      </section>

      {/* ── Detail Body ── */}
      <section className="section section--sand">
        <div className="container">
          <div className="detail-layout">

            {/* ── Main Column ── */}
            <div className="detail-main">

              {/* Photo Grid */}
              <div className="photo-grid">
                <div className="photo-main">
                  <img src={boat.image} alt={boat.name} className="detail-main-image" />
                </div>
                {boat.images.map((src, i) => (
                  <div key={src} className={`photo-thumb ${i === boat.images.length - 1 ? 'photo-thumb--last' : ''}`}>
                    <img src={src} alt={`${boat.name} view ${i + 2}`} />
                  </div>
                ))}
              </div>

              {/* Tabs */}
              <div className="detail-tabs">
                {['overview', 'amenities', 'itinerary', 'pricing'].map(t => (
                  <button
                    key={t}
                    className={`detail-tab ${tab === t ? 'active' : ''}`}
                    onClick={() => setTab(t)}
                  >
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </button>
                ))}
              </div>

              {/* ── Overview ── */}
              {tab === 'overview' && (
                <div className="tab-content">
                  <h3>About {boat.name}</h3>
                  <p>{boat.desc}</p>
                  <div className="quick-facts">
                    <div className="fact-item"><span>🛏</span><strong>{boat.bedrooms} Bedroom{boat.bedrooms > 1 ? 's' : ''}</strong></div>
                    <div className="fact-item"><span>🍽</span><strong>All Meals Included</strong></div>
                    <div className="fact-item"><span>👨‍✈️</span><strong>Experienced Crew</strong></div>
                    <div className="fact-item"><span>❄️</span><strong>Full AC</strong></div>
                    <div className="fact-item"><span>🌊</span><strong>Backwater Route</strong></div>
                    <div className="fact-item"><span>🏆</span><strong>DTPC Certified</strong></div>
                  </div>
                </div>
              )}

              {/* ── Amenities ── */}
              {tab === 'amenities' && (
                <div className="tab-content">
                  <h3>Amenities &amp; Features</h3>
                  <div className="amenity-grid">
                    {boat.amenities.map(a => (
                      <div key={a} className="amenity-item">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="check-icon">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {a}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Itinerary ── */}
              {tab === 'itinerary' && (
                <div className="tab-content">
                  <h3>Sample Overnight Itinerary</h3>
                  <div className="itinerary-list">
                    {boat.itinerary.map((item, i) => (
                      <div key={i} className="itinerary-item">
                        <div className="it-time">{item.time}</div>
                        <div className="it-dot" />
                        <div className="it-event">{item.event}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Pricing ── */}
              {tab === 'pricing' && (
                <div className="tab-content">
                  <h3>Package Options</h3>
                  <div className="pricing-options">
                    {boat.packages.map((p, i) => (
                      <div key={i} className={`pricing-option ${i === 1 ? 'featured-pkg' : ''}`}>
                        {i === 1 && <div className="pkg-badge">Most Booked</div>}
                        <h4>{p.label}</h4>
                        <div className="pkg-price">{p.price}</div>
                        <div className="pkg-meta">{p.dur}</div>
                        <div className="pkg-inc">Includes: {p.inc}</div>
                        <Link
                          to="/contact"
                          className={`btn ${i === 1 ? 'btn-primary' : 'btn-outline-dark'}`}
                          style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}
                        >
                          Book This Package
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── Sidebar ── */}
            <aside className="detail-sidebar">
              <div className="sidebar-card">
                <h3>Book This Houseboat</h3>
                <div className="coral-divider" />
                <div className="sidebar-price">
                  <strong>{boat.price}</strong>
                  <span>per night · All meals included</span>
                </div>
                <form onSubmit={e => e.preventDefault()}>
                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" placeholder="Full name" />
                  </div>
                  <div className="form-group">
                    <label>Phone / WhatsApp</label>
                    <input type="tel" placeholder="+91 xxxxx xxxxx" />
                  </div>
                  <div className="form-group">
                    <label>Check-in Date</label>
                    <input type="date" />
                  </div>
                  <div className="form-group">
                    <label>Package</label>
                    <select>
                      <option>Day Cruise</option>
                      <option>Overnight Stay</option>
                      <option>Two Nights</option>
                    </select>
                  </div>
                  <button
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                    type="submit"
                  >
                    Send Enquiry ↗
                  </button>
                </form>

                <a
                  href="https://wa.me/917736262841"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidebar-wa-btn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp to Book
                </a>
              </div>

              <div className="sidebar-info">
                <div className="info-row">
                  <span>📍</span>
                  <div><strong>Location</strong><span>Alleppey Finishing Point</span></div>
                </div>
                <div className="info-row">
                  <span>⏰</span>
                  <div><strong>Check-in / Out</strong><span>12 PM / 9 AM (Overnight)</span></div>
                </div>
                <div className="info-row">
                  <span>🍽</span>
                  <div><strong>Meals</strong><span>Breakfast, Lunch &amp; Dinner included</span></div>
                </div>
                <div className="info-row">
                  <span>🔄</span>
                  <div><strong>Cancellation</strong><span>Free up to 48 hrs before</span></div>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </div>
  )
}