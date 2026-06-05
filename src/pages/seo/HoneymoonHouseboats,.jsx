import { Link } from 'react-router-dom'
import '../../assets/css/shared.css'
import './seo.css'

const romanticFeatures = [
  { icon: '🌹', title: 'Rose Petal Welcome',       desc: 'Step aboard to a stunning floral arrangement and rose-petal décor throughout the cabin.' },
  { icon: '🍰', title: 'Honeymoon Cake',            desc: 'Personalised honeymoon cake presented on arrival — surprise your partner in style.' },
  { icon: '🥂', title: 'Welcome Champagne',         desc: 'A chilled bottle of sparkling wine or fruit punch on arrival to begin your celebration.' },
  { icon: '🕯', title: 'Candlelight Dinner',        desc: 'A private candlelight dinner on the deck as the backwaters shimmer around you.' },
  { icon: '🛁', title: 'Special Bath Setup',        desc: 'Rose-petal bath and luxury toiletries prepared for the couple\'s first evening.' },
  { icon: '📸', title: 'Couple Photography',        desc: 'Optional professional photography session to capture your romantic moments forever.' },
  { icon: '🌅', title: 'Private Sundeck',           desc: 'Exclusive deck time for the two of you — sunrise coffee, sunset views, stargazing.' },
  { icon: '💆', title: 'Ayurvedic Couple Massage',  desc: 'Optional Kerala Ayurvedic massage for couples — the perfect way to unwind together.' },
]

const testimonials = [
  { name: 'Priya & Arjun', from: 'Bangalore', text: 'Our honeymoon on the Blossom Retreat was like a dream. The rose petals, candlelight dinner, and sunset — we will never forget this. Absolutely worth every rupee.', stars: 5 },
  { name: 'Neha & Rahul', from: 'Delhi', text: 'We were completely blown away. The staff made everything feel so special and personal. The food was incredible. Best decision we made for our honeymoon.', stars: 5 },
  { name: 'Divya & Karthik', from: 'Chennai', text: 'Kerala backwaters for a honeymoon is a must! The houseboat was stunning, the service was impeccable, and the scenery was breathtaking. 10/10.', stars: 5 },
]

const itinerary = [
  { time: '12:00 PM', event: 'Boarding — Rose Petal Welcome & Honeymoon Cake' },
  { time: '12:30 PM', event: 'Welcome Champagne / Sparkling Juice on the Deck' },
  { time: '1:00 PM',  event: 'Romantic Lunch — Special Couple\'s Menu' },
  { time: '2:30 PM',  event: 'Backwater Cruise through Vembanad Lake & Canals' },
  { time: '4:30 PM',  event: 'High Tea & Snacks on Sundeck' },
  { time: '5:30 PM',  event: 'Sunset Photography Session (Optional)' },
  { time: '6:00 PM',  event: 'Anchoring & Deck Relaxation' },
  { time: '7:30 PM',  event: 'Candlelight Dinner under the Stars' },
  { time: '9:00 PM',  event: 'Special Turn-down Service & Romantic Cabin Setup' },
  { time: 'Next 8 AM', event: 'Sunrise on the Backwaters' },
  { time: 'Next 9 AM', event: 'Breakfast & Checkout' },
]

