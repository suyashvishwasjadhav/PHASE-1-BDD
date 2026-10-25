import React from 'react'
import logo from '../assets/logo-transparent.png'
import './css/Footer.css'

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Main Footer Row */}
        <div className="footer-main">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <a href="/" className="footer-brand" aria-label="Oceanic Engineers & Consultants">
              <img
                src={logo}
                alt="Oceanic Engineers & Consultants Logo"
                className="footer-logo"
                loading="lazy"
              />
              <div className="footer-brand-text">
                <span className="footer-company-name">Oceanic Engineers &amp; Consultants</span>
                <span className="footer-tagline">The Complete Piping Solution</span>
              </div>
            </a>
            <p className="footer-about-text">
              Specialists in industrial utility process piping, natural gas systems, stress analysis, leak detection, and turnkey mechanical engineering solutions.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#services" className="footer-link">Our Services</a></li>
              <li><a href="#clients" className="footer-link">Our Clientele</a></li>
              <li><a href="#contact" className="footer-link">Contact Us</a></li>
            </ul>
          </div>

          {/* Key Services */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Specializations</h4>
            <ul className="footer-links-list">
              <li><span>Piping Stress Analysis</span></li>
              <li><span>Leak Detection Systems</span></li>
              <li><span>BOM &amp; Tendering</span></li>
              <li><span>Natural Gas Piping AMC</span></li>
              <li><span>RO Plants &amp; Boilers</span></li>
            </ul>
          </div>

          {/* Direct Contact Summary */}
          <div className="footer-contact-col">
            <h4 className="footer-heading">Headquarters</h4>
            <p className="footer-contact-item">
              King Krest Building, Office No.-40, Beside Ram Mandir, Bhawani Shankar Road, Dadar (W), Mumbai-400028.
            </p>
            <p className="footer-contact-item">
              <strong>Phone:</strong> <a href="tel:+918454098748">+91 84540 98748</a> / <a href="tel:+917039490670">+91 70394 90670</a>
            </p>
            <p className="footer-contact-item">
              <strong>Email:</strong> <a href="mailto:oceanicengg@gmail.com">oceanicengg@gmail.com</a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Oceanic Engineers &amp; Consultants. All Rights Reserved.
          </p>
          <a href="#root" className="footer-back-to-top">
            Back to Top &uarr;
          </a>
        </div>
      </div>
    </footer>
  )
}
