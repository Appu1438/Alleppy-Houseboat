import { Link } from 'react-router-dom'
import '../../assets/css/shared.css'
import './seo.css'

const luxuryFeatures = [
  { icon: '🛏', title: 'Premium Bedrooms',      desc: 'Teak-wood furnished AC cabins with king-size beds, fine linen, and plush pillows.' },
  { icon: '🍽', title: 'Personal Chef',          desc: 'Dedicated onboard chef serving fresh Kerala seafood, gourmet meals, and custom menus.' },
  { icon: '🌅', title: 'Private Upper Deck',     desc: 'Exclusive sun deck with loungers for sunset gazing, stargazing, and total privacy.' },
  { icon: '🛁', title: 'Premium Bathrooms',      desc: 'Spacious attached bathrooms with hot water, premium toiletries, and branded fixtures.' },
  { icon: '🌿', title: 'Eco-Luxury Design',      desc: 'Traditional coir, bamboo, and wood interiors — authentic Kerala craftsmanship at its finest.' },
  { icon: '📸', title: 'Photography Sessions',   desc: 'Optional professional photography packages to capture your memories on the backwaters.' },
  { icon: '💆', title: 'Ayurvedic Massage',      desc: 'Optional Kerala Ayurvedic massage therapy onboard or at a partner spa on request.' },
  { icon: '🥂', title: 'Special Celebrations',   desc: 'Birthday, anniversary, and honeymoon setups with floral décor and personalised cakes.' },
]

const luxuryBoats = [
  { name: 'Royal Lotus', beds: 2, price: '₹12,000/night', highlight: 'Our Flagship Luxury Vessel' },
  { name: 'Emerald Luxury', beds: 2, price: '₹11,500/night', highlight: 'Premium Interiors & Teak Deck' },
]

const faqs = [
  { q: 'What makes a luxury houseboat different from a deluxe one?', a: 'Luxury houseboats feature premium teak wood interiors, larger bedrooms with king beds, private upper sundeck, higher-grade bathroom fittings, a dedicated personal chef with a wider menu, and superior in-cruise service. Deluxe boats offer comfortable but standard fittings.' },
  { q: 'Are luxury houseboats worth the price?', a: 'For a special occasion — honeymoon, anniversary, or milestone holiday — a luxury houseboat delivers a truly world-class experience at a fraction of what you\'d pay for comparable luxury in Europe or Southeast Asia. Most guests say it was the highlight of their entire India trip.' },
  { q: 'Can we customise meals on a luxury boat?', a: 'Absolutely. Our luxury boats come with a personal chef who tailors the menu to your preferences. Whether you want a multi-course Kerala seafood feast, a vegetarian Sadhya, continental options, or something special for dietary needs — just let us know in advance.' },
]

