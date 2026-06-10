import { Link } from 'react-router-dom'
import './packages.css'

const packages = [
  {
    id: 'day-cruise',
    icon: '☀️',
    name: 'Day Cruise',
    duration: '11:00 AM – 5:00 PM',
    color: 'var(--sunrise)',
    prices: [
      { tier: 'Deluxe',  price: '₹3,500', beds: 1 },
      { tier: 'Premium', price: '₹4,500', beds: 2 },
      { tier: 'Luxury',  price: '₹6,000', beds: 2 },
    ],
    includes: ['Welcome Drink', 'Lunch (Kerala Cuisine)', 'Evening Tea & Snacks', 'Sightseeing Cruise', 'Life Jackets', 'Professional Crew'],
    popular: false,
    desc: 'Perfect for day-trippers. Explore the backwaters and return by evening. Ideal for families and groups visiting Alleppey.',
  },
  {
    id: 'overnight',
    icon: '🌙',
    name: 'Overnight Stay',
    duration: '12:00 PM – 9:00 AM',
    color: 'var(--ocean-bright)',
    prices: [
      { tier: 'Deluxe',  price: '₹5,500',  beds: 1 },
      { tier: 'Premium', price: '₹8,000',  beds: 2 },
      { tier: 'Luxury',  price: '₹12,000', beds: 2 },
    ],
    includes: ['All Meals (Lunch + Dinner + Breakfast)', 'Welcome Drink', 'Evening Tea', 'AC Bedroom(s)', 'Overnight Mooring', 'Fishing Experience', 'Morning Sunrise Cruise'],
    popular: true,
    desc: 'Our most popular package. Sleep aboard the houseboat, wake up to the serene sounds of the backwaters, and enjoy a full Kerala culinary experience.',
  },
  {
    id: 'honeymoon',
    icon: '💕',
    name: 'Honeymoon Package',
    duration: '12:00 PM – 9:00 AM',
    color: 'var(--coral)',
    prices: [
      { tier: 'Premium', price: '₹9,500',  beds: 1 },
      { tier: 'Luxury',  price: '₹13,000', beds: 2 },
    ],
    includes: ['Rose Petal Decoration', 'Candlelight Dinner', 'Welcome Champagne / Juice', 'Honeymoon Cake', 'Special Turn-down Service', 'All Meals', 'Private Sun Deck', 'Couple Photography Session'],
    popular: false,
    desc: 'A specially curated romantic experience for newlyweds. Floral décor, candlelight, special meals, and a private sunset cruise.',
  },
  {
    id: 'group',
    icon: '👨‍👩‍👧‍👦',
    name: 'Group / Family Package',
    duration: 'Flexible Duration',
    color: 'var(--jungle)',
    prices: [
      { tier: 'Family (3BR)', price: '₹15,000', beds: 3 },
      { tier: 'Group (4BR)',  price: '₹18,000', beds: 4 },
    ],
    includes: ['Multiple Bedrooms', 'All Meals for Group', 'Dedicated Chef', 'Spacious Sun Deck', 'BBQ Night', 'Group Activities', 'Special Decoration on Request'],
    popular: false,
    desc: 'Perfect for family gatherings, corporate outings, and large groups. Custom menus, spacious decks, and flexible arrangements.',
  },
]

const addons = [
  { name: 'Kerala Ayurvedic Massage',   price: '₹1,200/person' },
  { name: 'Sunset Photography Session', price: '₹2,500/couple' },
  { name: 'Kerala Cultural Performance', price: '₹3,000/show' },
  { name: 'Private Fishing Trip',        price: '₹800/person'  },
  { name: 'Village Tour by Canoe',       price: '₹600/person'  },
  { name: 'BBQ Dinner Package',          price: '₹500/person'  },
]

export default function Packages() {
  return (
    <div className="packages-page">

      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="page-hero-pattern" />
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Packages</span>
          </nav>
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
                      <span>{p.tier} · {p.beds}BR</span>
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
                    Book Now ↗
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
                Get Custom Quote ↗
              </Link>
              <a href="tel:+917736262841" className="btn btn-outline">
                📞 Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}