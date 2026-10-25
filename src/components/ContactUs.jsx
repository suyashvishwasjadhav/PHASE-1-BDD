import React, { useState } from 'react'
import './css/ContactUs.css'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
      })
    }, 4000)
  }

  return (
    <section className="contact-section" id="contact" aria-label="Contact Us">
      <div className="contact-container">
        {/* Centered Heading */}
        <div className="contact-header">
          <h2 className="contact-title">
            CONTACT <span className="contact-title-highlight">US</span>
          </h2>
          {/* <p className="contact-subtitle">
            Connect with Oceanic Engineers &amp; Consultants for turnkey pipeline solutions, stress analysis, fabrication, and engineering consultation.
          </p> */}
        </div>

        {/* 4 Info Cards Grid */}
        <div className="contact-cards-grid">
          {/* 1. Registered Address */}
          <article className="contact-info-card">
            <div className="contact-card-icon-box" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3 className="contact-card-title">Registered Address</h3>
            <span className="contact-card-accent-bar" aria-hidden="true" />
            <address className="contact-card-address">
              King Krest Building, Office No.-40,<br />
              Beside Ram Mandir, Bhawani Shankar Road,<br />
              Dadar (W), Mumbai-400028.
            </address>
            <a
              href="https://www.google.com/maps/search/?api=1&query=King+Krest+Building+Bhawani+Shankar+Road+Dadar+West+Mumbai+400028"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-link"
            >
              <span>View On Google Maps</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </article>

          {/* 2. Contact Numbers */}
          <article className="contact-info-card">
            <div className="contact-card-icon-box" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3 className="contact-card-title">Contact Numbers</h3>
            <span className="contact-card-accent-bar" aria-hidden="true" />
            <div className="contact-numbers-list">
              <a href="tel:+918454098748" className="contact-num-item">
                <span className="contact-num-badge">Direct</span>
                <span className="contact-num-val">+91 84540 98748</span>
              </a>
              <a href="tel:+917039490670" className="contact-num-item">
                <span className="contact-num-badge">Office</span>
                <span className="contact-num-val">+91 70394 90670</span>
              </a>
            </div>
            <a href="tel:+918454098748" className="contact-card-link">
              <span>Call Us Directly</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </article>

          {/* 3. Email Address */}
          <article className="contact-info-card">
            <div className="contact-card-icon-box" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3 className="contact-card-title">Official Email</h3>
            <span className="contact-card-accent-bar" aria-hidden="true" />
            <p className="contact-card-text">
              For commercial bids, tendering, client support, or engineering inquiries:
            </p>
            <a href="mailto:oceanicengg@gmail.com" className="contact-email-highlight">
              oceanicengg@gmail.com
            </a>
            <a href="mailto:oceanicengg@gmail.com" className="contact-card-link">
              <span>Send An Email</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </article>

          {/* 4. Official Website */}
          <article className="contact-info-card">
            <div className="contact-card-icon-box" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <h3 className="contact-card-title">Web Portal</h3>
            <span className="contact-card-accent-bar" aria-hidden="true" />
            <p className="contact-card-text">
              Explore our full portfolio, capabilities, and pipeline engineering case studies online:
            </p>
            <a
              href="https://www.oceanicengineers.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-website-highlight"
            >
              www.oceanicengineers.com
            </a>
            <a
              href="https://www.oceanicengineers.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-link"
            >
              <span>Visit Portal</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </article>
        </div>

        {/* Interactive Inquiry Form Card */}
        <div className="contact-form-wrapper">
          <div className="contact-form-card">
            <div className="contact-form-header">
              <h3 className="contact-form-title">Send Us An Inquiry</h3>
              <p className="contact-form-desc">
                Have an upcoming project or need a quotation? Fill out the form below and our engineering team will respond within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="contact-success-message">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h4>Thank You! Your message has been sent.</h4>
                <p>We have received your details and will get in touch with you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form-grid">
                  <div className="form-group">
                    <label htmlFor="contact-name">Full Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone Number *</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-subject">Service of Interest</label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Design & Stress Analysis">Design &amp; Stress Analysis</option>
                      <option value="Bill of Material & Tendering">Bill of Material &amp; Tendering</option>
                      <option value="Leak Detection System">Leak Detection System</option>
                      <option value="Fabrication & Commissioning">Fabrication &amp; Commissioning</option>
                      <option value="Building Management System">Building Management System</option>
                      <option value="Annual Maintenance (AMC)">Annual Maintenance (AMC)</option>
                      <option value="RO Plants & Hot Water Generator">RO Plants &amp; Hot Water Generator</option>
                    </select>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="contact-message">Project Details / Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="4"
                    required
                    placeholder="Provide a brief description of your technical requirement, location, or project scope..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="form-actions">
                  <button type="submit" className="contact-submit-btn">
                    <span>Submit Inquiry</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