export default function LuxuryHouseboats() {
  return (
    <div className="seo-page">

      <section className="seo-hero seo-hero--luxury">
        <div className="seo-hero-overlay" />
        <div className="container seo-hero-content">
          <div className="seo-hero-text">
            <span className="section-label" style={{color:'var(--gold-light)'}}>Premium Experience · Alleppey, Kerala</span>
            <h1>Luxury Houseboats<br /><em>in Alleppey</em></h1>
            <p className="seo-hero-sub">
              Indulge in the finest backwater experience Kerala has to offer. Our luxury houseboats combine
              traditional craftsmanship, world-class comforts, and impeccable personal service.
            </p>
            <div className="seo-trust-bar">
              <span>⭐ 4.9 / 5 Rating</span>
              <span>🏆 #1 Luxury Operator</span>
              <span>✅ DTPC Certified</span>
              <span>💎 Premium Fleet</span>
            </div>
            <div className="seo-hero-actions">
              <Link to="/contact"  className="btn btn-primary">Book Luxury Stay</Link>
              <Link to="/houseboats" className="btn btn-outline">View Luxury Boats</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rich Intro */}
      <section className="section section--white">
        <div className="container seo-intro-layout">
          <div className="seo-intro-text">
            <span className="section-label">What Is Luxury in Kerala</span>
            <h2>What to Expect on a Luxury Houseboat in Alleppey</h2>
            <div className="gold-divider" />
            <p>
              A <strong>luxury houseboat in Alleppey</strong> is not just accommodation — it is a floating palace.
              Kerala Houseboat Holidays operates a premium fleet of luxury vessels, each meticulously maintained and
              staffed by a dedicated crew of 3–4 professionals including a personal chef, captain, and attendant.
            </p>
            <p>
              Our luxury houseboats are built using traditional <em>kettuvallam</em> construction methods — hand-woven bamboo
              mat roofs, polished teak wood flooring, coir rope bindings, and carved wooden panels — combined with
              modern amenities including powerful AC, en-suite bathrooms with hot water, LED lighting, and Wi-Fi.
            </p>
            <p>
              Every luxury cruise is a curated sensory journey. Morning mist over the paddy fields. The smell of
              fresh coconut oil in your breakfast. The sound of oars in still water. A candlelit dinner under the
              stars, with Kerala fish curry cooked exactly the way it should be.
            </p>
            <p>
              <strong>Starting from ₹11,500 per night</strong>, our luxury packages represent exceptional value
              compared to comparable luxury water-borne experiences worldwide. All meals, crew, sightseeing, and
              service are included. No hidden costs.
            </p>
          </div>
          <div className="seo-intro-sidebar">
            <div className="quick-book-widget luxury-widget">
              <div className="luxury-widget-header">
                <span className="badge badge-gold">Luxury</span>
                <h3>Luxury Booking</h3>
              </div>
              <div className="gold-divider" />
              <div className="luxury-price-display">
                <strong>From ₹11,500</strong>
                <span>per night · All inclusive</span>
              </div>
              <form onSubmit={e => e.preventDefault()}>
                <div className="form-group"><label>Check-in Date</label><input type="date" /></div>
                <div className="form-group"><label>Nights</label>
                  <select><option>1 Night</option><option>2 Nights</option><option>3 Nights</option></select>
                </div>
                <button className="btn btn-primary" style={{width:'100%',justifyContent:'center'}} type="submit">Check Availability</button>
              </form>
              <a href="https://wa.me/919876543210?text=I%20want%20to%20book%20a%20luxury%20houseboat" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark" style={{width:'100%',justifyContent:'center',marginTop:10}}>
                💬 WhatsApp for Luxury Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Features */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-head">
            <span className="section-label">Exclusive Amenities</span>
            <h2>Luxury Houseboat Features & Amenities</h2>
            <div className="gold-divider gold-divider--center" />
          </div>
          <div className="grid-4">
            {luxuryFeatures.map(f => (
              <div key={f.title} className="seo-highlight-card luxury-feature-card">
                <span className="seo-hl-icon">{f.icon}</span>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Boats */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-head">
            <span className="section-label">Our Luxury Fleet</span>
            <h2 style={{color:'var(--gold-light)'}}>Our Luxury Houseboats</h2>
            <div className="gold-divider gold-divider--center" />
          </div>
          <div className="grid-2" style={{maxWidth:700, margin:'0 auto'}}>
            {luxuryBoats.map(b => (
              <div key={b.name} className="seo-luxury-boat-card">
                <span className="badge badge-gold" style={{marginBottom:12}}>{b.highlight}</span>
                <h3 style={{color:'var(--gold-light)'}}>{b.name}</h3>
                <p style={{color:'rgba(250,246,238,0.65)', fontSize:'0.88rem'}}>🛏 {b.beds} Bedrooms · All meals included · Private deck</p>
                <strong style={{color:'var(--gold-light)', fontFamily:'Cormorant Garamond, serif', fontSize:'1.6rem'}}>{b.price}</strong>
                <Link to={`/houseboats`} className="btn btn-primary" style={{marginTop:16}}>View Details</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--white">
        <div className="container" style={{maxWidth:800}}>
          <div className="section-head">
            <span className="section-label">Common Questions</span>
            <h2>Luxury Houseboat FAQ</h2>
            <div className="gold-divider gold-divider--center" />
          </div>
          <div className="seo-faq-list">
            {faqs.map(f => (
              <div key={f.q} className="seo-faq-item">
                <h4>{f.q}</h4>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="seo-cta-band">
        <div className="container">
          <h2>Experience Alleppey's Finest Luxury Houseboat</h2>
          <p>Limited boats available · Early booking recommended · All meals & service included</p>
          <div className="seo-cta-actions">
            <Link to="/contact" className="btn btn-primary">Book Luxury Houseboat</Link>
            <a href="tel:+919876543210" className="btn btn-outline">📞 Call for Availability</a>
          </div>
        </div>
      </section>
    </div>
  )
}