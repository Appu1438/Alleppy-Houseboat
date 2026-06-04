// import  { useState } from 'react'
import { Link } from 'react-router-dom'
import './packages.css'

const packages = [
  {
    id: 'day-cruise',
    icon: '☀️',
    name: 'Day Cruise',
    duration: '10:00 AM – 5:00 PM',
    color: '#c9973a',
    prices: [
      { tier: 'Deluxe', price: '₹3,500', beds: 1 },
      { tier: 'Premium', price: '₹4,500', beds: 2 },
      { tier: 'Luxury', price: '₹6,000', beds: 2 },
    ],
    includes: ['Welcome Drink','Lunch (Kerala Cuisine)','Evening Tea & Snacks','Sightseeing Cruise','Life Jackets','Professional Crew'],
    excludes: ['Breakfast','Alcoholic Beverages','Water Sports'],
    popular: false,
    desc: 'Perfect for day-trippers. Explore the backwaters and return by evening. Ideal for families and groups visiting Alleppey.',
  },
  {
    id: 'overnight',
    icon: '🌙',
    name: 'Overnight Stay',
    duration: '12:00 PM – 9:00 AM',
    color: '#2a8a82',
    prices: [
      { tier: 'Deluxe', price: '₹5,500', beds: 1 },
      { tier: 'Premium', price: '₹8,000', beds: 2 },
      { tier: 'Luxury', price: '₹12,000', beds: 2 },
    ],
    includes: ['All Meals (Lunch + Dinner + Breakfast)','Welcome Drink','Evening Tea','AC Bedroom(s)','Overnight Mooring','Fishing Experience','Morning Sunrise Cruise'],
    excludes: ['Alcoholic Beverages','Water Sports','Laundry'],
    popular: true,
    desc: 'Our most popular package. Sleep aboard the houseboat, wake up to the serene sounds of the backwaters, and enjoy a full Kerala culinary experience.',
  },
  {
    id: 'honeymoon',
    icon: '💕',
    name: 'Honeymoon Package',
    duration: '12:00 PM – 9:00 AM',
    color: '#d97b8a',
    prices: [
      { tier: 'Premium', price: '₹9,500', beds: 1 },
      { tier: 'Luxury', price: '₹13,000', beds: 2 },
    ],
    includes: ['Rose Petal Decoration','Candlelight Dinner','Welcome Champagne / Juice','Honeymoon Cake','Special Turn-down Service','All Meals','Private Sun Deck','Couple Photography Session'],
    excludes: ['Alcoholic Beverages (chargeable)'],
    popular: false,
    desc: 'A specially curated romantic experience for newlyweds. Floral décor, candlelight, special meals, and a private sunset cruise.',
  },
  {
    id: 'group',
    icon: '👨‍👩‍👧‍👦',
    name: 'Group / Family Package',
    duration: 'Flexible Duration',
    color: '#5a7a6a',
    prices: [
      { tier: 'Family (3BR)', price: '₹15,000', beds: 3 },
      { tier: 'Group (4BR)', price: '₹18,000', beds: 4 },
    ],
    includes: ['Multiple Bedrooms','All Meals for Group','Dedicated Chef','Spacious Sun Deck','BBQ Night','Group Activities','Special Decoration on Request'],
    excludes: ['Alcoholic Beverages','External Catering'],
    popular: false,
    desc: 'Perfect for family gatherings, corporate outings, and large groups. Custom menus, spacious decks, and flexible arrangements.',
  },
]

const addons = [
  { name: 'Kerala Ayurvedic Massage',  price: '₹1,200/person' },
  { name: 'Sunset Photography Session', price: '₹2,500/couple' },
  { name: 'Kerala Cultural Performance', price: '₹3,000/show' },
  { name: 'Private Fishing Trip',        price: '₹800/person' },
  { name: 'Village Tour by Canoe',      price: '₹600/person' },
  { name: 'BBQ Dinner Package',          price: '₹500/person' },
]

export default function Packages() {
//   const [selected, setSelected] = useState(null)

  return (
    <div className="packages-page">
      <section className="page-hero">
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="section-label" style={{color:'var(--gold-light)'}}>Plans & Pricing</span>
          <h1>Packages & Pricing</h1>
          <p>Transparent, all-inclusive pricing. No hidden charges. All packages include meals, crew, and a memorable backwater journey.</p>
        </div>
      </section>

      {/* Package Cards */}
      <section className="section section--cream">
        <div className="container">
          <div className="packages-grid">
            {packages.map(pkg => (
              <div key={pkg.id} className={`pkg-card ${pkg.popular ? 'pkg-popular' : ''}`} style={{'--pkg-color': pkg.color}}>
                {pkg.popular && <div className="pkg-popular-badge">⭐ Most Popular</div>}
                <div className="pkg-header">
                  <span className="pkg-icon">{pkg.icon}</span>
                  <div>
                    <h3>{pkg.name}</h3>
                    <span className="pkg-duration">⏱ {pkg.duration}</span>
                  </div>
                </div>
                <p className="pkg-desc">{pkg.desc}</p>

                {/* Price Tiers */}
                <div className="pkg-tiers">
                  {pkg.prices.map(p => (
                    <div key={p.tier} className="pkg-tier">
                      <span>{p.tier} · {p.beds}BR</span>
                      <strong>{p.price}</strong>
                    </div>
                  ))}
                </div>

                {/* Includes */}
                <div className="pkg-includes">
                  <strong>Includes:</strong>
                  <ul>
                    {pkg.includes.map(i => <li key={i}><span className="inc-check">✓</span>{i}</li>)}
                  </ul>
                </div>

                <div className="pkg-actions">
                  <Link to="/contact" className="btn btn-primary" style={{flex:1, justifyContent:'center'}}>Book Now</Link>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark" style={{flex:1, justifyContent:'center'}}>WhatsApp</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section section--white">
        <div className="container">
          <div className="section-head">
            <span className="section-label">Extras</span>
            <h2>Optional Add-ons</h2>
            <div className="gold-divider gold-divider--center" />
            <p>Enhance your experience with these optional extras. Add them to any package.</p>
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

      {/* Price Note */}
      <section className="section section--dark" style={{padding:'60px 0'}}>
        <div className="container">
          <div className="price-notes">
            <div>
              <h3>Pricing Notes</h3>
              <div className="gold-divider" />
              <ul className="notes-list">
                <li>Prices are per houseboat (not per person)</li>
                <li>Peak season (Oct–Feb) may have a 15–20% premium</li>
                <li>GST of 5% applicable on all bookings</li>
                <li>Free cancellation up to 48 hours before check-in</li>
                <li>50% advance required to confirm the booking</li>
                <li>Group discounts available for 5+ nights</li>
              </ul>
            </div>
            <div className="price-cta-box">
              <h3>Need a Custom Quote?</h3>
              <p>Corporate groups, special occasions, or custom durations — we create bespoke packages.</p>
              <Link to="/contact" className="btn btn-primary" style={{marginTop:20}}>Get Custom Quote</Link>
              <a href="tel:+919876543210" className="btn btn-outline" style={{marginTop:10}}>📞 Call Now</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}