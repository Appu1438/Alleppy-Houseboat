import { useState } from 'react'
import './gallery.css'
import { galleryImages, galleryVideos } from '../../themes/constants/gallery/gallery'
import GallerySEO from './GallerySeo'

const categories = [
  "All",
  "Houseboat",
  "Scenic Views",
  "Guest Experience"
]

const categoryColors = {
  Houseboat: "#0d3d3a",
  "Scenic Views": "#a8763e",
  "Guest Experience": "#7a9b8e",
}
const galleryItems = Array.from(
  { length: galleryImages.length },
  (_, i) => {
    const category = categories[1 + (i % (categories.length - 1))]
    return {
      id: i + 1,
      image: galleryImages[i],
      category,
      color: categoryColors[category],
      aspect:
        i % 5 === 0
          ? 'wide'
          : i % 7 === 0
            ? 'tall'
            : 'square',
    }
  }
)

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const galleryImages = active === 'All' ? galleryItems : galleryItems.filter(g => g.category === active)

  return (
    <div className="gallery-page">
      <GallerySEO />
      <section className="page-hero">
        <div className="page-hero-pattern" />
        <div className="page-hero-overlay" />
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
              <button
                key={c}
                className={`filter-tab ${active === c ? 'active' : ''}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <p className="results-count">{galleryImages.length} photos</p>
        </div>
      </div>

      {/* Masonry Grid */}
      <section className="section section--cream gallery-section">
        <div className="container">
          <div className="masonry-grid">
            {galleryImages.map(item => (
              <div
                key={item.id}
                className={`gallery-item ${item.aspect}`}
                style={{ '--item-color': item.color }}
                onClick={() => setLightbox(item)}
              >
                <div className="gallery-img">
                  <img
                    src={item.image}
                    alt={item.category}
                    loading="lazy"
                  />
                </div>
                <div className="gallery-item-overlay">
                  <svg className="zoom-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
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
              <div key={video.id} className="video-card">
                <div className="video-wrapper">
                  <video
                    controls
                    preload="metadata"
                    poster="https://res.cloudinary.com/stark-and-nfly/image/upload/v1780586906/one-bedroom-premium-houseboat-alleppey_n6fvfp.jpg"
                  >
                    <source src={video.video} type="video/mp4" />
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
              <img src={lightbox.image} alt={lightbox.category} />
            </div>
            <p>{lightbox.category}</p>
          </div>
        </div>
      )}
    </div>
  )
}