import { Link } from 'react-router-dom'
import '../../assets/css/shared.css'
import './seo.css'

const allPackages = [
  {
    name: 'Day Cruise Package',
    duration: '10 AM – 5 PM (7 Hours)',
    icon: '☀️',
    price: { Deluxe: '₹3,500', Premium: '₹4,500', Luxury: '₹6,000' },
    includes: ['Backwater sightseeing cruise', 'Welcome drink on arrival', 'Lunch – Traditional Kerala cuisine', 'Afternoon tea & snacks', 'Life jackets & safety equipment', 'Experienced captain & crew'],
    ideal: 'Day visitors, day-trippers from Kochi, office groups',
    color: 'var(--sunrise)',
  },
  {
    name: 'Overnight Stay Package',
    duration: '12 PM – 9 AM next day',
    icon: '🌙',
    price: { Deluxe: '₹5,500', Premium: '₹8,000', Luxury: '₹12,000' },
    includes: ['Full overnight cruise & mooring', 'Lunch + Evening tea + Dinner + Breakfast', 'AC cabin with attached bathroom', 'Fishing experience', 'Sunrise backwater cruise', 'All meals & welcome drink'],
    ideal: 'Couples, families, first-time Kerala visitors',
    color: 'var(--ocean-bright)',
    popular: true,
  },
  {
    name: 'Honeymoon Package',
    duration: '12 PM – 9 AM next day',
    icon: '💕',
    price: { Premium: '₹9,500', Luxury: '₹13,000' },
    includes: ['Rose petal & floral decoration', 'Honeymoon cake on arrival', 'Welcome champagne / sparkling drink', 'Candlelight dinner on deck', 'Special turn-down service', 'All meals included'],
    ideal: 'Newlyweds, anniversaries, romantic getaways',
    color: '#e879a0',
  },
  {
    name: 'Two-Night Package',
    duration: '2 Nights, 3 Days',
    icon: '🌟',
    price: { Deluxe: '₹10,000', Premium: '₹15,000', Luxury: '₹22,000' },
    includes: ['2 full nights on the backwaters', 'All meals (6 meals total)', 'Extended route – Vembanad to Kumarakom', 'BBQ night on the deck', 'Village canoe excursion', 'All day cruise inclusions'],
    ideal: 'Serious travellers, extended honeymoons',
    color: 'var(--jungle)',
  },
  {
    name: 'Family / Group Package',
    duration: 'Flexible – 1 to 3 Nights',
    icon: '👨‍👩‍👧‍👦',
    price: { 'Family 3BR': '₹15,000', 'Group 4BR': '₹18,000' },
    includes: ['3–4 bedroom houseboat', 'All meals for the group', 'Dedicated chef with group menu', 'Spacious sundeck & lounge', 'Group activities on request', 'Birthday/celebration setups'],
    ideal: 'Families, friends groups, corporate outings',
    color: '#7a6a2a',
  },
  {
    name: 'Corporate / MICE Package',
    duration: 'Custom Duration',
    icon: '💼',
    price: { Custom: 'Custom Quote' },
    includes: ['Multi-boat fleet bookings', 'Custom branding & décor', 'Conference/team-building activities', 'Catered group meals', 'Photography & videography', 'Dedicated event coordinator'],
    ideal: 'Corporate retreats, team outings, product launches',
    color: 'var(--ocean-mid)',
  },
]

const comparisonRows = [
  { feature: 'Duration', dayCruise: '7 Hours', overnight: '21 Hours', honeymoon: '21 Hours', twoNight: '3 Days' },
  { feature: 'Meals', dayCruise: 'Lunch + Tea', overnight: 'All 3 Meals', honeymoon: 'All + Special', twoNight: '6 Meals' },
  { feature: 'AC Bedroom', dayCruise: '—', overnight: '✅', honeymoon: '✅', twoNight: '✅' },
  { feature: 'Decoration', dayCruise: '—', overnight: '—', honeymoon: 'Full Floral', twoNight: 'On Request' },
  { feature: 'Candlelight Dinner', dayCruise: '—', overnight: '—', honeymoon: '✅', twoNight: 'On Request' },
  { feature: 'Sunrise Cruise', dayCruise: '—', overnight: '✅', honeymoon: '✅', twoNight: '✅' },
  { feature: 'Extended Route', dayCruise: 'Standard', overnight: 'Standard', honeymoon: 'Standard', twoNight: 'Kumarakom' },
]

