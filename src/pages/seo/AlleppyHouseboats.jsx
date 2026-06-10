import { Link } from 'react-router-dom'
import '../../assets/css/shared.css'
import './seo.css'

const highlights = [
  { icon: '🌊', title: 'Vembanad Lake',      desc: 'Kerala\'s largest lake — glide across its tranquil expanse watching fishermen at work.' },
  { icon: '🌾', title: 'Paddy Field Canals',  desc: 'Cruise through narrow canals flanked by lush rice paddies and coconut groves.' },
  { icon: '🐦', title: 'Rich Bird Life',      desc: 'Spot kingfishers, herons, darters, and migratory birds along the backwaters.' },
  { icon: '🏘️', title: 'Village Life',        desc: 'Experience authentic Kerala village culture, coir-making, and local fishing communities.' },
  { icon: '🌅', title: 'Stunning Sunsets',    desc: 'Alleppey sunsets over the backwaters are among the most beautiful in India.' },
  { icon: '🍛', title: 'Kerala Cuisine',      desc: 'Savour traditional fish curry, prawn masala, appam and fresh coconut-based dishes.' },
]

const boatTypes = [
  { name: 'Deluxe Houseboat',  price: 'From ₹8,000',  desc: '1 bedroom, AC, attached bath, Kerala meals. Best value for couples.' },
  { name: 'Premium Houseboat', price: 'From ₹10,000',  desc: '2 bedrooms, AC, spacious deck, chef-cooked meals.' },
  { name: 'Luxury Houseboat',  price: 'From ₹15,000', desc: '2 bedrooms, premium interiors, private deck, all meals.' },
  { name: 'Family Houseboat',  price: 'From ₹15,000', desc: '3–4 bedrooms, ideal for families and groups.' },
]

const nearbyAttractions = [
  'Alleppey Beach (3 km from jetty)',
  'Krishnapuram Palace (47 km)',
  'Mararikulam Beach (15 km)',
  'Kuttanad (the Rice Bowl of Kerala)',
  'Pathiramanal Bird Sanctuary',
  'Champakulam Church (oldest in Kerala)',
]

