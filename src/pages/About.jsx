
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Clock, HeartHandshake, MapPin } from 'lucide-react';

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">GET TO KNOW US</span>
          <h1>Our journey is<br /><span>built on trust.</span></h1>
          <p>Discover the story behind Tachy Tours & Travels.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container about-grid">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1100"
              alt="Scenic travel destination"
            />
          </div>

          <div className="about-content">
            <span className="eyebrow">WHO WE ARE</span>
            <h2 className="section-title">
              Making travel simpler since <span>1999.</span>
            </h2>
            <p>
              Tachy Tours & Travels is a transportation and travel service
              provider based in Mangaluru, Karnataka.
            </p>
            <p>
              From local transportation to long-distance journeys, our
              goal is to provide convenient travel solutions for individuals,
              families and groups.
            </p>
            <p>
              We believe every journey should begin with confidence
              and end with a memorable experience.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Get In Touch <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="values-section section-padding">
        <div className="container">
          <div className="center-heading">
            <span className="eyebrow">WHAT MATTERS TO US</span>
            <h2 className="section-title">Our core values.</h2>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <ShieldCheck />
              <h3>Reliability</h3>
              <p>Dependable transportation for your travel needs.</p>
            </div>
            <div className="value-card">
              <HeartHandshake />
              <h3>Customer First</h3>
              <p>Focused on making your journey convenient.</p>
            </div>
            <div className="value-card">
              <Clock />
              <h3>Convenience</h3>
              <p>Travel arrangements designed around your plans.</p>
            </div>
            <div className="value-card">
              <MapPin />
              <h3>Local Knowledge</h3>
              <p>Travel solutions across Mangaluru and beyond.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
