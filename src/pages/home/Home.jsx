import { Link } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import './home.css'
import { featuredBoats } from '../../themes/constants/boats/featuredBoats'

/* ── Hero carousel slides ── */
const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=1600&q=80',
    location: 'Alleppey Backwaters',
    titleLine1: 'Drift Through',
    titleLine2: 'Kerala\'s',
    titleLine3: 'Backwaters',
  },
  {
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=1600&q=80',
    location: 'Kumarakom, Kerala',
    titleLine1: 'Wake Up To',
    titleLine2: 'Paradise',
    titleLine3: 'on Water',
  },
  {
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=1600&q=80',
    location: 'Vembanad Lake',
    titleLine1: 'Sail Into',
    titleLine2: 'God\'s Own',
    titleLine3: 'Country',
  },
  {
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=1600&q=80',
    location: 'Kuttanad, Kerala',
    titleLine1: 'Adventure',
    titleLine2: 'Awaits on',
    titleLine3: 'Every Horizon',
  },
]

const whyUs = [
  { icon: '🏆', title: '15+ Years Experience', desc: 'Trusted by over 50,000 guests since 2009. Kerala Tourism certified operators.' },
  { icon: '🌿', title: 'Eco-Friendly Cruises', desc: 'Solar-powered boats, biodegradable waste systems, and responsible backwater tourism.' },
  { icon: '👨‍🍳', title: 'Authentic Kerala Cuisine', desc: 'Onboard chef prepares freshly caught fish, traditional Kerala meals, and custom menus.' },
  { icon: '🛡️', title: 'Safety First', desc: 'DTPC approved, life jackets on all boats, trained crew, and 24/7 support helpline.' },
  { icon: '📱', title: 'Instant Confirmation', desc: 'Book in minutes via WhatsApp, phone, or our website. No hidden charges.' },
  { icon: '💰', title: 'Best Price Guarantee', desc: 'Competitive transparent pricing. We match any verified lower quote.' },
]

const testimonials = [
  {
    name: 'Priya & Arjun Nair',
    from: 'Bangalore',
    rating: 5,
    text: 'Our honeymoon on the Blossom Retreat was absolutely magical. The sunsets over the backwaters, the food, the crew — everything was perfect. We will cherish this forever.',
    type: 'Honeymoon Package',
  },
  {
    name: 'Rohan Mehta',
    from: 'Mumbai',
    rating: 5,
    text: 'Booked the Royal Lotus for a family trip. The kids loved every minute. The boat was spotlessly clean, crew was warm and the food was incredible. 10/10 recommend!',
    type: 'Luxury Package',
  },
  {
    name: 'Sarah & James Collins',
    from: 'London, UK',
    rating: 5,
    text: 'We had heard about Kerala\'s backwaters for years. This exceeded every expectation. A truly once-in-a-lifetime experience. The team made everything effortless.',
    type: 'Premium Package',
  },
]

const stats = [
  { value: '50K', suffix: '+', label: 'Happy Guests' },
  { value: '15', suffix: '+', label: 'Years Experience' },
  { value: '25', suffix: '+', label: 'Premium Boats' },
  { value: '4.9', suffix: '★', label: 'Average Rating' },
]

const introFeatures = [
  { icon: '🌊', title: 'Serene Backwater Routes', desc: 'Navigate ancient canals through paddy fields and coconut groves.' },
  { icon: '🌅', title: 'Sunset & Sunrise Cruises', desc: 'Experience Kerala\'s legendary golden light from the water.' },
  { icon: '🎣', title: 'Traditional Fishing Experiences', desc: 'Watch Chinese fishing nets and cast your own line at dawn.' },
]