export default function AlleppeyHouseboats() {
  return (
    <div className="seo-page">

      {/* ── SEO Hero ── */}
      <section className="seo-hero seo-hero--alleppey">
        <div className="seo-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=1600&q=80"
            alt="Alleppey backwaters houseboat"
          />
        </div>

        <div className="seo-hero-content container">
          <div className="seo-hero-inner">
            {/* <div className="seo-hero-kicker">📍 Alappuzha · Kerala · India</div> */}
            <h1>
              Alleppey<br />
              Houseboats
              {/* <em></em> */}
            </h1>
            <p className="seo-hero-sub">
              Experience the timeless beauty of Alleppey aboard our certified, comfortable houseboats.
              Drift through Kerala's legendary backwaters — the Venice of the East.
            </p>
            {/* <div className="seo-trust-bar">
              <span>⭐ 4.9 / 5 Rating</span>
              <span>✅ Kerala Tourism Certified</span>
              <span>🏆 50,000+ Guests Served</span>
              <span>📍 Alleppey Finishing Point</span>
            </div> */}
            <div className="seo-hero-actions">
              <Link to="/contact"  className="btn btn-primary">Book a Houseboat</Link>
              <Link to="/packages" className="btn btn-outline">View Packages</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="section section--white">
        <div className="container seo-intro-layout">
          <div className="seo-intro-text">
            <span className="section-label">About Alleppey Houseboats</span>
            <h2>Kerala's Most Iconic<br />Travel Experience</h2>
            <div className="coral-divider" />
            <p>
              Alleppey, officially known as Alappuzha, is celebrated worldwide as the <strong>"Venice of the East"</strong> — a
              labyrinth of canals, rivers, and lakes nestled along the Kerala coast. At the heart of Alleppey's tourism
              lies the iconic <strong>houseboat experience</strong>.
            </p>
            <p>
              Kerala houseboats — locally called <em>kettuvallam</em> — are traditional rice barges beautifully
              converted into floating guesthouses. Hand-crafted from bamboo, coir, and wood using age-old techniques,
              these magnificent vessels carry travellers through one of India's most biodiverse and scenic waterways.
            </p>
            <p>
              A stay on an Alleppey houseboat is more than a cruise — it is an immersion into Kerala's soul. Wake up to
              the sound of water lapping against the hull. Watch sunrise over the paddy fields. Eat freshly cooked Kerala
              seafood. Meet local fishermen. Drift past ancient churches, Hindu temples, and coir-weaving villages.
            </p>
            <p>
              Kerala Houseboat Holidays offers a carefully curated fleet of <strong>Deluxe, Premium, Luxury, Honeymoon,
              and Family houseboats</strong> — all DTPC-certified, all operated with experienced local crews, and all
              delivering an authentic Kerala experience at transparent prices.
            </p>
          </div>

          <div className="seo-intro-sidebar">
            <div className="quick-book-widget">
              <h3>Quick Enquiry</h3>
              <div className="coral-divider" />
              <form onSubmit={e => e.preventDefault()}>
                <div className="form-group">
                  <label>Check-in Date</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>Package Type</label>
                  <select>
                    <option>Overnight Stay (12pm - 9am)</option>
                    <option>Day Cruise (12pm - 5pm)</option>
                    <option>Honeymoon (12 pm - 9 am)</option>
                    <option>Night Stay (5pm - 9 am)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Guests</label>
                  <select>
                    <option>1–2 Guests</option>
                    <option>3–4 Guests</option>
                    <option>5+ Guests</option>
                  </select>
                </div>
                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} type="submit">
                  Check Availability
                </button>
              </form>
              <a
                href="https://wa.me/917736262841"
                target="_blank"
                rel="noopener noreferrer"
                className="widget-wa-btn"
              >
                💬 WhatsApp Booking
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Highlights ── */}
      <section className="section section--sand">
        <div className="container">
          <div className="section-head">
            <span className="section-label">What Makes It Special</span>
            <h2>Highlights of an Alleppey Cruise</h2>
            <div className="coral-divider coral-divider--center" />
          </div>
          <div className="grid-3">
            {highlights.map(h => (
              <div key={h.title} className="seo-highlight-card">
                <span className="seo-hl-icon">{h.icon}</span>
                <h4>{h.title}</h4>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Boat Types ── */}
      <section className="section section--white">
        <div className="container">
          <div className="section-head">
            <span className="section-label">Choose Your Houseboat</span>
            <h2>Houseboat Categories in Alleppey</h2>
            <div className="coral-divider coral-divider--center" />
          </div>
          <div className="grid-4">
            {boatTypes.map(b => (
              <div key={b.name} className="seo-boat-card">
                <h4>{b.name}</h4>
                <strong className="seo-boat-price">{b.price}</strong>
                <p>{b.desc}</p>
                <Link to="/houseboats" className="btn btn-outline-dark" style={{ marginTop: 'auto' }}>
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Attractions & How to Reach ── */}
      <section className="section section--sand">
        <div className="container">
          <div className="seo-attractions-layout">
            <div>
              <span className="section-label">Explore More</span>
              <h2>Places to Visit Near Alleppey</h2>
              <div className="coral-divider" />
              <ul className="seo-attractions-list">
                {nearbyAttractions.map(a => (
                  <li key={a}>
                    <span className="attr-dot">→</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="seo-how-to-reach">
              <h3>How to Reach Alleppey</h3>
              <div className="reach-items">
                <div className="reach-item">
                  <span>✈️</span>
                  <div>
                    <strong>By Air</strong>
                    <p>Cochin International Airport (COK) — 75 km (1.5 hrs by taxi)</p>
                  </div>
                </div>
                <div className="reach-item">
                  <span>🚆</span>
                  <div>
                    <strong>By Train</strong>
                    <p>Alappuzha Railway Station — 4 km from Finishing Point</p>
                  </div>
                </div>
                <div className="reach-item">
                  <span>🚌</span>
                  <div>
                    <strong>By Bus</strong>
                    <p>KSRTC buses from Kochi, Thiruvananthapuram, Kottayam</p>
                  </div>
                </div>
                <div className="reach-item">
                  <span>🚗</span>
                  <div>
                    <strong>By Road</strong>
                    <p>NH66 connects Alleppey to all major Kerala cities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="seo-cta-band">
        <div className="container">
          <h2>Book Your Alleppey Houseboat Today</h2>
          <p>Instant confirmation · Free cancellation up to 48 hrs · Best price guaranteed</p>
          <div className="seo-cta-actions">
            <Link to="/contact" className="btn btn-primary">Book Now </Link>
            <a href="tel:+917736262841" className="btn btn-outline">📞 Call +91 7736 26 2841</a>
          </div>
        </div>
      </section>

    </div>
  )
}