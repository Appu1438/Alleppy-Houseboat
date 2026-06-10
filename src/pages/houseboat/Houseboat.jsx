import { useState } from 'react'
import { Link } from 'react-router-dom'
import './houseboat.css'
import { boats } from '../../themes/constants/boats/boats'


const types = ['All', 'Deluxe', 'Premium', 'Luxury']

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
                <div className="page-hero-pattern" />
                <div className="page-hero-overlay" />
                <div className="container">
                    <span className="section-label" >Our Fleet</span>
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
                                <div
                                    className="blc-image"
                                    style={{
                                        "--accent":
                                            typeColors[boat.type] || "#2a8a82",
                                    }}
                                >
                                    <img src={boat.image} alt={boat.name} />

                                    {boat.tag && (
                                        <span className="blc-tag">
                                            {boat.tag}
                                        </span>
                                    )}

                                    <span
                                        className="blc-type"
                                        style={{
                                            background:
                                                typeColors[boat.type] ||
                                                "var(--teal-mid)",
                                        }}
                                    >
                                        {boat.type}
                                    </span>
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
            <section className="section section--ocean" style={{ textAlign: 'center' }}>
                <div className="container">
                    <h2>Can't Decide? Let Us Help!</h2>
                    <div className="gold-divider gold-divider--center" />
                    <p style={{ margin: '10px auto 35px', color: `var(--white)` }}>
                        Call or WhatsApp us and our team will recommend the perfect houseboat based on your group size, budget, and preferences.
                    </p>
                    <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="tel:+917736262841" className="btn btn-primary">📞 Call Now</a>
                        <a href="https://wa.me/917736262841" target="_blank" rel="noopener noreferrer" className="btn btn-outline">💬 WhatsApp</a>
                    </div>
                </div>
            </section>
        </div>
    )
}