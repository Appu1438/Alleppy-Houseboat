import { Link } from 'react-router-dom'
import './about.css'

const milestones = [
  { year: '2009', event: 'Kerala Houseboat Holidays founded by Nandhu Ghosh Kumar with 2 houseboats at Alleppey Finishing Point.' },
  { year: '2012', event: 'Expanded fleet to 8 boats. Received Kerala Tourism certification and DTPC approval.' },
  { year: '2015', event: 'Launched the Luxury fleet segment and Honeymoon Special packages. First international guests from UK & Germany.' },
  { year: '2018', event: 'Reached 10,000 happy guests milestone. Introduced eco-friendly solar-powered boats.' },
  { year: '2021', event: 'Expanded to 25+ boats. Launched Group & Corporate packages. Resumed post-pandemic with enhanced hygiene protocols.' },
  { year: '2024', event: 'Celebrated 50,000+ guests. Rated #1 Houseboat Operator in Alleppey on TripAdvisor.' },
]

const certifications = [
  { name: 'Kerala Tourism Department', icon: '🏛️', desc: 'Officially recognized houseboat operator' },
  { name: 'DTPC Alappuzha',           icon: '✅', desc: 'District Tourism Promotion Council approved' },
  { name: 'ISO 9001:2015',            icon: '📋', desc: 'Certified for quality management systems' },
  { name: 'Green Kerala Initiative',   icon: '🌿', desc: 'Eco-responsible tourism operator' },
  { name: 'TripAdvisor Excellence',    icon: '⭐', desc: 'Certificate of Excellence 2019–2024' },
  { name: 'India Safe Tourism',        icon: '🛡️', desc: 'Enhanced safety & hygiene certified' },
]

const values = [
  { icon: '🌊', title: 'Authenticity',   desc: 'Every experience is rooted in the genuine culture, cuisine, and spirit of Kerala.' },
  { icon: '🤝', title: 'Hospitality',    desc: 'We treat every guest as family. Your comfort, safety, and joy are our mission.' },
  { icon: '🌿', title: 'Sustainability', desc: 'We protect the backwaters that sustain us — solar power, biodegradable practices, community support.' },
  { icon: '💎', title: 'Excellence',     desc: 'From the food to the décor to the crew — we pursue the highest standard in everything we do.' },
]

export default function About() {
  return (
    <div className="about-page">

      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="page-hero-pattern" />
        <div className="container">
          {/* <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>About Us</span>
          </nav> */}
          <span className="section-label">Our Story</span>
          <h1>About Us</h1>
          <p>15 years of crafting unforgettable backwater adventures for guests from across the world.</p>
        </div>
      </section>

      {/* ── Story Section ── */}
      <section className="section section--white">
        <div className="container">
          <div className="story-layout">

            <div className="story-text">
              <span className="section-label">Who We Are</span>
              <h2>Born on the Backwaters of Kerala</h2>
              <div className="coral-divider" />
              <p>Kerala Houseboat Holidays was born from a lifelong love of Alleppey's backwaters. Founded in 2009 by Nandhu Ghosh Kumar, our company began with a simple dream: to share the timeless magic of this UNESCO-recognised waterway with the world.</p>
              <p style={{ marginTop: 16 }}>What started as two houseboats and a handful of guests has grown into one of Kerala's most trusted houseboat operators — with a fleet of 25+ certified vessels, a team of 60+ dedicated professionals, and over 50,000 guests from 45+ countries served with warmth and care.</p>
              <p style={{ marginTop: 16 }}>We are not just a booking service. We are storytellers of the backwaters, guardians of Kerala's culinary traditions, and ambassadors of responsible adventure tourism.</p>

              <div className="story-stats">
                {[
                  { v: '50K+',  l: 'Guests Served' },
                  { v: '25+',   l: 'Boats in Fleet' },
                  { v: '45+',   l: 'Countries' },
                  { v: '4.9★',  l: 'Avg. Rating' },
                ].map(s => (
                  <div key={s.l} className="story-stat">
                    <strong>{s.v}</strong>
                    <span>{s.l}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="story-visual">
              <div className="story-image-stack">
                <img
                  className="story-img-main"
                  src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&q=80"
                  alt="Kerala houseboat on backwaters"
                />
                <img
                  className="story-img-accent"
                  src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=600&q=80"
                  alt="Backwater village life"
                />
                <div className="story-badge">
                  <strong>15+</strong>
                  <span>Years of<br />Adventures</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section section--sand">
        <div className="container">
          <div className="section-head">
            <span className="section-label">What Drives Us</span>
            <h2>Our Values</h2>
            <div className="coral-divider coral-divider--center" />
          </div>
          <div className="grid-4 values-grid">
            {values.map(v => (
              <div key={v.title} className="value-card">
                <div className="value-icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="section section--white">
        <div className="container">
          <div className="section-head">
            <span className="section-label">Our Journey</span>
            <h2>Milestones</h2>
            <div className="coral-divider coral-divider--center" />
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={m.year} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <div className="tl-year">{m.year}</div>
                  <p>{m.event}</p>
                </div>
                <div className="timeline-dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="section section--ocean">
        <div className="container">
          <div className="section-head">
            <span className="section-label" style={{ color: 'var(--coral-light)' }}>Trust &amp; Safety</span>
            <h2>Certifications &amp; Awards</h2>
            <div className="coral-divider coral-divider--center" />
            <p style={{ color: 'rgba(255,255,255,0.6)', margin: '0 auto' }}>
              We are proud to be recognised by leading tourism and safety bodies.
            </p>
          </div>
          <div className="grid-3 cert-grid">
            {certifications.map(c => (
              <div key={c.name} className="cert-card">
                <span className="cert-icon">{c.icon}</span>
                <div>
                  <strong>{c.name}</strong>
                  <p>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section--white" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 620 }}>
          <span className="section-label">Begin Your Journey</span>
          <h2>Ready to Experience the Backwaters?</h2>
          <div className="coral-divider coral-divider--center" />
          <p style={{ margin: '0 auto 36px', color: 'var(--text-muted)' }}>
            Join the 50,000+ adventurers who have trusted Kerala Houseboat Holidays for their dream backwater experience.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/packages" className="btn btn-primary">View Packages ↗</Link>
            <Link to="/contact"  className="btn btn-outline-dark">Get in Touch</Link>
          </div>
        </div>
      </section>

    </div>
  )
}