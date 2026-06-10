import { useState } from 'react'
import './gallery.css'
import { galleryImages, galleryVideos } from '../../themes/constants/gallery/gallery'

const categories = ['All', 'Boats', 'Backwaters', 'Food', 'Sunsets', 'Activities']

const galleryItems = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  image: galleryImages[i % galleryImages.length],

  category: categories[1 + (i % (categories.length - 1))],

  aspect:
    i % 5 === 0
      ? 'wide'
      : i % 7 === 0
        ? 'tall'
        : 'square',

  color: [
    '#2a8a82',
    '#c9973a',
    '#1a5c57',
    '#d97b8a',
    '#0d3d3a',
    '#5a7a6a',
  ][i % 6],

  label: [
    'Vembanad Lake Cruise',
    'Sunset on the Backwaters',
    'Traditional Kerala Sadhya',
    'Houseboat Upper Deck',
    'Paddy Fields Route',
    'Fishermen at Dawn',
    'Evening Reflections',
    'Backwater Village',
    'Kerala Seafood Feast',
    'Alleppey Canal',
    'Morning Mist Cruise',
    'Lotus Flowers',
    'Coir Boat Crafting',
    'Chinese Fishing Nets',
    'Moonlit Waters',
    'Royal Lotus Deck',
    'Honeymoon Setup',
    'Bird Watching',
    'Village Canoe Ride',
    'Backwater Sunset',
  ][i],
}))

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? galleryItems : galleryItems.filter(g => g.category === active)

  return (
    <div className="gallery-page">
      <section className="page-hero">
        <div className="page-hero-pattern" />

        <div className="page-hero-overlay" />x``
        <div className="container">
          <span className="section-label">Visual Journey</span>
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
                style={{ '--item-color': item.color }}
                onClick={() => setLightbox(item)}
              >
                <div className="gallery-img">
                  <img
                    src={item.image}
                    alt={item.label}
                    loading="lazy"
                  />
                </div>
                <div className="gallery-item-overlay">
                  <span>{item.label}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="zoom-icon"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
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
            <p>
              Watch our houseboat experience videos and explore
              the beauty of Alappuzha backwaters.
            </p>
          </div>

          <div className="video-grid">
            {galleryVideos.map((video) => (
              <div
                key={video.id}
                className="video-card"
              >
                <div className="video-wrapper">
                  <video
                    controls
                    preload="metadata"
                    poster="https://res.cloudinary.com/stark-and-nfly/image/upload/v1780586906/one-bedroom-premium-houseboat-alleppey_n6fvfp.jpg"
                  >
                    <source
                      src={video.video}
                      type="video/mp4"
                    />
                  </video>
                </div>

                <div className="video-info">
                  <h3>{video.title}</h3>
                </div>
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
            <div className="lb-img">
              <img
                src={lightbox.image}
                alt={lightbox.label}
              />
            </div>
            <p>{lightbox.label}</p>
          </div>
        </div>
      )}
    </div>
  )
}