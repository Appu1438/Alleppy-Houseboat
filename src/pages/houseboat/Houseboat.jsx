import { useState } from 'react'
import { Link } from 'react-router-dom'
import './houseboat.css'
import { boats } from '../../themes/constants/boats'


const types = ['All', 'Deluxe', 'Premium', 'Luxury', 'Honeymoon', 'Family']

const typeColors = {
    Luxury: '#c9973a', Honeymoon: '#d97b8a', Family: '#2a8a82', Deluxe: '#5a7a6a', Premium: '#7a6aaa',
}

export default function Houseboats() {
    const [active, setActive] = useState('All')

    const filtered = active === 'All' ? boats : boats.filter(b => b.type === active)

    return (
        <div className="houseboats-page">
            {/* Page Hero */}
            <section className="page-hero">
                <div className="page-hero-overlay" />
                <div className="container">
                    <span className="section-label" style={{ color: 'var(--gold-light)' }}>Our Fleet</span>
                    <h1>Kerala Houseboats</h1>
                    <p>Choose from our curated fleet of certified, comfortable houseboats — each offering a unique way to experience Alleppey's backwaters.</p>
                </div>
            </section>

            {/* Filter Tabs */}
            <section className="filter-bar">
                <div className="container">
                    <div className="filter-tabs">
                        {types.map(t => (
                            <button
                                key={t}
                                className={`filter-tab ${active === t ? 'active' : ''}`}
                                onClick={() => setActive(t)}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                    <p className="results-count">{filtered.length} houseboats available</p>
                </div>
            </section>

            {/* Boats Grid */}
            <section className="section section--cream">
                <div className="container">
                    <div className="boats-grid">
                        {filtered.map(boat => (
                            <div key={boat.id} className="boat-listing-card">
                                <div className="blc-image" style={{ '--accent': typeColors[boat.type] || '#2a8a82' }}>
                                    <div className="blc-placeholder">
                                        <svg viewBox="0 0 160 110" fill="none">
                                            <path d="M15 80 Q40 45 80 60 Q120 75 145 35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.4" />
                                            <path d="M25 80 L32 55 L80 42 L128 55 L135 80 Z" fill="currentColor" opacity="0.12" />
                                            <path d="M30 80 L40 56 L80 46 L120 56 L130 80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5" />
                                            <rect x="15" y="80" width="130" height="10" rx="5" fill="currentColor" opacity="0.18" />
                                            <path d="M70 46 L70 30 L90 30 L90 46" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.45" />
                                            <path d="M70 30 L80 20 L90 30" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.45" />
                                        </svg>
                                    </div>
                                    {boat.tag && <span className="blc-tag">{boat.tag}</span>}
                                    <span className="blc-type" style={{ background: typeColors[boat.type] || 'var(--teal-mid)' }}>{boat.type}</span>
                                </div>
                                <div className="blc-body">
                                    <h3>{boat.name}</h3>
                                    <div className="blc-amenities">
                                        <span>🛏 {boat.bedrooms} Bedroom{boat.bedrooms > 1 ? 's' : ''}</span>
                                        {boat.ac && <span>❄️ AC</span>}
                                        <span>🍽 Meals Included</span>
                                        <span>🌊 Backwater Route</span>
                                        <span>👨‍✈️ Crew Included</span>
                                    </div>
                                    <div className="blc-footer">
                                        <div>
                                            <strong className="blc-price">{boat.price}</strong>
                                            <span className="blc-unit"> / night</span>
                                        </div>
                                        <div className="blc-actions">
                                            <Link to={`/houseboats/${boat.id}`} className="btn btn-outline-dark">Details</Link>
                                            <Link to="/contact" className="btn btn-primary">Book</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section section--dark" style={{ textAlign: 'center' }}>
                <div className="container">
                    <h2>Can't Decide? Let Us Help!</h2>
                    <div className="gold-divider gold-divider--center" />
                    <p style={{ margin: '0 auto 32px', color: 'rgba(250,246,238,0.7)' }}>
                        Call or WhatsApp us and our team will recommend the perfect houseboat based on your group size, budget, and preferences.
                    </p>
                    <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="tel:+919876543210" className="btn btn-primary">📞 Call Now</a>
                        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-outline">💬 WhatsApp</a>
                    </div>
                </div>
            </section>
        </div>
    )
}