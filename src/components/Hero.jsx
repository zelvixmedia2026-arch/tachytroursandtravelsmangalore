
import { ArrowRight, MapPin, ShieldCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />

      <div className="container hero-content">
        <div className="hero-tag">
          <span className="live-dot" />
          YOUR JOURNEY, OUR PRIORITY
        </div>

        <h1>
          Travel More.
          <br />
          <span>Worry Less.</span>
        </h1>

        <p>
          Discover comfortable journeys, reliable transportation
          and unforgettable travel experiences with Tachy Tours & Travels.
        </p>

        <div className="hero-actions">
          <Link to="/contact" className="btn btn-primary">
            Book Your Journey <ArrowRight size={18} />
          </Link>

          <Link to="/services" className="btn btn-outline">
            Explore Services
          </Link>
        </div>

        <div className="hero-features">
          <div><ShieldCheck /><span>Reliable Travel</span></div>
          <div><Clock /><span>On-Time Service</span></div>
          <div><MapPin /><span>Local & Outstation</span></div>
        </div>
      </div>

      <div className="hero-bottom">
        <span>EXPLORE WITHOUT LIMITS</span>
        <span>01 — 05</span>
      </div>
    </section>
  );
}
