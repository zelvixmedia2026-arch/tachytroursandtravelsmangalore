
import { useState } from 'react';
import {
  MapPin, Phone, Mail, Clock, Send, MessageCircle
} from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    pickup: '',
    destination: '',
    date: '',
    service: 'Outstation Travel',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hello Tachy Tours & Travels!

Name: ${form.name}
Phone: ${form.phone}
Pickup: ${form.pickup}
Destination: ${form.destination}
Travel Date: ${form.date}
Service: ${form.service}
Message: ${form.message}`;

    window.open(
      `https://wa.me/918296320731?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">WE'RE HERE TO HELP</span>
          <h1>Let's plan your<br /><span>next journey.</span></h1>
          <p>Have a destination in mind? Get in touch with us.</p>
        </div>
      </section>

      <section className="section-padding contact-section">
        <div className="container contact-grid">

          <div className="contact-info">
            <span className="eyebrow">CONTACT TACHY</span>
            <h2 className="section-title">Let's talk about your travel plans.</h2>
            <p>Share your requirements and we'll help you with your enquiry.</p>

            <div className="contact-info-list">
              <div>
                <span className="contact-icon"><Phone /></span>
                <div>
                  <strong>Call Us</strong>
                  <p>+91 82963 20731</p>
                </div>
              </div>

              <div>
                <span className="contact-icon"><MapPin /></span>
                <div>
                  <strong>Our Location</strong>
                  <p>Mangaluru, Karnataka, India</p>
                </div>
              </div>

              <div>
                <span className="contact-icon"><Mail /></span>
                <div>
                  <strong>Email</strong>
                  <p>info@tachytravels.com</p>
                </div>
              </div>

              <div>
                <span className="contact-icon"><Clock /></span>
                <div>
                  <strong>Enquiries</strong>
                  <p>Contact us for availability and timings.</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/918296320731"
              target="_blank"
              rel="noreferrer"
              className="contact-whatsapp"
            >
              <MessageCircle /> Chat on WhatsApp
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send a travel enquiry</h3>
            <p>Fill in your details and we'll connect you on WhatsApp.</p>

            <div className="form-row">
              <div className="form-group">
                <label>Your Name *</label>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Your phone number" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Pickup Location</label>
                <input name="pickup" value={form.pickup} onChange={handleChange} placeholder="Where from?" />
              </div>
              <div className="form-group">
                <label>Destination</label>
                <input name="destination" value={form.destination} onChange={handleChange} placeholder="Where to?" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Travel Date</label>
                <input type="date" name="date" value={form.date} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Service Required</label>
                <select name="service" value={form.service} onChange={handleChange}>
                  <option>Outstation Travel</option>
                  <option>Local Taxi</option>
                  <option>Airport Transfer</option>
                  <option>Group Travel</option>
                  <option>Corporate Travel</option>
                  <option>Tour & Sightseeing</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Additional Requirements</label>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us more about your journey..." rows="4" />
            </div>

            <button type="submit" className="btn btn-primary form-submit">
              Send Enquiry <Send size={18} />
            </button>
          </form>

        </div>
      </section>
    </>
  );
}
