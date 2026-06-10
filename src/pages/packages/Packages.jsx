import { Link } from 'react-router-dom'
import './packages.css'
import { packages } from '../../themes/constants/packages/packages'



const comparisonRows = [
  { feature: 'Duration', dayCruise: '5 Hours', overnight: '21 Hours', honeymoon: '21 Hours', twoNight: '16 Hours' },
  { feature: 'Meals', dayCruise: 'Lunch + Tea', overnight: 'All 3 Meals', honeymoon: 'All + Special', twoNight: 'Tea + Dinner + Breakfast' },
  { feature: 'AC Bedroom', dayCruise: '—', overnight: '✅', honeymoon: '✅', twoNight: '✅' },
  { feature: 'Decoration', dayCruise: '—', overnight: '—', honeymoon: 'Full Floral', twoNight: '_' },
  { feature: 'Candlelight Dinner', dayCruise: '—', overnight: '—', honeymoon: '✅', twoNight: '_' },
  { feature: 'Sunrise Cruise', dayCruise: '—', overnight: '✅', honeymoon: '✅', twoNight: '✅' },
  { feature: 'Extended Route', dayCruise: 'Standard', overnight: 'Standard', honeymoon: 'Standard', twoNight: 'Standard' },
]

const bestTimeRows = [
  { month: 'October – February', rating: '⭐⭐⭐⭐⭐', weather: 'Cool & Sunny', note: 'Peak Season — Book Early' },
  { month: 'March – May', rating: '⭐⭐⭐⭐', weather: 'Warm & Clear', note: 'Good — Fewer Crowds' },
  { month: 'June – September', rating: '⭐⭐⭐', weather: 'Monsoon Season', note: 'Romantic — Lower Prices' },
]


const addons = [
  { name: 'Kerala Ayurvedic Massage', price: '₹1,200/person' },
  { name: 'Sunset Photography Session', price: '₹2,500/couple' },
  { name: 'Kerala Cultural Performance', price: '₹3,000/show' },
  { name: 'Private Fishing Trip', price: '₹800/person' },
  { name: 'Village Tour by Canoe', price: '₹600/person' },
  { name: 'BBQ Dinner Package', price: '₹500/person' },
]

export default function Packages() {
  return (
    <div className="packages-page">

      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="page-hero-pattern" />
        <div className="container">
          {/* <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Packages</span>
          </nav> */}

          <span className="section-label">Plans &amp; Pricing</span>
          <h1>Packages &amp; Pricing</h1>
          <p>Transparent, all-inclusive pricing. No hidden charges. All packages include meals, crew, and a memorable backwater journey.</p>
        </div>
      </section>

      {/* ── Package Cards ── */}
      <section className="section section--sand">
        <div className="container">
          <div className="packages-grid">
            {packages.map(pkg => (
              <div
                key={pkg.id}
                className={`pkg-card ${pkg.popular ? 'pkg-popular' : ''}`}
                style={{ '--pkg-color': pkg.color }}
              >
                {pkg.popular && (
                  <div className="pkg-popular-badge">⭐ Most Popular</div>
                )}

                <div className="pkg-header">
                  <span className="pkg-icon">{pkg.icon}</span>
                  <div>
                    <h3>{pkg.name}</h3>
                    <span className="pkg-duration">⏱ {pkg.duration}</span>
                  </div>
                </div>

                <p className="pkg-desc">{pkg.desc}</p>

                <div className="pkg-tiers">
                  {pkg.prices.map(p => (
                    <div key={p.tier} className="pkg-tier">
                      <span>{p.tier} · ( {p.pax} Passenger )</span>
                      <strong>{p.price}</strong>
                    </div>
                  ))}
                </div>

                <div className="pkg-includes">
                  <strong>What's Included</strong>
                  <ul>
                    {pkg.includes.map(item => (
                      <li key={item}>
                        <span className="inc-check">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pkg-actions">
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
                <div className="package-note">
                  <p>
                    * Prices are indicative and <strong>start</strong>  from the listed amount for <strong>2 guests</strong>. Rates may vary based on season, booking date, demand, and availability.
                  </p>
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
                  <th>Night Stay</th>
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

      {/* ── Add-ons ── */}
      <section className="section section--white">
        <div className="container">
          <div className="section-head">
            <span className="section-label">Extras</span>
            <h2>Optional Add-ons</h2>
            <div className="coral-divider coral-divider--center" />
            <p>Enhance your adventure with these optional extras. Add them to any package.</p>
          </div>
          <div className="addons-grid">
            {addons.map(a => (
              <div key={a.name} className="addon-card">
                <span>{a.name}</span>
                <strong>{a.price}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Price Notes ── */}
      <div className="price-notes-band">
        <div className="container">
          <div className="price-notes">
            <div>
              <h3>Pricing Notes</h3>
              <div className="coral-divider" />
              <ul className="notes-list">
                <li>Prices are per houseboat, not per person</li>
                <li>Peak season (Oct–Feb) may have a 15–20% premium</li>
                <li>GST of 5% applicable on all bookings</li>
                <li>Free cancellation up to 48 hours before check-in</li>
                <li>50% advance required to confirm the booking</li>
                <li>Group discounts available for 5+ nights</li>
              </ul>
            </div>

            <div className="price-cta-box">
              <h3>Need a Custom Quote?</h3>
              <p>Corporate groups, special occasions, or custom durations — we create bespoke packages tailored entirely to you.</p>
              <Link to="/contact" className="btn btn-primary">
                Get Custom Quote
              </Link>
              <a href="tel:+917736262841" className="btn btn-outline">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}