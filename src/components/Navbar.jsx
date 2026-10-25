import logo from '../assets/logo-transparent.png'
import './css/Navbar.css'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Left Side: Brand Logo + Company Heading */}
        <a href="/" className="navbar-brand" aria-label="Oceanic Engineers & Consultants">
          <img
            src={logo}
            alt="Oceanic Engineers & Consultants Logo"
            className="navbar-logo"
            loading="eager"
          />
          <div className="navbar-brand-info">
            <span className="navbar-company-name">Oceanic Engineers & Consultants</span>
            <span className="navbar-tagline">Since 2017</span>
          </div>
        </a>

        {/* Right Side: Navigation Links */}
        <nav className="navbar-nav" aria-label="Main Navigation">
          <a href="#about" className="navbar-link">About Us</a>
          <a href="#services" className="navbar-link">Services</a>
          <a href="#clients" className="navbar-link">Clients</a>
          <a href="#contact" className="navbar-link">Contact Us</a>
        </nav>
      </div>
    </header>
  )
}