export default function HoneymoonHouseboats() {
  return (
    <div className="seo-page">

      <section className="seo-hero seo-hero--honeymoon">
        <div className="seo-hero-overlay" />
        <div className="container seo-hero-content">
          <div className="seo-hero-text">
            <span className="section-label" style={{color:'var(--gold-light)'}}>Romance · Alleppey · Kerala</span>
            <h1>Honeymoon Houseboats<br /><em>in Alleppey</em></h1>
            <p className="seo-hero-sub">
              Begin your forever with the most romantic experience in India. Drift through Kerala's
              magical backwaters on a private houseboat crafted for love.
            </p>
            <div className="seo-trust-bar">
              <span>💕 1,000+ Honeymoon Couples</span>
              <span>⭐ 5-Star Romance Package</span>
              <span>🌹 Fully Decorated</span>
              <span>📸 Photography Included</span>
            </div>
            <div className="seo-hero-actions">
              <Link to="/contact"  className="btn btn-primary">Book Honeymoon Package</Link>
              <Link to="/packages" className="btn btn-outline">See Pricing</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section section--white">
        <div className="container seo-intro-layout">
          <div className="seo-intro-text">
            <span className="section-label">Why Choose Kerala for Your Honeymoon</span>
            <h2>A Honeymoon on Kerala's Backwaters — Unforgettably Romantic</h2>
            <div className="gold-divider" />
            <p>
              There is a reason Kerala consistently tops lists of India's most romantic honeymoon destinations.
              The backwaters of Alleppey offer something no beach resort or hill station can — absolute serenity,
              breathtaking natural beauty, and an intimacy that comes from drifting through the world together.
            </p>
            <p>
              Our <strong>Honeymoon Houseboat Package</strong> is crafted for couples who want more than a hotel room.
              Imagine waking up on the water. Sunlight filtering through palm fronds. Your breakfast served on
              a private deck. A candlelight dinner as the stars reflect on the backwaters. Just the two of you.
            </p>
            <p>
              Every detail of our honeymoon package is thoughtfully designed — from the rose-petal welcome
              and the personalised honeymoon cake to the special turn-down service and the quiet sunrise cruise
              the following morning. We handle everything; you simply arrive and fall deeper in love.
            </p>
            <p><strong>Starting from ₹9,500 per couple per night</strong>, all-inclusive.</p>
          </div>
          <div className="seo-intro-sidebar">
            <div className="quick-book-widget honeymoon-widget">
              <div className="honeymoon-widget-header">
                <span style={{fontSize:'1.8rem'}}>💕</span>
                <h3>Honeymoon Booking</h3>
              </div>
              <div className="gold-divider" />
              <div className="luxury-price-display">
                <strong>From ₹9,500</strong>
                <span>per couple · All inclusive</span>
              </div>
              <form onSubmit={e => e.preventDefault()}>
                <div className="form-group"><label>Wedding / Travel Date</label><input type="date" /></div>
                <div className="form-group"><label>Package</label>
                  <select><option>1 Night Honeymoon</option><option>2 Night Romantic Escape</option><option>Day Romantic Cruise</option></select>
                </div>
                <button className="btn btn-primary" style={{width:'100%',justifyContent:'center'}} type="submit">Book Honeymoon Package</button>
              </form>
              <a href="https://wa.me/917736262841?text=Hi%2C%20I%20want%20to%20book%20a%20honeymoon%20houseboat" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark" style={{width:'100%',justifyContent:'center',marginTop:10}}>
                💬 WhatsApp for Details
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Romantic Features */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-head">
            <span className="section-label">Everything Included</span>
            <h2>What's Included in the Honeymoon Package</h2>
            <div className="gold-divider gold-divider--center" />
          </div>
          <div className="grid-4">
            {romanticFeatures.map(f => (
              <div key={f.title} className="seo-highlight-card honeymoon-card">
                <span className="seo-hl-icon">{f.icon}</span>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="section section--white">
        <div className="container" style={{maxWidth:780}}>
          <div className="section-head">
            <span className="section-label">Your Day on the Water</span>
            <h2>Honeymoon Houseboat Itinerary</h2>
            <div className="gold-divider gold-divider--center" />
          </div>
          <div className="seo-itinerary">
            {itinerary.map((item, i) => (
              <div key={i} className="seo-it-item">
                <div className="seo-it-time">{item.time}</div>
                <div className="seo-it-dot" />
                <div className="seo-it-event">{item.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-head">
            <span className="section-label">Love Stories</span>
            <h2>What Honeymooning Couples Say</h2>
            <div className="gold-divider gold-divider--center" />
          </div>
          <div className="grid-3">
            {testimonials.map(t => (
              <div key={t.name} className="seo-testimonial-card">
                <div className="seo-t-stars">{'★'.repeat(t.stars)}</div>
                <p>"{t.text}"</p>
                <div className="seo-t-author">
                  <div className="seo-t-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.from}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="seo-cta-band seo-cta-band--romance">
        <div className="container">
          <h2>Begin Your Forever on Kerala's Backwaters 💕</h2>
          <p>Fully decorated · Candlelight dinner · Personalised service · Free customisation</p>
          <div className="seo-cta-actions">
            <Link to="/contact" className="btn btn-primary">Book Honeymoon Package</Link>
            <a href="https://wa.me/917736262841" target="_blank" rel="noopener noreferrer" className="btn btn-outline">💬 WhatsApp Us</a>
          </div>
        </div>
      </section>
    </div>
  )
}