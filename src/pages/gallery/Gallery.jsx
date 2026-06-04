import  { useState } from 'react'
import './gallery.css'

const categories = ['All', 'Boats', 'Backwaters', 'Food', 'Sunsets', 'Activities']

const galleryItems = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  category: categories[1 + (i % (categories.length - 1))],
  aspect: i % 5 === 0 ? 'wide' : i % 7 === 0 ? 'tall' : 'square',
  color: ['#2a8a82','#c9973a','#1a5c57','#d97b8a','#0d3d3a','#5a7a6a'][i % 6],
  label: ['Vembanad Lake Cruise','Sunset on the Backwaters','Traditional Kerala Sadhya','Houseboat Upper Deck','Paddy Fields Route','Fishermen at Dawn','Evening Reflections','Backwater Village','Kerala Seafood Feast','Alleppey Canal','Morning Mist Cruise','Lotus Flowers','Coir Boat Crafting','Chinese Fishing Nets','Moonlit Waters','Royal Lotus Deck','Honeymoon Setup','Bird Watching','Village Canoe Ride','Backwater Sunset'][i],
}))

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? galleryItems : galleryItems.filter(g => g.category === active)

  return (
    <div className="gallery-page">
      <section className="page-hero">
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="section-label" style={{color:'var(--gold-light)'}}>Visual Journey</span>
          <h1>Photo Gallery</h1>
          <p>A visual journey through Kerala's magical backwaters, our houseboats, and the experiences that await you.</p>
        </div>
      </section>

      {/* Filter */}
      <div className="filter-bar">
        <div className="container">
          <div className="filter-tabs">
            {categories.map(c => (
              <button key={c} className={`filter-tab ${active === c ? 'active' : ''}`} onClick={() => setActive(c)}>{c}</button>
            ))}
          </div>
          <p className="results-count">{filtered.length} photos</p>
        </div>
      </div>

      {/* Masonry Grid */}
      <section className="section section--cream gallery-section">
        <div className="container">
          <div className="masonry-grid">
            {filtered.map(item => (
              <div
                key={item.id}
                className={`gallery-item ${item.aspect}`}
                style={{'--item-color': item.color}}
                onClick={() => setLightbox(item)}
              >
                <div className="gallery-img-placeholder">
                  <svg viewBox="0 0 200 160" fill="none">
                    <rect width="200" height="160" fill="currentColor" opacity="0.08"/>
                    <path d="M30 120 Q60 70 100 90 Q140 110 170 55" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.4"/>
                    <path d="M40 120 L50 90 L100 75 L150 90 L160 120 Z" fill="currentColor" opacity="0.1"/>
                    <path d="M45 120 L55 92 L100 80 L145 92 L155 120" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.4"/>
                    <rect x="30" y="120" width="140" height="10" rx="5" fill="currentColor" opacity="0.12"/>
                  </svg>
                </div>
                <div className="gallery-item-overlay">
                  <span>{item.label}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="zoom-icon"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
                </div>
                <span className="gallery-cat-badge">{item.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section section--white">
        <div className="container">
          <div className="section-head">
            <span className="section-label">Watch & Explore</span>
            <h2>Video Gallery</h2>
            <div className="gold-divider gold-divider--center" />
            <p>Watch our houseboat experience videos and virtual tours of Kerala's backwaters.</p>
          </div>
          <div className="video-grid">
            {[1,2,3].map(n => (
              <div key={n} className="video-placeholder">
                <div className="video-play-btn">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </div>
                <span>Video Tour {n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lb-close" onClick={() => setLightbox(null)}>✕</button>
          <div className="lb-content" onClick={e => e.stopPropagation()}>
            <div className="lb-img" style={{background:`linear-gradient(135deg, color-mix(in srgb, ${lightbox.color} 20%, #f0e8d4), color-mix(in srgb, ${lightbox.color} 10%, #faf6ee))`}}>
              <svg viewBox="0 0 400 300" fill="none" style={{width:'100%',height:'100%'}}>
                <path d="M40 240 Q100 130 200 170 Q300 210 360 100" stroke={lightbox.color} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5"/>
                <path d="M60 240 L80 170 L200 130 L320 170 L340 240 Z" fill={lightbox.color} opacity="0.1"/>
                <text x="200" y="280" textAnchor="middle" fill={lightbox.color} fontSize="14" opacity="0.6" fontFamily="Cormorant Garamond, serif">{lightbox.label}</text>
              </svg>
            </div>
            <p>{lightbox.label}</p>
          </div>
        </div>
      )}
    </div>
  )
}