import { useState } from 'react'
import { Link } from 'react-router-dom'
import './faq.css'

const faqCategories = [
  {
    category: 'Booking & Reservations',
    icon: '📋',
    faqs: [
      {
        q: 'How do I book a houseboat?',
        a: 'You can book through our website enquiry form, by calling us at +91 7736 26 2841, or by sending a WhatsApp message. We confirm bookings within 30 minutes and require a 50% advance to secure your dates.',
      },
      {
        q: 'How much advance booking is required?',
        a: 'We recommend booking at least 2–4 weeks in advance, especially during peak season (October to February). However, last-minute bookings are sometimes possible — call us to check availability.',
      },
      {
        q: 'Is there a minimum stay requirement?',
        a: 'Our Day Cruise runs from 11 AM to 5 PM (minimum 6 hours). For overnight stays, the minimum is one night. We also offer 2-night and 3-night packages for a more immersive experience.',
      },
      {
        q: 'What is the advance payment required?',
        a: '50% of the total booking amount is required as advance to confirm your reservation. The remaining 50% can be paid on the day of boarding. We accept bank transfer, UPI, and major credit/debit cards.',
      },
      {
        q: 'Can I modify my booking after confirmation?',
        a: 'Yes, date changes can be made up to 72 hours before check-in, subject to availability. Package upgrades are always welcome. Please call or WhatsApp us to modify your booking.',
      },
    ],
  },
  {
    category: 'Check-in & Check-out',
    icon: '⏰',
    faqs: [
      {
        q: 'What are the check-in and check-out times?',
        a: 'For overnight stays, check-in is at 12:00 PM (noon) and check-out is at 9:00 AM the next day. Day cruises start at 10:00 AM and end at 5:00 PM. Exact boarding location is the Alleppey Finishing Point.',
      },
      {
        q: 'Where exactly do we board the houseboat?',
        a: 'All houseboats depart from and return to the Alleppey Finishing Point (also called the Kettuvallam Jetty), located on Finishing Point Road, Alappuzha. It is well-known and easily reached by taxi from Alleppey bus/railway station (about 2 km).',
      },
      {
        q: 'Can I check in early or check out late?',
        a: 'Early check-in or late check-out may be arranged on request, subject to availability. An additional charge of ₹1,000 per hour may apply. Please inform us at least 24 hours in advance.',
      },
      {
        q: 'What should I bring on the houseboat?',
        a: 'Light comfortable clothing, sunscreen, sunglasses, mosquito repellent, any personal medications, and a camera! We provide towels, bed linen, and basic toiletries. Avoid bringing heavy luggage — the boat has limited storage.',
      },
    ],
  },
  {
    category: 'Food & Dining',
    icon: '🍽️',
    faqs: [
      {
        q: 'What food is served on the houseboat?',
        a: 'We serve authentic Kerala cuisine — freshly cooked by our onboard chef. Meals include traditional fish curry, rice, sambar, vegetable curries, appam, puttu, and fresh seafood caught during the cruise. Meals are included in all our packages.',
      },
      {
        q: 'Can you accommodate vegetarian or special dietary needs?',
        a: 'Absolutely. We cater to vegetarian, vegan, Jain, gluten-free, and other dietary requirements with advance notice. Please mention your dietary preferences at the time of booking. We take food allergies very seriously.',
      },
      {
        q: 'Is drinking water provided?',
        a: 'Yes, mineral water is provided complimentary throughout your stay. We also serve fresh lime juice, coconut water, and hot beverages (tea/coffee) as part of all packages.',
      },
      {
        q: 'Are alcoholic beverages allowed?',
        a: 'Guests are welcome to bring their own alcoholic beverages. We do not sell alcohol on board but do not restrict personal consumption by adults. Please drink responsibly.',
      },
    ],
  },
  {
    category: 'Routes & Sightseeing',
    icon: '🗺️',
    faqs: [
      {
        q: 'What route does the houseboat follow?',
        a: 'Our standard route covers the Vembanad Lake, Punnamada Lake, and the scenic backwater canals of Alleppey. You will pass through paddy fields, coconut groves, village life, Chinese fishing nets, and local markets.',
      },
      {
        q: 'Where does the houseboat anchor at night?',
        a: 'The government mandates that houseboats anchor by 5:30 PM and cannot operate after dark. We moor at designated safe anchoring points in the backwaters, typically near a quiet village — perfect for stargazing.',
      },
      {
        q: 'Can we go to Kumarakom from Alleppey?',
        a: 'Yes, the Alleppey–Kumarakom route is one of our most scenic offerings. It covers the full stretch of Vembanad Lake and can be included in 2-night packages. Additional charges may apply.',
      },
      {
        q: 'Is there Wi-Fi or mobile connectivity on board?',
        a: 'Mobile connectivity (BSNL/Jio) is generally available, though it may be weak in some remote backwater stretches. Limited Wi-Fi is available on Luxury class boats. We encourage guests to disconnect and enjoy nature!',
      },
    ],
  },
  {
    category: 'Cancellation & Refunds',
    icon: '❌',
    faqs: [
      {
        q: 'What is the cancellation policy?',
        a: 'Free cancellation up to 48 hours before check-in — full advance refund. Cancellation 24–48 hours prior: 50% of advance refunded. Less than 24 hours or no-show: no refund. All refunds are processed within 5–7 business days.',
      },
      {
        q: 'What happens if there is bad weather or flooding?',
        a: 'Safety is our top priority. If the Kerala government or Coast Guard issues a warning that prevents safe cruising, we will reschedule your booking at no charge or issue a full refund.',
      },
      {
        q: 'Can I reschedule my booking?',
        a: 'Yes, rescheduling is free if requested more than 72 hours before check-in, subject to availability. Rescheduling within 72 hours of check-in may incur a ₹500 administrative fee.',
      },
    ],
  },
  {
    category: 'Safety & Facilities',
    icon: '🛡️',
    faqs: [
      {
        q: 'Is it safe to travel on a houseboat with children?',
        a: 'Absolutely. Our houseboats are very stable and family-friendly. Life jackets are available in all sizes including children\'s. Our crew is trained in first aid. We recommend supervising young children near open deck areas at all times.',
      },
      {
        q: 'Are the houseboats air-conditioned?',
        a: 'Yes, all our bedrooms have air conditioning. The main living area and open deck are naturally ventilated and provide a wonderful breeze off the water.',
      },
      {
        q: 'Do the houseboats have attached bathrooms?',
        a: 'Yes, all our houseboats have private attached bathrooms with Western-style toilets and hot/cold water showers. Luxury class boats feature premium fittings and spacious bathrooms.',
      },
      {
        q: 'What certifications do your boats carry?',
        a: 'All our houseboats are certified by the Kerala Tourism Department and DTPC Alappuzha. They are inspected annually for structural integrity, safety equipment, fire safety, and hygiene.',
      },
    ],
  },
]

