import { Link } from 'react-router-dom'
import './home.css'

/* ── Data ── */
const featuredBoats = [
  {
    id: 'royal-lotus',
    name: 'Royal Lotus',
    type: 'Luxury',
    bedrooms: 2,
    price: '₹12,000',
    unit: '/night',
    tag: 'Most Popular',
    desc: 'Private upper deck, jacuzzi, gourmet Kerala cuisine, and panoramic backwater views.',
    color: '#c9973a',
  },
  {
    id: 'honeymoon-blossom',
    name: 'Blossom Retreat',
    type: 'Honeymoon',
    bedrooms: 1,
    price: '₹9,500',
    unit: '/night',
    tag: 'Couples Favourite',
    desc: 'Floral décor, rose-petal bath, candlelight dinner, and private sun-deck for two.',
    color: '#d97b8a',
  },
  {
    id: 'grand-family',
    name: 'Grand Family',
    type: 'Family',
    bedrooms: 3,
    price: '₹15,000',
    unit: '/night',
    tag: 'Best for Groups',
    desc: 'Three spacious bedrooms, sundeck, children-friendly amenities, and a dedicated chef.',
    color: '#2a8a82',
  },
  {
    id: 'classic-deluxe',
    name: 'Classic Deluxe',
    type: 'Deluxe',
    bedrooms: 1,
    price: '₹5,500',
    unit: '/night',
    tag: 'Best Value',
    desc: 'Comfortable AC cabin, attached bath, traditional Kerala meals, and scenic route.',
    color: '#5a7a6a',
  },
]

const whyUs = [
  { icon: '🏆', title: '15+ Years Experience', desc: 'Trusted by over 50,000 guests since 2009. Kerala Tourism certified operators.' },
  { icon: '🌿', title: 'Eco-Friendly Cruises', desc: 'Solar-powered boats, biodegradable waste systems, and responsible backwater tourism.' },
  { icon: '👨‍🍳', title: 'Authentic Kerala Cuisine', desc: 'Onboard chef prepares freshly caught fish, traditional Kerala meals, and custom menus.' },
  { icon: '🛡️', title: 'Safety First', desc: 'DTPC approved, life jackets on all boats, trained crew, and 24/7 support helpline.' },
  { icon: '📱', title: 'Instant Confirmation', desc: 'Book in minutes via WhatsApp, phone, or our website. No hidden charges.' },
  { icon: '💰', title: 'Best Price Guarantee', desc: 'Competitive transparent pricing. We match any verified lower quote.' },
]

const testimonials = [
  {
    name: 'Priya & Arjun Nair',
    from: 'Bangalore',
    rating: 5,
    text: 'Our honeymoon on the Blossom Retreat was absolutely magical. The sunsets over the backwaters, the food, the crew — everything was perfect. We will cherish this forever.',
    type: 'Honeymoon Package',
  },
  {
    name: 'Rohan Mehta',
    from: 'Mumbai',
    rating: 5,
    text: 'Booked the Royal Lotus for a family trip. The kids loved every minute. The boat was spotlessly clean, crew was warm and the food was incredible. 10/10 recommend!',
    type: 'Luxury Package',
  },
  {
    name: 'Sarah & James Collins',
    from: 'London, UK',
    rating: 5,
    text: 'We had heard about Kerala\'s backwaters for years. This exceeded every expectation. A truly once-in-a-lifetime experience. The team at Kerala Houseboat Holidays made everything effortless.',
    type: 'Premium Package',
  },
]

const stats = [
  { value: '50K+', label: 'Happy Guests' },
  { value: '15+',  label: 'Years Experience' },
  { value: '25+',  label: 'Premium Boats' },
  { value: '4.9',  label: 'Average Rating' },
]

