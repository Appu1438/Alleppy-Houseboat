// import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/shared.css'
import './seo.css'

const allPackages = [
  {
    name: 'Day Cruise Package',
    duration: '10 AM – 5 PM (7 Hours)',
    icon: '☀️',
    price: { deluxe: '₹3,500', premium: '₹4,500', luxury: '₹6,000' },
    includes: ['Backwater sightseeing cruise', 'Welcome drink on arrival', 'Lunch – Traditional Kerala cuisine', 'Afternoon tea & snacks', 'Life jackets & safety equipment', 'Experienced captain & crew'],
    ideal: 'Day visitors, day-trippers from Kochi, office groups',
    color: '#c9973a',
  },
  {
    name: 'Overnight Stay Package',
    duration: '12 PM – 9 AM next day',
    icon: '🌙',
    price: { deluxe: '₹5,500', premium: '₹8,000', luxury: '₹12,000' },
    includes: ['Full overnight cruise & mooring', 'Lunch + Evening tea + Dinner + Breakfast', 'AC cabin with attached bathroom', 'Fishing experience', 'Sunrise backwater cruise', 'All meals & welcome drink'],
    ideal: 'Couples, families, first-time Kerala visitors',
    color: '#2a8a82',
    popular: true,
  },
  {
    name: 'Honeymoon Package',
    duration: '12 PM – 9 AM next day',
    icon: '💕',
    price: { premium: '₹9,500', luxury: '₹13,000' },
    includes: ['Rose petal & floral decoration', 'Honeymoon cake on arrival', 'Welcome champagne / sparkling drink', 'Candlelight dinner on deck', 'Special turn-down service', 'All meals included'],
    ideal: 'Newlyweds, anniversaries, romantic getaways',
    color: '#d97b8a',
  },
  {
    name: 'Two-Night Package',
    duration: '2 Nights, 3 Days',
    icon: '🌟',
    price: { deluxe: '₹10,000', premium: '₹15,000', luxury: '₹22,000' },
    includes: ['2 full nights on the backwaters', 'All meals (6 meals total)', 'Extended route – Vembanad to Kumarakom', 'BBQ night on the deck', 'Village canoe excursion', 'All day cruise inclusions'],
    ideal: 'Serious travellers, extended honeymoons',
    color: '#5a7a6a',
  },
  {
    name: 'Family / Group Package',
    duration: 'Flexible – 1 to 3 Nights',
    icon: '👨‍👩‍👧‍👦',
    price: { family3br: '₹15,000', group4br: '₹18,000' },
    includes: ['3–4 bedroom houseboat', 'All meals for the group', 'Dedicated chef with group menu', 'Spacious sundeck & lounge', 'Group activities on request', 'Birthday/celebration setups'],
    ideal: 'Families, friends groups, corporate outings',
    color: '#7a6a2a',
  },
  {
    name: 'Corporate / MICE Package',
    duration: 'Custom Duration',
    icon: '💼',
    price: { custom: 'Custom Quote' },
    includes: ['Multi-boat fleet bookings', 'Custom branding & décor', 'Conference/team-building activities', 'Catered group meals', 'Photography & videography', 'Dedicated event coordinator'],
    ideal: 'Corporate retreats, team outings, product launches',
    color: '#4a6a8a',
  },
]

const comparisonRows = [
  { feature: 'Duration',           dayCruise: '7 Hours',     overnight: '21 Hours',    honeymoon: '21 Hours',    twoNight: '3 Days' },
  { feature: 'Meals',              dayCruise: 'Lunch + Tea', overnight: 'All 3 Meals', honeymoon: 'All + Special',twoNight: '6 Meals' },
  { feature: 'AC Bedroom',         dayCruise: '—',           overnight: '✅',           honeymoon: '✅',           twoNight: '✅' },
  { feature: 'Decoration',         dayCruise: '—',           overnight: '—',           honeymoon: 'Full Floral', twoNight: 'On Request' },
  { feature: 'Candlelight Dinner', dayCruise: '—',           overnight: '—',           honeymoon: '✅',           twoNight: 'On Request' },
  { feature: 'Sunrise Cruise',     dayCruise: '—',           overnight: '✅',           honeymoon: '✅',           twoNight: '✅' },
  { feature: 'Extended Route',     dayCruise: 'Standard',    overnight: 'Standard',    honeymoon: 'Standard',    twoNight: 'Kumarakom' },
]

const bestTimeRows = [
  { month: 'October – February', rating: '⭐⭐⭐⭐⭐', weather: 'Cool & Sunny', note: 'Peak Season — Book Early' },
  { month: 'March – May',        rating: '⭐⭐⭐⭐',   weather: 'Warm & Clear', note: 'Good — Fewer Crowds' },
  { month: 'June – September',   rating: '⭐⭐⭐',     weather: 'Monsoon Season', note: 'Romantic — Lower Prices' },
]