export default function FAQ() {
  const [openItem, setOpenItem]           = useState(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const toggle = key => setOpenItem(prev => prev === key ? null : key)

  const displayCategories = activeCategory === 'All'
    ? faqCategories
    : faqCategories.filter(c => c.category === activeCategory)

  return (
    <div className="faq-page">

      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="page-hero-pattern" />
        <div className="container">
          {/* <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>FAQ</span>
          </nav> */}
          <span className="section-label">Help &amp; Information</span>
          <h1>Frequently Asked<br />Questions</h1>
          <p>Everything you need to know about booking, check-in, food, routes, and your Kerala houseboat experience.</p>
        </div>
      </section>

      {/* ── Category Filter ── */}
      <div className="filter-bar">
        <div className="container">
          <div className="filter-tabs">
            <button
              className={`filter-tab ${activeCategory === 'All' ? 'active' : ''}`}
              onClick={() => setActiveCategory('All')}
            >
              All Topics
            </button>
            {faqCategories.map(c => (
              <button
                key={c.category}
                className={`filter-tab ${activeCategory === c.category ? 'active' : ''}`}
                onClick={() => setActiveCategory(c.category)}
              >
                {c.icon} {c.category.split(' ')[0]}
              </button>
            ))}
          </div>
          <span className="results-count">
            {displayCategories.reduce((acc, c) => acc + c.faqs.length, 0)} answers
          </span>
        </div>
      </div>

      {/* ── FAQ Accordion ── */}
      <section className="section section--sand">
        <div className="container">
          <div className="faq-layout">

            <div className="faq-accordion-wrap">
              {displayCategories.map(cat => (
                <div key={cat.category} className="faq-category">
                  <div className="faq-cat-header">
                    <span className="faq-cat-icon">{cat.icon}</span>
                    <h3>{cat.category}</h3>
                  </div>
                  <div className="faq-list">
                    {cat.faqs.map((item, i) => {
                      const key    = `${cat.category}-${i}`
                      const isOpen = openItem === key
                      return (
                        <div key={key} className={`faq-item ${isOpen ? 'open' : ''}`}>
                          <button
                            className="faq-question"
                            onClick={() => toggle(key)}
                            aria-expanded={isOpen}
                          >
                            <span>{item.q}</span>
                            <div className={`faq-chevron ${isOpen ? 'open' : ''}`}>
                              <svg viewBox="0 0 12 8" fill="none">
                                <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                              </svg>
                            </div>
                          </button>
                          {isOpen && (
                            <div className="faq-answer">
                              <p>{item.a}</p>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="faq-sidebar">
              <div className="faq-contact-card">
                <h3>Still have questions?</h3>
                <p>Our team is available 6 AM – 9 PM every day. Happy to help you plan the perfect Kerala adventure.</p>
                <div className="faq-contact-options">
                  <a href="tel:+917736262841" className="faq-contact-btn phone-btn">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <div>
                      <strong>Call Us</strong>
                      <span>+91 7736 26 2841</span>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/917736262841"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="faq-contact-btn wa-btn"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <div>
                      <strong>WhatsApp</strong>
                      <span>Instant reply, 24/7</span>
                    </div>
                  </a>

                  <Link to="/contact" className="faq-contact-btn email-btn">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <div>
                      <strong>Send Enquiry</strong>
                      <span>We reply in 30 mins</span>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="faq-quick-links">
                <h4>Quick Links</h4>
                <ul>
                  <li><Link to="/packages">View All Packages &amp; Pricing →</Link></li>
                  <li><Link to="/houseboats">Browse Houseboats →</Link></li>
                  <li><Link to="/gallery">Photo Gallery →</Link></li>
                  <li><Link to="/about">About Our Company →</Link></li>
                </ul>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-band-inner">
            <div>
              <h2>Ready to Book Your Adventure?</h2>
              <p>Join thousands of happy guests who have experienced the magic of Kerala's backwaters.</p>
            </div>
            <div className="cta-band-actions">
              <Link to="/contact"  className="btn btn-primary">Book Now ↗</Link>
              <Link to="/packages" className="btn btn-outline">View Packages</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}