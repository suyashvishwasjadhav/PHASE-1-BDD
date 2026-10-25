import React from 'react'
import './css/AboutUs.css'

export default function AboutUs() {
  return (
    <section className="about-section" id="about" aria-label="About Oceanic Engineer Consultants">

      <div className="about-container">
        {/* Centered Heading */}
        <div className="about-header">
          <h2 className="about-title">
            ABOUT <span className="about-title-highlight">US</span>
          </h2>
        </div>

        {/* Centered Feature Cards Track */}
        <div className="about-cards-track">
          {/* Card 1: Our Vision */}
          <article className="about-card">
            <h3 className="about-card-title">Our Vision</h3>
            <span className="about-card-accent-bar" aria-hidden="true" />
            <p className="about-card-text">
              To be a leading name in pipeline infrastructure through innovation, integrity and impact.
            </p>
          </article>

          {/* Card 2: Our Mission */}
          <article className="about-card">
            <h3 className="about-card-title">Our Mission</h3>
            <span className="about-card-accent-bar" aria-hidden="true" />
            <p className="about-card-text">
              To deliver safe, efficient and high-quality pipeline solutions that power communities and industries.
            </p>
          </article>

          {/* Card 3: Quality Policy */}
          <article className="about-card">
            <h3 className="about-card-title">Quality Policy</h3>
            <span className="about-card-accent-bar" aria-hidden="true" />
            <p className="about-card-text">
              We are committed to the highest standards of quality, safety, and environmental responsibility in all our projects.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
