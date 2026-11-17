
import { Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const vehicles = [
  {
    name: 'Sedan',
    seats: '4 Passengers',
    category: 'COMFORTABLE',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1000',
    description: 'A convenient choice for city travel and small families.'
  },
  {
    name: 'SUV',
    seats: '6-7 Passengers',
    category: 'SPACIOUS',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1000',
    description: 'More room for family journeys and longer trips.'
  },
  {
    name: 'Family Vehicle',
    seats: '6-7 Passengers',
    category: 'FAMILY',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1000',
    description: 'A practical option for comfortable group travel.'
  },
  {
    name: 'Tempo Traveller',
    seats: 'Multiple Seating Options',
    category: 'GROUP TRAVEL',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000',
    description: 'A spacious transportation option for larger groups.'
  }
];

export default function Fleet() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">OUR VEHICLES</span>
          <h1>The right ride<br /><span>for every journey.</span></h1>
          <p>Explore transportation options for your travel plans.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="center-heading">
            <span className="eyebrow">OUR FLEET</span>
            <h2 className="section-title">Travel in your comfort zone.</h2>
            <p>Vehicle availability and seating options are subject to confirmation.</p>
          </div>

          <div className="fleet-grid fleet-page-grid">
            {vehicles.map(vehicle => (
              <div className="fleet-detail-card" key={vehicle.name}>
                <div className="fleet-detail-image">
                  <img src={vehicle.image} alt={vehicle.name} loading="lazy" />
                  <span className="fleet-category">{vehicle.category}</span>
                </div>

                <div className="fleet-detail-content">
                  <h3>{vehicle.name}</h3>
                  <p className="fleet-seats"><Users size={17} /> {vehicle.seats}</p>
                  <p>{vehicle.description}</p>
                  <div className="fleet-feature">
                    <CheckCircle2 size={16} /> Enquire for availability
                  </div>
                  <Link to="/contact" className="fleet-book-link">
                    Enquire Now <ArrowRight size={17} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