/* ── Component ── */
export default function Home() {
  return (
    <div className="home-page">

      {/* ══ HERO ══ */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-overlay" />
          <div className="hero-pattern" />
        </div>
        <div className="container hero-content">
          <div className="hero-text">
            <span className="section-label fade-up" style={{color:'var(--gold-light)'}}>Alleppey, Kerala — God's Own Country</span>
            <h1 className="hero-title fade-up fade-up-delay-1">
              Drift Through<br />
              <em>Kerala's Timeless</em><br />
              Backwaters
            </h1>
            <p className="hero-sub fade-up fade-up-delay-2">
              Luxury, Deluxe &amp; Honeymoon houseboats gliding through the serene
              canals of Alleppey. Unforgettable experiences crafted for you.
            </p>
            <div className="hero-actions fade-up fade-up-delay-3">
              <Link to="/packages" className="btn btn-primary">View Packages</Link>
              <Link to="/houseboats" className="btn btn-outline">Explore Boats</Link>
            </div>
            <div className="hero-trust fade-up fade-up-delay-4">
              <span>⭐ 4.9/5 Rating</span>
              <span>·</span>
              <span>50,000+ Happy Guests</span>
              <span>·</span>
              <span>Kerala Tourism Certified</span>
            </div>
          </div>

          {/* Quick Booking Widget */}
          <div className="hero-booking fade-up fade-up-delay-2">
            <h3>Quick Enquiry</h3>
            <div className="gold-divider" />
            <form className="booking-form" onSubmit={e => e.preventDefault()}>
              <div className="form-group">
                <label>Check-in Date</label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>Package Type</label>
                <select>
                  <option value="">Select Package</option>
                  <option>Day Cruise</option>
                  <option>Overnight Stay</option>
                  <option>Honeymoon Package</option>
                  <option>Group Package</option>
                </select>
              </div>
              <div className="form-group">
                <label>No. of Guests</label>
                <select>
                  <option>1–2 Guests</option>
                  <option>3–4 Guests</option>
                  <option>5–8 Guests</option>
                  <option>8+ Guests</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary" style={{width:'100%',justifyContent:'center'}}>
                Check Availability
              </button>
            </form>
            <p className="booking-note">
              <svg viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
              We respond within 30 minutes
            </p>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="hero-scroll">
          <span>Scroll to explore</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section className="stats-bar">
        <div className="container">
          {stats.map(s => (
            <div key={s.label} className="stat-item">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══ FEATURED HOUSEBOATS ══ */}
      <section className="section section--white featured">
        <div className="container">
          <div className="section-head">
            <span className="section-label">Our Fleet</span>
            <h2>Featured Houseboats</h2>
            <div className="gold-divider gold-divider--center" />
            <p>From intimate honeymoon retreats to spacious family vessels — discover the perfect houseboat for your Kerala journey.</p>
          </div>
          <div className="featured-grid">
            {featuredBoats.map(boat => (
              <div key={boat.id} className="boat-card">
                <div className="boat-card-image" style={{'--accent': boat.color}}>
                  <div className="boat-placeholder">
                    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="120" height="80" fill="currentColor" opacity="0.05"/>
                      <path d="M10 55 Q30 30 60 42 Q90 54 110 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.4"/>
                      <path d="M20 55 L25 35 L60 28 L95 35 L100 55 Z" fill="currentColor" opacity="0.15"/>
                      <path d="M25 55 L32 38 L60 32 L88 38 L95 55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5"/>
                      <rect x="10" y="55" width="100" height="8" rx="4" fill="currentColor" opacity="0.2"/>
                      <path d="M52 32 L52 20 L68 20 L68 32" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5"/>
                      <path d="M52 20 L60 13 L68 20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
                    </svg>
                  </div>
                  {boat.tag && <span className="boat-tag">{boat.tag}</span>}
                  <span className="boat-type-badge" style={{background: boat.color}}>{boat.type}</span>
                </div>
                <div className="boat-card-body">
                  <div className="boat-meta">
                    <span>🛏 {boat.bedrooms} Bedroom{boat.bedrooms > 1 ? 's' : ''}</span>
                    <span>🌊 Backwaters</span>
                    <span>🍽 Meals Inc.</span>
                  </div>
                  <h3>{boat.name}</h3>
                  <p>{boat.desc}</p>
                  <div className="boat-footer">
                    <div className="boat-price">
                      <strong>{boat.price}</strong>
                      <span>{boat.unit}</span>
                    </div>
                    <Link to={`/houseboats/${boat.id}`} className="btn btn-outline-dark">View Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/houseboats" className="btn btn-primary">View All Houseboats</Link>
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ══ */}
      <section className="section section--cream why-us">
        <div className="container">
          <div className="section-head">
            <span className="section-label">Why Us</span>
            <h2>The Kerala Houseboat Holidays Difference</h2>
            <div className="gold-divider gold-divider--center" />
            <p>We go beyond bookings — we craft experiences that stay with you for a lifetime.</p>
          </div>
          <div className="grid-3 why-grid">
            {whyUs.map(item => (
              <div key={item.title} className="why-card">
                <div className="why-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ EXPERIENCE BANNER ══ */}
      <section className="experience-banner">
        <div className="experience-overlay" />
        <div className="container experience-content">
          <div>
            <span className="section-label" style={{color:'var(--gold-light)'}}>The Journey Awaits</span>
            <h2>Wake Up to the Sound<br />of Kerala's Backwaters</h2>
            <p>Glide through ancient canals, watch fishermen cast their nets at dawn, and savour authentic Kerala cuisine as the sun sets over the paddy fields.</p>
            <Link to="/packages" className="btn btn-primary" style={{marginTop: '24px'}}>Explore Packages</Link>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="section section--white testimonials">
        <div className="container">
          <div className="section-head">
            <span className="section-label">Guest Stories</span>
            <h2>What Our Guests Say</h2>
            <div className="gold-divider gold-divider--center" />
          </div>
          <div className="testimonial-grid">
            {testimonials.map(t => (
              <div key={t.name} className="testimonial-card">
                <div className="t-stars">
                  {'★'.repeat(t.rating)}
                </div>
                <p className="t-text">"{t.text}"</p>
                <div className="t-footer">
                  <div className="t-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.from} · {t.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <a href="https://g.page/r/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
              Read All Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* ══ CTA BAND ══ */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-band-inner">
            <div>
              <h2>Ready to Experience Kerala's Magic?</h2>
              <p>Book your dream houseboat today. Instant WhatsApp confirmation available.</p>
            </div>
            <div className="cta-band-actions">
              <Link to="/contact" className="btn btn-primary">Book Now</Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{width:18,height:18}}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}