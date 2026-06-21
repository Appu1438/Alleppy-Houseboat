import { Link } from 'react-router-dom'
import './footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      {/* Wave Divider */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" fill="#003d5c"/>
        </svg>
      </div>

      <div className="footer-body">
        <div className="container">
          <div className="footer-grid">

            {/* Brand Column */}
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                {/* <svg viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="footer-logo-icon">
                  <path d="M2 22 Q10 10 20 14 Q30 18 38 6" stroke="#c9973a" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  <path d="M6 22 L8 12 L20 8 L32 12 L34 22 Z" fill="#c9973a" opacity="0.2"/>
                  <path d="M8 22 L12 14 L20 11 L28 14 L32 22" stroke="#c9973a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <rect x="2" y="22" width="36" height="3" rx="1.5" fill="#c9973a" opacity="0.3"/>
                  <path d="M17 11 L17 6 L23 6 L23 11" stroke="#c9973a" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
                  <path d="M17 6 L20 3 L23 6" stroke="#c9973a" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg> */}
                <div>
                  <strong>Alappuzha</strong>
                  <em>Houseboat Holidays</em>
                </div>
              </Link>
              <p>Experience the timeless magic of Kerala's backwaters aboard our certified, premium houseboats. Over 15 years of creating unforgettable memories.</p>
              <div className="footer-certifications">
                <span>🏆 Kerala Tourism Certified</span>
                <span>✅ DTPC Approved</span>
                <span>⭐ 4.9 / 5 Rating</span>
              </div>
              <div className="footer-socials">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
                </a>
                <a href="https://wa.me/917736262841" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/houseboats">Our Houseboats</Link></li>
                <li><Link to="/packages">Packages & Pricing</Link></li>
                <li><Link to="/gallery">Photo Gallery</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
              </ul>
            </div>

            {/* Houseboat Types */}
            <div className="footer-col">
              <h4>Houseboat Types</h4>
              <ul>
                <li><Link to="/houseboats">Deluxe Houseboats</Link></li>
                <li><Link to="/houseboats">Premium Houseboats</Link></li>
                <li><Link to="/houseboats">Luxury Houseboats</Link></li>
                <li><Link to="/houseboats">Honeymoon Special</Link></li>
                <li><Link to="/houseboats">Family Packages</Link></li>
                <li><Link to="/alleppey-houseboats">Alleppey Houseboats</Link></li>
                <li><Link to="/luxury-houseboats-alleppey">Luxury in Alleppey</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4>Get In Touch</h4>
              <ul className="footer-contact-list">
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                  <a href="tel:+917736262841">+91 7736 26 2841</a>
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                  <a href="mailto:keralatourholidays@gmail.com">keralatourholidays@gmail.com</a>
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                  <span>Finishing Point Road, Alleppey (Alappuzha), Kerala 688001</span>
                </li>
              </ul>
              <div className="footer-hours">
                <strong>Booking Hours</strong>
                <span>Mon – Sun: 6:00 AM – 9:00 PM</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <p>© {year} Alappuzha Houseboat Holidays. All rights reserved.</p>
          <div className="footer-bottom-links">
            <p>
                Crafted with <span className="footer-heart">♥</span> by Adithyan

            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}