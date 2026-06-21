import { useState } from 'react'
// import { Link } from 'react-router-dom'
import './contact.css'
import ContactSEO from './ContactSeo'

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    ),
    label: 'Phone',
    value: '+91 7736 26 2841',
    link: 'tel:+917736262841',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: 'WhatsApp',
    value: '+91 7736 26 2841',
    link: 'https://wa.me/917736262841?text=Hi%2C%20I%27d%20like%20to%20book%20a%20houseboat',
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    ),
    label: 'Email',
    value: 'keralatourholidays@gmail.com',
    link: 'mailto:keralatourholidays@gmail.com',
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>
    ),
    label: 'Address',
    value: 'Finishing Point Road, Alleppey (Alappuzha), Kerala – 688001',
    link: 'https://maps.app.goo.gl/iDKgq9rxWJ14RfYV8',
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
      </svg>
    ),
    label: 'Booking Hours',
    value: 'Monday – Sunday: 6:00 AM – 9:00 PM',
    link: null,
  },
]

const initialForm = {
  name: '', phone: '', email: '', date: '',
  package: '', guests: '', message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Booking enquiry:', form)
    setSent(true)
    setForm(initialForm)
    setTimeout(() => setSent(false), 6000)
  }

  return (
    <div className="contact-page">
      <ContactSEO />

      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="page-hero-pattern" />
        <div className="container">
          {/* <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Contact</span>
          </nav> */}
          <span className="section-label">Get In Touch</span>
          <h1>Contact Us</h1>
          <p>Ready to book or have a question? Reach us by phone, WhatsApp, or the form below. We respond within 30 minutes.</p>
        </div>
      </section>

      {/* ── Contact Body ── */}
      <section className="section section--sand">
        <div className="container">
          <div className="contact-layout">

            {/* Form */}
            <div className="contact-form-wrap">
              <span className="section-label">Booking Enquiry</span>
              <h2>Plan Your Adventure</h2>
              <div className="coral-divider" />

              {sent && (
                <div className="success-msg">
                  ✅ Thank you! We've received your enquiry and will reach out within 30 minutes.
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name" name="name" type="text"
                      placeholder="Your full name"
                      value={form.name} onChange={handleChange} required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone / WhatsApp *</label>
                    <input
                      id="phone" name="phone" type="tel"
                      placeholder="+91 xxxxx xxxxx"
                      value={form.phone} onChange={handleChange} required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="your@email.com"
                    value={form.email} onChange={handleChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">Preferred Date *</label>
                    <input
                      id="date" name="date" type="date"
                      value={form.date} onChange={handleChange} required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="guests">Number of Guests *</label>
                    <select
                      id="guests" name="guests"
                      value={form.guests} onChange={handleChange} required
                    >
                      <option value="">Select</option>
                      <option>1–2 Guests</option>
                      <option>3–4 Guests</option>
                      <option>5–6 Guests</option>
                      <option>7–10 Guests</option>
                      <option>10+ Guests</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="package">Package Interested In</label>
                  <select
                    id="package" name="package"
                    value={form.package} onChange={handleChange}
                  >
                    <option value="">Select Package</option>
                    <option>Day Cruise</option>
                    <option>Overnight Stay</option>
                    <option>Honeymoon Package</option>
                    <option>Group / Family Package</option>
                    <option>Not Sure – Need Recommendation</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Special Requests / Message</label>
                  <textarea
                    id="message" name="message" rows={4}
                    placeholder="Any special requirements, anniversary, honeymoon decoration, dietary needs..."
                    value={form.message} onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-primary contact-submit">
                  Send Enquiry
                  <svg viewBox="0 0 20 20" fill="currentColor" style={{ width: 17, height: 17 }}>
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Info Panel */}
            <aside className="contact-info-panel">
              <div className="contact-info-card">
                <h3>Contact Information</h3>
                <div className="coral-divider" />
                <div className="contact-info-list">
                  {contactInfo.map(c => (
                    <div key={c.label} className="cinfo-item">
                      <div className="cinfo-icon">{c.icon}</div>
                      <div>
                        <span className="cinfo-label">{c.label}</span>
                        {c.link
                          ? (
                            <a
                              href={c.link}
                              className="cinfo-value"
                              target={c.link.startsWith('http') ? '_blank' : undefined}
                              rel="noopener noreferrer"
                            >
                              {c.value}
                            </a>
                          )
                          : <span className="cinfo-value">{c.value}</span>
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp Quick CTA */}
              <a
                href="https://wa.me/917736262841?text=Hi%2C%20I%27d%20like%20to%20book%20a%20houseboat%20in%20Alleppey"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-banner"
              >
                <div className="wa-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <strong>Chat on WhatsApp</strong>
                  <span>Get instant reply – Available 24/7</span>
                </div>
                <svg
                  viewBox="0 0 20 20" fill="currentColor"
                  style={{ width: 18, height: 18, marginLeft: 'auto', flexShrink: 0 }}
                >
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>

              {/* Map */}
              <div className="map-placeholder">
                <div className="map-inner">
                  <svg viewBox="0 0 320 200" fill="none">
                    <rect width="320" height="200" fill="rgba(0,97,143,0.05)" />
                    <path d="M20 150 Q80 80 160 110 Q240 140 300 60" stroke="#0096c7" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.3" />
                    <path d="M20 155 Q80 95 160 118 Q240 148 300 72" stroke="#48cae4" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.2" />
                    <circle cx="160" cy="110" r="12" fill="rgba(244,97,76,0.9)" />
                    <circle cx="160" cy="110" r="5" fill="white" />
                    <path d="M160 98 L160 78" stroke="#f4614c" strokeWidth="1.5" opacity="0.7" />
                    <rect x="116" y="56" width="88" height="24" rx="4" fill="rgba(0,29,48,0.8)" />
                    <text x="160" y="72" textAnchor="middle" fill="var(--ocean-light)" fontSize="9" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="600">Alleppey Finishing Point</text>
                    <circle cx="80" cy="130" r="3" fill="#0096c7" opacity="0.4" />
                    <circle cx="240" cy="90" r="3" fill="#0096c7" opacity="0.4" />
                    <circle cx="280" cy="140" r="3" fill="#0096c7" opacity="0.3" />
                  </svg>
                </div>
                <a
                  href="https://maps.app.goo.gl/iDKgq9rxWJ14RfYV8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  Open in Google Maps →
                </a>
              </div>
            </aside>

          </div>
        </div>
      </section>

    </div>
  )
}