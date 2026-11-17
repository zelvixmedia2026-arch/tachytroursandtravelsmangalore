
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">

          <div className="footer-brand">
            <Link to="/" className="brand footer-logo">
              <span className="brand-icon">T</span>
              <span>
                <strong>TACHY</strong>
                <small>TOURS & TRAVELS</small>
              </span>
            </Link>

            <p>
              Making every journey comfortable, convenient
              and memorable. Travel with confidence.
            </p>

            <span className="footer-slogan">
              YOUR JOURNEY. OUR COMMITMENT.
            </span>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/fleet">Our Fleet</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-links">
            <h4>Our Services</h4>
            <Link to="/services">Local Taxi</Link>
            <Link to="/services">Outstation Travel</Link>
            <Link to="/services">Airport Transfers</Link>
            <Link to="/services">Group Travel</Link>
          </div>

          <div className="footer-contact">
            <h4>Get In Touch</h4>
            <p><MapPin /> Mangaluru, Karnataka</p>
            <a href="tel:+918296320731"><Phone /> +91 82963 20731</a>
            <a href="mailto:info@tachytravels.com"><Mail /> Email Us</a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Tachy Tours & Travels. All rights reserved.</p>
          <a href="https://zelvixmedia.online" target="_blank" rel="noreferrer">
            Designed & Developed by Zelvix Media <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
