import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import { FaHome, FaInfoCircle, FaCogs, FaEnvelope, FaPhoneAlt, FaSearch } from 'react-icons/fa'; // Importing icons for each link
import '../styles/Navbar.css'; // Custom CSS for additional styling

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          {/* Brand name with a logo */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img 
            src={`${process.env.PUBLIC_URL}/images/logo.jpg`}
            alt="Logo" className="navbar-logo me-2" />
            <div className="logo-text">
              <span className="line-1">Smart City</span>
              <span className="line-2">Infrastructure</span>
            </div>
          </Link>

          {/* Navbar toggler for mobile view */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <FaHome className="me-2" /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  <FaInfoCircle className="me-2" /> About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/core_components">
                  <FaCogs className="me-2" /> Core Components
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/feedback">
                  <FaEnvelope className="me-2" /> Feedback
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  <FaPhoneAlt className="me-2" /> Contact Us
                </Link>
              </li>

              {/* Dropdown example */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More <i className="fas fa-caret-down"></i>
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/services">Our Services</Link></li>
                  <li><Link className="dropdown-item" to="/partners">Partners</Link></li>
                  <li><Link className="dropdown-item" to="/blog">Blog</Link></li>
                </ul>
              </li>
            </ul>

            {/* Search Bar */}
            <form className="d-flex ms-3" action="#" method="GET">
              <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Search..." 
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                <FaSearch />
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
