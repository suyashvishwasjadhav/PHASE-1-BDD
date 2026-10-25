import React from 'react'
import './css/Services.css'

const SERVICES_LIST = [
  {
    num: '01',
    title: 'Design & Stress Analysis',
    desc: 'Design and stress analysis of utility process and natural gas piping.',
  },
  {
    num: '02',
    title: 'Bill of Material & Tendering',
    desc: 'Comprehensive Bill of Material (BOM) preparation, estimation and tendering documentation.',
  },
  {
    num: '03',
    title: 'Leak Detection System',
    desc: 'Design, calibration and turnkey installation of high-precision pipeline leak detection systems.',
  },
  {
    num: '04',
    title: 'Fabrication & Commissioning',
    desc: 'Fabrication, erection and commissioning of mechanical equipment and piped natural gas systems.',
  },
  {
    num: '05',
    title: 'Building Management System',
    desc: 'Intelligent building management systems for automated industrial safety, monitoring and control.',
  },
  {
    num: '06',
    title: 'Annual Maintenance (AMC)',
    desc: 'Scheduled preventive maintenance and integrity management for process and natural gas piping.',
  },
  {
    num: '07',
    title: 'RO Plants & Hot Water Generator',
    desc: 'Supply, engineering assembly and installation of industrial RO plants and high-efficiency hot water generators.',
  },
]

export default function Services() {
  return (
    <section className="services-section" id="services" aria-label="Our Services">
      <div className="services-container">
        {/* Centered Heading */}
        <div className="services-header">
          <h2 className="services-title">
            OUR <span className="services-title-highlight">SERVICES</span>
          </h2>
          {/* <p className="services-subtitle">
            To serve as a single window solution for industry by providing highly capable, technically proficient and engineering services at optimal cost and time.
          </p> */}
        </div>

        {/* Feature Cards Grid / Track */}
        <div className="services-cards-track">
          {SERVICES_LIST.map((service) => (
            <article key={service.num} className="service-card">
              <span className="service-card-num">{service.num}</span>
              <h3 className="service-card-title">{service.title}</h3>
              <span className="service-card-accent-bar" aria-hidden="true" />
              <p className="service-card-text">{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
