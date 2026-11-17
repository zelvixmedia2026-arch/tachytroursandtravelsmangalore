
import { Users, ArrowUpRight } from 'lucide-react';

export default function FleetCard({ image, name, seats, category }) {
  return (
    <div className="fleet-card">
      <div className="fleet-image">
        <img src={image} alt={name} loading="lazy" />
        <span className="fleet-category">{category}</span>
      </div>

      <div className="fleet-info">
        <div>
          <h3>{name}</h3>
          <p><Users size={16} /> {seats} Passengers</p>
        </div>
        <span className="fleet-arrow"><ArrowUpRight /></span>
      </div>
    </div>
  );
}
