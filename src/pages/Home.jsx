
import { Link } from 'react-router-dom';
import {
  CarFront, Plane, MapPinned, Users,
  ArrowRight, ShieldCheck, Clock, Award
} from 'lucide-react';

import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import FleetCard from '../components/FleetCard';

const services = [
  {
    icon: CarFront,
    title: 'Local Taxi',
    description: 'Convenient transportation for your everyday city travel.',
    number: '01'
  },
  {
    icon: MapPinned,
    title: 'Outstation Trips',
    description: 'Explore destinations with comfortable long-distance journeys.',
    number: '02'
  },
  {
    icon: Plane,
    title: 'Airport Transfers',
    description: 'Reliable airport pickup and drop transportation.',
    number: '03'
  },
  {
    icon: Users,
    title: 'Group Travel',
    description: 'Travel together with spacious vehicles for your group.',
    number: '04'
  }
];

const vehicles = [
  {
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=900',
    name: 'Sedan',
    seats: '4',
    category: 'COMFORT'
  },
  {
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=900',
    name: 'SUV',
    seats: '6-7',
    category: 'SPACIOUS'
  },
  {
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=900',
    name: 'Premium Car',
    seats: '4-5',
    category: 'PREMIUM'
  },
  {
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=900',
    name: 'Group Transport',
    seats: 'Multiple',
    category: 'GROUP'
  }
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="intro-section section-padding">
        <div className="container intro-grid">
          <div>
            <span className="eyebrow">WELCOME TO TACHY</span>
            <h2 className="section-title">
              Every journey deserves a <span>better experience.</span>
            </h2>
          </div>

          <div className="intro-text">
            <p>
              Whether you're travelling across the city, planning an
              outstation trip or arranging transportation for a group,
              we're here to make your journey easier.
            </p>
            <Link to="/about" className="text-link">
              Discover Our Story <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="services-section section-padding">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">WHAT WE OFFER</span>
              <h2 className="section-title">
                Travel solutions for <span>every occasion.</span>
              </h2>
            </div>
            <Link to="/services" className="text-link">
              All Services <ArrowRight size={18} />
            </Link>
          </div>

          <div className="services-grid">
            {services.map(service => (
              <ServiceCard key={service.number} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="experience-section">
        <div className="container experience-grid">
          <div className="experience-image">
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200"
              alt="Beautiful mountain travel destination"
              loading="lazy"
            />
            <div className="experience-stamp">
              <strong>1999</strong>
              <span>Established</span>
            </div>
          </div>

          <div className="experience-content">
            <span className="eyebrow">OUR EXPERIENCE</span>
            <h2 className="section-title">
              More than travel.
              <span> It's about trust.</span>
            </h2>
            <p>
              Our journey began with a simple vision: making travel
              comfortable and accessible. We continue to focus on
              dependable transportation and customer convenience.
            </p>

            <div className="experience-points">
              <div><ShieldCheck /><span>Customer-focused service</span></div>
              <div><Clock /><span>Convenient travel planning</span></div>
              <div><Award /><span>Experience since 1999</span></div>
            </div>

            <Link to="/about" className="btn btn-primary">
              About Tachy <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="fleet-section section-padding">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">TRAVEL YOUR WAY</span>
              <h2 className="section-title">
                Find your perfect <span>ride.</span>
              </h2>
            </div>
            <Link to="/fleet" className="text-link">
              Explore Fleet <ArrowRight size={18} />
            </Link>
          </div>

          <div className="fleet-grid">
            {vehicles.map(vehicle => (
              <FleetCard key={vehicle.name} {...vehicle} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-content">
          <span className="eyebrow">YOUR NEXT JOURNEY STARTS HERE</span>
          <h2>Ready to explore<br />somewhere new?</h2>
          <p>Let's make your next journey a memorable one.</p>
          <Link to="/contact" className="btn btn-light">
            Plan Your Journey <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
