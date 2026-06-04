import { Link } from 'react-router-dom'
import './about.css'

const milestones = [
  { year: '2009', event: 'Kerala Houseboat Holidays founded by Nandhu Ghosh Kumar with 2 houseboats at Alleppey Finishing Point.' },
  { year: '2012', event: 'Expanded fleet to 8 boats. Received Kerala Tourism certification and DTPC approval.' },
  { year: '2015', event: 'Launched the Luxury fleet segment and Honeymoon Special packages. First international guests from UK & Germany.' },
  { year: '2018', event: 'Reached 10,000 happy guests milestone. Introduced eco-friendly solar-powered boats.' },
  { year: '2021', event: 'Expanded to 25+ boats. Launched Group & Corporate packages. Resumed operations post-pandemic with enhanced hygiene protocols.' },
  { year: '2024', event: 'Celebrated 50,000+ guests. Rated #1 Houseboat Operator in Alleppey on TripAdvisor.' },
]

// const team = [
//   { name: 'Capt. Rajan Nair', role: 'Founder & Managing Director', exp: '25 years on Kerala waters', initial: 'R' },
//   { name: 'Priya Menon',      role: 'Guest Experience Manager',    exp: '12 years hospitality',     initial: 'P' },
//   { name: 'Thomas Varghese',  role: 'Head Chef & Culinary Lead',   exp: '18 years Kerala cuisine',  initial: 'T' },
//   { name: 'Arun Pillai',      role: 'Fleet Operations Manager',    exp: '15 years boat operations', initial: 'A' },
// ]

const certifications = [
  { name: 'Kerala Tourism Department', icon: '🏛️', desc: 'Officially recognized houseboat operator' },
  { name: 'DTPC Alappuzha',           icon: '✅', desc: 'District Tourism Promotion Council approved' },
  { name: 'ISO 9001:2015',            icon: '📋', desc: 'Certified for quality management systems' },
  { name: 'Green Kerala Initiative',   icon: '🌿', desc: 'Eco-responsible tourism operator' },
  { name: 'TripAdvisor Excellence',    icon: '⭐', desc: 'Certificate of Excellence 2019–2024' },
  { name: 'India Safe Tourism',        icon: '🛡️', desc: 'Enhanced safety & hygiene certified' },
]

const values = [
  { icon: '🌊', title: 'Authenticity',  desc: 'Every experience is rooted in the genuine culture, cuisine, and spirit of Kerala.' },
  { icon: '🤝', title: 'Hospitality',   desc: 'We treat every guest as family. Your comfort, safety, and joy are our mission.' },
  { icon: '🌿', title: 'Sustainability', desc: 'We protect the backwaters that sustain us — solar power, biodegradable practices, community support.' },
  { icon: '💎', title: 'Excellence',    desc: 'From the food to the décor to the crew — we pursue the highest standard in everything we do.' },
]

export default function About() {
  return (
    <div className="about-page">

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="section-label" style={{color:'var(--gold-light)'}}>Our Story</span>
          <h1>About Us</h1>
          <p>15 years of crafting unforgettable backwater experiences for guests from across the world.</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section section--white">
        <div className="container">
          <div className="story-layout">
            <div className="story-text">
              <span className="section-label">Who We Are</span>
              <h2>Born on the Backwaters of Kerala</h2>
              <div className="gold-divider" />
              <p>Kerala Houseboat Holidays was born from a lifelong love of Alleppey's backwaters. Founded in 2009 by Nandhu Ghosh Kumar , our company began with a simple dream: to share the timeless magic of this UNESCO-recognized waterway with the world.</p>
              <p style={{marginTop:16}}>What started as two houseboats and a handful of guests has grown into one of Kerala's most trusted houseboat operators — with a fleet of 25+ certified vessels, a team of 60+ dedicated professionals, and over 50,000 guests from 45+ countries served with warmth and care.</p>
              <p style={{marginTop:16}}>We are not just a booking service. We are storytellers of the backwaters, guardians of Kerala's cuisine traditions, and ambassadors of responsible tourism.</p>
              <div className="story-stats">
                {[
                  { v: '50,000+', l: 'Guests Served' },
                  { v: '25+',     l: 'Boats in Fleet' },
                  { v: '45+',     l: 'Countries' },
                  { v: '4.9 ⭐',  l: 'Avg. Rating' },
                ].map(s => (
                  <div key={s.l} className="story-stat">
                    <strong>{s.v}</strong>
                    <span>{s.l}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="story-visual">
              <div className="story-img-main">
                <svg viewBox="0 0 360 280" fill="none">
                  <rect width="360" height="280" fill="rgba(42,138,130,0.06)"/>
                  <path d="M30 220 Q90 120 180 155 Q270 190 330 90" stroke="#2a8a82" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.4"/>
                  <path d="M50 220 L70 155 L180 120 L290 155 L310 220 Z" fill="#2a8a82" opacity="0.08"/>
                  <path d="M60 220 L80 158 L180 128 L280 158 L300 220" stroke="#2a8a82" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5"/>
                  <rect x="30" y="220" width="300" height="16" rx="8" fill="#2a8a82" opacity="0.12"/>
                  <path d="M162 128 L162 92 L198 92 L198 128" stroke="#2a8a82" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4"/>
                  <path d="M162 92 L180 72 L198 92" stroke="#2a8a82" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
                  <text x="180" y="258" textAnchor="middle" fill="#2a8a82" fontSize="13" opacity="0.5" fontFamily="Cormorant Garamond, serif" fontStyle="italic">Since 2009 — Alleppey, Kerala</text>
                </svg>
              </div>
              <div className="story-badge">
                <strong>15+</strong>
                <span>Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-head">
            <span className="section-label">What Drives Us</span>
            <h2>Our Values</h2>
            <div className="gold-divider gold-divider--center" />
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

      {/* Timeline */}
      <section className="section section--white">
        <div className="container">
          <div className="section-head">
            <span className="section-label">Our Journey</span>
            <h2>Milestones</h2>
            <div className="gold-divider gold-divider--center" />
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

      {/* Team */}
      {/* <section className="section section--cream">
        <div className="container">
          <div className="section-head">
            <span className="section-label">The People Behind the Experience</span>
            <h2>Our Team</h2>
            <div className="gold-divider gold-divider--center" />
          </div>
          <div className="grid-4 team-grid">
            {team.map(t => (
              <div key={t.name} className="team-card">
                <div className="team-avatar">{t.initial}</div>
                <h4>{t.name}</h4>
                <span className="team-role">{t.role}</span>
                <span className="team-exp">{t.exp}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Certifications */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-head" style={{color:'var(--cream)'}}>
            <span className="section-label">Trust & Safety</span>
            <h2 style={{color:'var(--gold-light)'}}>Certifications & Awards</h2>
            <div className="gold-divider gold-divider--center" />
            <p style={{color:'rgba(250,246,238,0.65)'}}>We are proud to be recognised by leading tourism and safety bodies.</p>
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

      {/* CTA */}
      <section className="section section--cream" style={{textAlign:'center'}}>
        <div className="container" style={{maxWidth:640}}>
          <span className="section-label">Begin Your Journey</span>
          <h2>Ready to Experience the Backwaters?</h2>
          <div className="gold-divider gold-divider--center" />
          <p style={{margin:'0 auto 32px', color:'var(--text-muted)'}}>
            Join the 50,000+ guests who have trusted Kerala Houseboat Holidays for their dream backwater experience.
          </p>
          <div style={{display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap'}}>
            <Link to="/packages" className="btn btn-primary">View Packages</Link>
            <Link to="/contact"  className="btn btn-outline-dark">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  )
}