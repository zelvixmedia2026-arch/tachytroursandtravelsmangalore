
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Fleet', path: '/fleet' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="navbar">
      <div className="container nav-inner">

        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-icon">T</span>
          <span>
            <strong>TACHY</strong>
            <small>TOURS & TRAVELS</small>
          </span>
        </Link>

        <nav className={open ? 'nav-links active' : 'nav-links'}>
          {links.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={closeMenu}
            >
              {link.name}
            </NavLink>
          ))}
          <a className="mobile-contact" href="tel:+918296320731">
            <Phone size={17} /> Call Now
          </a>
        </nav>

        <a href="tel:+918296320731" className="nav-cta">
          <Phone size={16} />
          <span>Call Us</span>
          <ArrowUpRight size={16} />
        </a>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>
    </header>
  );
}
