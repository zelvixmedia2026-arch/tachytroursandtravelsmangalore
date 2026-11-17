
import { ArrowUpRight } from 'lucide-react';

export default function ServiceCard({ icon: Icon, title, description, number }) {
  return (
    <div className="service-card">
      <div className="service-card-top">
        <span className="service-icon"><Icon size={25} /></span>
        <span className="service-number">{number}</span>
      </div>

      <h3>{title}</h3>
      <p>{description}</p>

      <div className="service-arrow">
        <ArrowUpRight size={20} />
      </div>
    </div>
  );
}
