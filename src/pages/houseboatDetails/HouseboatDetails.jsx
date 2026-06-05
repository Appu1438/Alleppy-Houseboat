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
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay" />
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <Link to="/houseboats">Houseboats</Link> / <span>{boat.name}</span>
          </div>
          <span className="section-label" style={{ color: 'var(--gold-light)' }}>{boat.type} Houseboat</span>
          <h1>{boat.name}</h1>
          <p>Starting from <strong style={{ color: 'var(--gold-light)' }}>{boat.price}</strong> per night · All meals included</p>
        </div>
      </section>

      {/* Detail Body */}
      <section className="section section--cream">
        <div className="container">
          <div className="detail-layout">
            {/* Left */}
            <div className="detail-main">
              {/* Photo Grid Placeholder */}
              <div className="photo-grid">
                <div className="photo-main">
                  <img
                    src={boat.image}
                    alt={boat.name}
                    className="detail-main-image"
                  />
                </div>

                {boat.images.map((n) => (
                  <div
                    key={n}
                    className="photo-thumb"
                  >
                    <img
                      src={n}
                      alt={boat.name}
                    />
                  </div>
                ))}
              </div>

              {/* Tabs */}
              <div className="detail-tabs">
                {['overview', 'amenities', 'itinerary', 'pricing'].map(t => (
                  <button key={t} className={`detail-tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </button>
                ))}
              </div>

              {tab === 'overview' && (
                <div className="tab-content">
                  <h3>About {boat.name}</h3>
                  <p>{boat.desc}</p>
                  <div className="quick-facts">
                    <div className="fact-item"><span>🛏</span><strong>{boat.bedrooms} Bedroom(s)</strong></div>
                    <div className="fact-item"><span>🍽</span><strong>All Meals Included</strong></div>
                    <div className="fact-item"><span>👨‍✈️</span><strong>Experienced Crew</strong></div>
                    <div className="fact-item"><span>❄️</span><strong>Full AC</strong></div>
                    <div className="fact-item"><span>🌊</span><strong>Backwater Route</strong></div>
                    <div className="fact-item"><span>🏆</span><strong>DTPC Certified</strong></div>
                  </div>
                </div>
              )}

              {tab === 'amenities' && (
                <div className="tab-content">
                  <h3>Amenities & Features</h3>
                  <div className="amenity-grid">
                    {boat.amenities.map(a => (
                      <div key={a} className="amenity-item">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="check-icon"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        {a}
                      </div>
                    ))}
                  </div>
                </div>
              )}

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
                        <Link to="/contact" className={`btn ${i === 1 ? 'btn-primary' : 'btn-outline-dark'}`} style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}>
                          Book This Package
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="detail-sidebar">
              <div className="sidebar-card">
                <h3>Book This Houseboat</h3>
                <div className="gold-divider" />
                <div className="sidebar-price">
                  <strong>{boat.price}</strong>
                  <span>per night · All meals</span>
                </div>
                <form onSubmit={e => e.preventDefault()}>
                  <div className="form-group"><label>Your Name</label><input type="text" placeholder="Full name" /></div>
                  <div className="form-group"><label>Phone / WhatsApp</label><input type="tel" placeholder="+91 xxxxx xxxxx" /></div>
                  <div className="form-group"><label>Check-in Date</label><input type="date" /></div>
                  <div className="form-group"><label>Package</label>
                    <select>
                      <option>Day Cruise</option>
                      <option>Overnight Stay</option>
                      <option>Two Nights</option>
                    </select>
                  </div>
                  <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} type="submit">
                    Send Enquiry
                  </button>
                </form>
                <a
                  href="https://wa.me/917736262841"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark"
                  style={{ width: '100%', justifyContent: 'center', marginTop: 10 }}
                >
                  💬 WhatsApp to Book
                </a>
              </div>

              <div className="sidebar-info">
                <div className="info-row"><span>📍</span><div><strong>Location</strong><span>Alleppey Finishing Point</span></div></div>
                <div className="info-row"><span>⏰</span><div><strong>Check-in / Out</strong><span>12 PM / 9 AM (Overnight)</span></div></div>
                <div className="info-row"><span>🍽</span><div><strong>Meals</strong><span>Breakfast, Lunch, Dinner included</span></div></div>
                <div className="info-row"><span>❌</span><div><strong>Cancellation</strong><span>Free up to 48 hrs before</span></div></div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}