/* ── Scroll-reveal hook ── */
function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/* ── Component ── */
export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  useScrollReveal()

  const goToSlide = useCallback((index) => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveSlide(index)
    setTimeout(() => setIsAnimating(false), 1200)
  }, [isAnimating])

  const nextSlide = useCallback(() => {
    goToSlide((activeSlide + 1) % heroSlides.length)
  }, [activeSlide, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide((activeSlide - 1 + heroSlides.length) % heroSlides.length)
  }, [activeSlide, goToSlide])

  /* Auto-advance every 6s */
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const slide = heroSlides[activeSlide]

  return (
    <div className="home-page">

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="hero">

        {/* Carousel images */}
        <div className="hero-carousel">
          {heroSlides.map((s, i) => (
            <div key={i} className={`hero-slide${i === activeSlide ? ' active' : ''}`}>
              <img src={s.image} alt={s.location} loading={i === 0 ? 'eager' : 'lazy'} />
            </div>
          ))}
        </div>

        {/* Dot indicators — right-center */}
        <div className="hero-dots">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              className={`hero-dot${i === activeSlide ? ' active' : ''}`}
              onClick={() => goToSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrow controls — bottom-right */}
        <div className="hero-arrows">
          <button className="hero-arrow" onClick={prevSlide} aria-label="Previous">←</button>
          <button className="hero-arrow" onClick={nextSlide} aria-label="Next">→</button>
        </div>

        {/* Slide counter — bottom-left */}
        <div className="hero-counter">
          <em>{String(activeSlide + 1).padStart(2, '0')}</em>
          {' / '}
          {String(heroSlides.length).padStart(2, '0')}
        </div>

        {/* Location label — bottom-center */}
        <div className="hero-caption">
          <span className="slide-location">{slide.location}</span>
        </div>

        {/* Main copy */}
        <div className="hero-content">
          <div className="container">
            <div className="hero-inner">

              {/* <div className="hero-kicker fade-up">
                <span className="hero-kicker-dot" />
                Alleppey, Kerala — God's Own Country
              </div> */}

              <h1 className="hero-title fade-up fade-up-delay-1">
                {slide.titleLine1}<br />
                <em>{slide.titleLine2}</em>
                <span> {slide.titleLine3}</span>
              </h1>

              <p className="hero-sub fade-up fade-up-delay-2">
                Luxury, Deluxe &amp; Honeymoon houseboats gliding through the serene
                canals of Alleppey. Unforgettable adventures crafted for you.
              </p>

              <div className="hero-actions fade-up fade-up-delay-3">
                <Link to="/packages" className="btn btn-primary">Explore Packages ↗</Link>
                <Link to="/houseboats" className="btn btn-outline">View All Boats</Link>
              </div>

              <div className="hero-trust fade-up fade-up-delay-4">
                <div className="hero-trust-pill"><span className="pill-icon">⭐</span>4.9 / 5 Rating</div>
                <div className="hero-trust-pill"><span className="pill-icon">🏅</span>Kerala Tourism Certified</div>
                <div className="hero-trust-pill"><span className="pill-icon">🚀</span>Instant Confirmation</div>
              </div>

            </div>
          </div>
        </div>

      </section>

      {/* ══════════════════════════════
          STATS BAR
      ══════════════════════════════ */}
      <section className="stats-bar">
        <div className="container">
          {stats.map((s, i) => (
            <div key={s.label} className={`stat-item reveal reveal-d${i + 1}`}>
              <strong>{s.value}<em>{s.suffix}</em></strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════
          INTRO STRIP
      ══════════════════════════════ */}
      <section className="intro-strip">
        <div className="container">

          {/* Visual stack */}
          <div className="intro-visual reveal-left">
            <div className="intro-image-stack">
              <img
                className="intro-img-main"
                src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&q=80"
                alt="Kerala houseboat on backwaters"
              />
              <img
                className="intro-img-accent"
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80"
                alt="Sunset on backwaters"
              />
              <div className="intro-badge">
                <strong>15+</strong>
                <span>Years of Adventures</span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="intro-text reveal-right">
            <span className="section-label">Why Kerala Backwaters</span>
            <h2>A Journey Unlike<br />Any Other</h2>
            <div className="coral-divider" />
            <p>
              Kerala's backwaters are a world apart — a labyrinth of canals, lagoons,
              and lakes running parallel to the Arabian Sea. Glide through this
              UNESCO-recognised ecosystem aboard a traditional kettuvallam houseboat,
              where every bend reveals a new wonder.
            </p>
            <div className="intro-features">
              {introFeatures.map((f, i) => (
                <div key={f.title} className={`intro-feature reveal reveal-d${i + 1}`}>
                  <div className="intro-feature-icon">{f.icon}</div>
                  <div className="intro-feature-text">
                    <strong>{f.title}</strong>
                    <span>{f.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn btn-ocean">Our Story ↗</Link>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          FEATURED HOUSEBOATS
      ══════════════════════════════ */}
      <section className="section section--white featured">
        <div className="container">

          <div className="section-head reveal">
            <span className="section-label">Our Fleet</span>
            <h2>Choose Your Adventure</h2>
            <div className="coral-divider coral-divider--center" />
            <p>From intimate honeymoon retreats to spacious family vessels — find the perfect houseboat for your Kerala journey.</p>
          </div>

          <div className="featured-grid">
            {featuredBoats.map((boat, i) => (
              <div
                key={boat.id}
                className={`boat-card reveal reveal-d${(i % 4) + 1}`}
              >
                <div className="boat-card-image" style={{ '--accent': boat.color }}>
                  <img src={boat.image} alt={boat.name} />
                  {boat.tag && <span className="boat-tag">{boat.tag}</span>}
                  <span className="boat-type-badge" style={{ background: boat.color }}>{boat.type}</span>
                </div>
                <div className="boat-card-body">
                  <div className="boat-meta">
                    <span>🛏 {boat.bedrooms} Bedroom{boat.bedrooms > 1 ? 's' : ''}</span>
                    <span>🌊 Backwaters</span>
                    <span>🍽 Meals Inc.</span>
                  </div>
                  <h3>{boat.name}</h3>
                  <p>{boat.desc}</p>
                  <div className="boat-footer">
                    <div className="boat-price">
                      <strong>{boat.price}</strong>
                      <span>{boat.unit}</span>
                    </div>
                    <Link to={`/houseboats/${boat.id}`} className="btn btn-outline-dark">View Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-cta reveal">
            <Link to="/houseboats" className="btn btn-ocean">View All Houseboats →</Link>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          EXPERIENCE PANELS
      ══════════════════════════════ */}
      <section className="experience-band">
        <div className="experience-panels">

          <div className="exp-panel">
            <img
              src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=900&q=80"
              alt="Overnight houseboat experience"
            />
            <div className="exp-panel-overlay" />
            <div className="exp-panel-content reveal">
              <span className="exp-panel-tag">Most Popular</span>
              <h3>Overnight<br />Escape</h3>
              <p>Watch the sun set over the paddy fields, sleep to the sound of frogs and crickets, then wake to a Kerala breakfast served on deck.</p>
              <Link to="/packages" className="exp-panel-arrow">Explore Packages →</Link>
            </div>
          </div>

          <div className="exp-panel">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80"
              alt="Day cruise experience"
            />
            <div className="exp-panel-overlay" />
            <div className="exp-panel-content reveal reveal-d2">
              <span className="exp-panel-tag">Quick Getaway</span>
              <h3>Day Cruise<br />Adventure</h3>
              <p>A full day on the backwaters — bird-watching, village visits, and a traditional lunch aboard your private floating home.</p>
              <Link to="/packages" className="exp-panel-arrow">Book a Day Cruise →</Link>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════ */}
      <section className="section section--sand why-us">
        <div className="container">

          <div className="section-head reveal">
            <span className="section-label">Why Choose Us</span>
            <h2>The Difference You'll Feel</h2>
            <div className="coral-divider coral-divider--center" />
            <p>We go beyond bookings — we craft experiences that stay with you for a lifetime.</p>
          </div>

          <div className="grid-3 why-grid">
            {whyUs.map((item, i) => (
              <div key={item.title} className={`why-card reveal reveal-d${(i % 3) + 1}`}>
                <span className="why-icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          TESTIMONIALS
      ══════════════════════════════ */}
      <section className="section section--white testimonials">
        <div className="container">

          <div className="section-head reveal">
            <span className="section-label">Guest Stories</span>
            <h2>Real Journeys, Real Smiles</h2>
            <div className="coral-divider coral-divider--center" />
          </div>

          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`testimonial-card reveal reveal-d${i + 1}`}>
                <div className="t-stars">
                  {'★'.repeat(t.rating).split('').map((s, j) => <span key={j}>{s}</span>)}
                </div>
                <p className="t-text">"{t.text}"</p>
                <div className="t-footer">
                  <div className="t-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.from} · {t.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-cta reveal">
            <a
              href="https://share.google/vkqZjiF4it1NxP7FG"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark"
            >
              Read All Reviews on Google ↗
            </a>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          CTA BAND
      ══════════════════════════════ */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-band-inner">

            <div className="reveal-left">
              <h2>Ready to Set Sail?</h2>
              <p>Book your dream Kerala houseboat today. Instant WhatsApp confirmation available.</p>
            </div>

            <div className="cta-band-actions reveal-right">
              <Link to="/contact" className="btn btn-primary">Book Now ↗</Link>
              <a
                href="https://wa.me/917736262841"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}