export default function AlleppeyPackages() {
//   const [openPkg, setOpenPkg] = useState(null)

  return (
    <div className="seo-page">

      <section className="seo-hero">
        <div className="seo-hero-overlay" />
        <div className="container seo-hero-content">
          <div className="seo-hero-text">
            <span className="section-label" style={{color:'var(--gold-light)'}}>All-Inclusive · Alleppey, Kerala</span>
            <h1>Alleppey Houseboat<br /><em>Packages</em></h1>
            <p className="seo-hero-sub">
              Day cruise, overnight stay, honeymoon, family, or group — find the perfect Alleppey
              houseboat package for your trip. All-inclusive, transparent pricing, instant confirmation.
            </p>
            <div className="seo-trust-bar">
              <span>💰 No Hidden Charges</span>
              <span>✅ All Meals Included</span>
              <span>📱 Instant Confirmation</span>
              <span>❌ Free Cancellation (48 hrs)</span>
            </div>
            <div className="seo-hero-actions">
              <Link to="/contact"  className="btn btn-primary">Get a Quote</Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-outline">💬 WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-head">
            <span className="section-label">All Packages</span>
            <h2>Alleppey Houseboat Packages & Prices</h2>
            <div className="gold-divider gold-divider--center" />
            <p>Every package includes certified houseboats, experienced crew, life jackets, and our signature Kerala hospitality.</p>
          </div>
          <div className="packages-seo-grid">
            {allPackages.map((pkg) => (
              <div key={pkg.name} className={`pkg-seo-card ${pkg.popular ? 'pkg-seo-popular' : ''}`} style={{'--pkg-color': pkg.color}}>
                {pkg.popular && <div className="pkg-seo-badge">⭐ Most Booked</div>}
                <div className="pkg-seo-header">
                  <span className="pkg-seo-icon">{pkg.icon}</span>
                  <div>
                    <h3>{pkg.name}</h3>
                    <span className="pkg-seo-duration">⏱ {pkg.duration}</span>
                  </div>
                </div>

                {/* Prices */}
                <div className="pkg-seo-prices">
                  {Object.entries(pkg.price).map(([tier, price]) => (
                    <div key={tier} className="pkg-seo-price-row">
                      <span>{tier.charAt(0).toUpperCase() + tier.slice(1).replace(/([A-Z])/g, ' $1')}</span>
                      <strong>{price}</strong>
                    </div>
                  ))}
                </div>

                <div className="pkg-seo-includes">
                  <strong>Includes:</strong>
                  <ul>
                    {pkg.includes.map(item => <li key={item}><span>✓</span>{item}</li>)}
                  </ul>
                </div>

                <div className="pkg-seo-ideal">
                  <span>👥 Ideal for:</span> {pkg.ideal}
                </div>

                <div className="pkg-seo-actions">
                  <Link to="/contact" className="btn btn-primary" style={{flex:1, justifyContent:'center'}}>Book Now</Link>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark" style={{flex:1, justifyContent:'center'}}>WhatsApp</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section section--white">
        <div className="container">
          <div className="section-head">
            <span className="section-label">Side-by-Side Comparison</span>
            <h2>Package Comparison</h2>
            <div className="gold-divider gold-divider--center" />
          </div>
          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Day Cruise</th>
                  <th className="highlight-col">Overnight</th>
                  <th>Honeymoon</th>
                  <th>Two-Night</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(row => (
                  <tr key={row.feature}>
                    <td className="feature-col">{row.feature}</td>
                    <td>{row.dayCruise}</td>
                    <td className="highlight-col">{row.overnight}</td>
                    <td>{row.honeymoon}</td>
                    <td>{row.twoNight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Best Time */}
      <section className="section section--cream">
        <div className="container" style={{maxWidth:800}}>
          <div className="section-head">
            <span className="section-label">Plan Your Visit</span>
            <h2>Best Time to Visit Alleppey</h2>
            <div className="gold-divider gold-divider--center" />
          </div>
          <div className="best-time-table">
            {bestTimeRows.map(r => (
              <div key={r.month} className="best-time-row">
                <div className="bt-month">{r.month}</div>
                <div className="bt-rating">{r.rating}</div>
                <div className="bt-weather">{r.weather}</div>
                <div className="bt-note">{r.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="seo-cta-band">
        <div className="container">
          <h2>Find Your Perfect Alleppey Houseboat Package</h2>
          <p>Not sure which package to pick? Call or WhatsApp us — we'll recommend the best option for your group and budget.</p>
          <div className="seo-cta-actions">
            <Link to="/contact" className="btn btn-primary">Get Personalised Quote</Link>
            <a href="tel:+919876543210" className="btn btn-outline">📞 Call +91 98765 43210</a>
          </div>
        </div>
      </section>
    </div>
  )
}