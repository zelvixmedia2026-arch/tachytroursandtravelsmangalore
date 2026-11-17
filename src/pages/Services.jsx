
import { Link } from 'react-router-dom';
import {
  CarFront, Plane, MapPinned, Users, BriefcaseBusiness,
  Map, ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: CarFront,
    title: 'Local Taxi Services',
    description: 'Convenient rides for shopping, business meetings, daily commutes and city travel.'
  },
  {
    icon: MapPinned,
    title: 'Outstation Travel',
    description: 'Comfortable transportation for family trips, holidays and long-distance journeys.'
  },
  {
    icon: Plane,
    title: 'Airport Transfers',
    description: 'Plan convenient pickup and drop services to and from the airport.'
  },
  {
    icon: Users,
    title: 'Group Transportation',
    description: 'Spacious transportation options for families, friends and larger groups.'
  },
  {
    icon: BriefcaseBusiness,
    title: 'Corporate Travel',
    description: 'Transportation arrangements for business travel and professional requirements.'
  },
  {
    icon: Map,
    title: 'Tour & Sightseeing',
    description: 'Explore destinations and plan sightseeing journeys with convenient transport.'
  }
];

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">TRAVEL MADE CONVENIENT</span>
          <h1>Services designed<br /><span>around you.</span></h1>
          <p>Find the right travel solution for every journey.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="center-heading">
            <span className="eyebrow">OUR SERVICES</span>
            <h2 className="section-title">How can we help you travel?</h2>
            <p>Explore our range of transportation services.</p>
          </div>

          <div className="services-grid service-page-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div className="service-card" key={service.title}>
                  <div className="service-card-top">
                    <span className="service-icon"><Icon size={25} /></span>
                    <span className="service-number">0{index + 1}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to="/contact" className="service-arrow">
                    <ArrowRight size={20} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-content">
          <span className="eyebrow">LET'S PLAN YOUR TRIP</span>
          <h2>Tell us where<br />you want to go.</h2>
          <p>Get in touch to discuss your travel requirements.</p>
          <Link to="/contact" className="btn btn-light">
            Enquire Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