const bestTimeRows = [
  { month: 'October – February', rating: '⭐⭐⭐⭐⭐', weather: 'Cool & Sunny', note: 'Peak Season — Book Early' },
  { month: 'March – May', rating: '⭐⭐⭐⭐', weather: 'Warm & Clear', note: 'Good — Fewer Crowds' },
  { month: 'June – September', rating: '⭐⭐⭐', weather: 'Monsoon Season', note: 'Romantic — Lower Prices' },
]

export default function AlleppeyPackages() {
  return (
    <div className="seo-page">

      {/* ── Hero ── */}
      <section className="seo-hero seo-hero--packages">
        <div className="seo-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=1600&q=80"
            alt="Alleppey houseboat packages"
          />
        </div>

        <div className="seo-hero-content container">
          <div className="seo-hero-inner">
            {/* <div className="seo-hero-kicker">💰 All-Inclusive · Alleppey, Kerala</div> */}
            <h1>
              Houseboat<br />
              Packages
              {/* <em></em> */}
            </h1>
            <p className="seo-hero-sub">
              Day cruise, overnight stay, honeymoon, family, or group — find the perfect Alleppey
              houseboat package. All-inclusive, transparent pricing, instant confirmation.
            </p>
            <div className="seo-trust-bar">
              <span>💰 No Hidden Charges</span>
              <span>✅ All Meals Included</span>
              <span>📱 Instant Confirmation</span>
              <span>🔄 Free Cancellation (48 hrs)</span>
            </div>
            <div className="seo-hero-actions">
              <Link to="/contact" className="btn btn-primary">Get a Quote ↗</Link>
              <a href="https://wa.me/917736262841" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Packages Grid ── */}
      <section className="section section--sand">
        <div className="container">
          <div className="section-head">
            <span className="section-label">All Packages</span>
            <h2>Alleppey Houseboat Packages &amp; Prices</h2>
            <div className="coral-divider coral-divider--center" />
            <p>Every package includes certified houseboats, experienced crew, life jackets, and our signature Kerala hospitality.</p>
          </div>

          <div className="packages-seo-grid">
            {allPackages.map(pkg => (
              <div
                key={pkg.name}
                className={`pkg-seo-card ${pkg.popular ? 'pkg-seo-popular' : ''}`}
                style={{ '--pkg-color': pkg.color }}
              >
                {pkg.popular && <div className="pkg-seo-badge">⭐ Most Booked</div>}

                <div className="pkg-seo-header">
                  <span className="pkg-seo-icon">{pkg.icon}</span>
                  <div>
                    <h3>{pkg.name}</h3>
                    <span className="pkg-seo-duration">⏱ {pkg.duration}</span>
                  </div>
                </div>

                <div className="pkg-seo-prices">
                  {Object.entries(pkg.price).map(([tier, price]) => (
                    <div key={tier} className="pkg-seo-price-row">
                      <span>{tier}</span>
                      <strong>{price}</strong>
                    </div>
                  ))}
                </div>

                <div className="pkg-seo-includes">
                  <strong>What's Included</strong>
                  <ul>
                    {pkg.includes.map(item => (
                      <li key={item}><span>✓</span>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="pkg-seo-ideal">
                  👥 <strong>Ideal for:</strong> {pkg.ideal}
                </div>

                <div className="pkg-seo-actions">
                  <Link to="/contact" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                    Book Now
                  </Link>
                  <a
                    href="https://wa.me/917736262841"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="section section--white">
        <div className="container">
          <div className="section-head">
            <span className="section-label">Side-by-Side</span>
            <h2>Package Comparison</h2>
            <div className="coral-divider coral-divider--center" />
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

      {/* ── Best Time ── */}
      <section className="section section--sand">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="section-head">
            <span className="section-label">Plan Your Visit</span>
            <h2>Best Time to Visit Alleppey</h2>
            <div className="coral-divider coral-divider--center" />
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

      {/* ── CTA ── */}
      <section className="seo-cta-band">
        <div className="container">
          <h2>Find Your Perfect Alleppey Package</h2>
          <p>Not sure which package to pick? Call or WhatsApp us — we'll recommend the best option for your group and budget.</p>
          <div className="seo-cta-actions">
            <Link to="/contact" className="btn btn-primary">Get Personalised Quote ↗</Link>
            <a href="tel:+917736262841" className="btn btn-outline">📞 Call +91 7736 26 2841</a>
          </div>
        </div>
      </section>

    </div>
  )
}