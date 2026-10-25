import React from 'react'
import barcLogo from '../assets/clients/barc.png'
import mcgmLogo from '../assets/clients/mcgm.png'
import mglLogo from '../assets/clients/mgl.png'
import pwdLogo from '../assets/clients/pwd.png'
import sbiLogo from '../assets/clients/sbi.png'
import hindalcoLogo from '../assets/clients/hindalco.png'
import mcaLogo from '../assets/clients/mca.png'
import garwareLogo from '../assets/clients/garware.png'
import relianceLogo from '../assets/clients/reliance.png'
import vivantaLogo from '../assets/clients/vivanta.png'
import yogiLogo from '../assets/clients/yogi_midtown.png'
import fariyasLogo from '../assets/clients/fariyas.png'
import './css/Clients.css'

const CLIENTS_LIST = [
  {
    id: 'barc',
    name: 'BARC',
    fullName: 'Bhabha Atomic Research Centre',
    logo: barcLogo,
  },
  {
    id: 'mcgm',
    name: 'MCGM',
    fullName: 'Municipal Corporation of Greater Mumbai',
    logo: mcgmLogo,
  },
  {
    id: 'mgl',
    name: 'Mahanagar Gas',
    fullName: 'Mahanagar Gas Limited',
    logo: mglLogo,
  },
  {
    id: 'pwd',
    name: 'Maharashtra PWD',
    fullName: 'Public Works Department',
    logo: pwdLogo,
  },
  {
    id: 'sbi',
    name: 'State Bank of India',
    fullName: 'State Bank of India',
    logo: sbiLogo,
  },
  {
    id: 'hindalco',
    name: 'Aditya Birla Hindalco',
    fullName: 'Hindalco Industries Limited',
    logo: hindalcoLogo,
  },
  {
    id: 'mca',
    name: 'Mumbai Cricket Association',
    fullName: 'MCA Indoor Cricket Academy',
    logo: mcaLogo,
  },
  {
    id: 'garware',
    name: 'Garware Club House',
    fullName: 'Garware Club House Mumbai',
    logo: garwareLogo,
  },
  {
    id: 'reliance',
    name: 'Reliance Industries',
    fullName: 'Reliance Industries Limited',
    logo: relianceLogo,
  },
  {
    id: 'vivanta',
    name: 'Vivanta by Taj',
    fullName: 'Vivanta Hotels & Resorts by Taj',
    logo: vivantaLogo,
  },
  {
    id: 'yogi',
    name: 'Hotel Yogi Midtown',
    fullName: 'Hotel Yogi Midtown Mumbai',
    logo: yogiLogo,
  },
  {
    id: 'fariyas',
    name: 'Fariyas Hotel',
    fullName: 'Fariyas Hotel Mumbai',
    logo: fariyasLogo,
  },
]

export default function Clients() {
  return (
    <section className="clients-section" id="clients" aria-label="Our Reputed Clientele">
      <div className="clients-container">
        {/* Centered Heading */}
        <div className="clients-header">
          <h2 className="clients-title">
            OUR REPUTED <span className="clients-title-highlight">CLIENTELE</span>
          </h2>
        </div>

        {/* 12 Client Showcase Cards Grid (4 Columns x 3 Rows) */}
        <div className="clients-grid">
          {CLIENTS_LIST.map((client) => (
            <article key={client.id} className="client-card">
              <div className="client-logo-wrapper">
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  className="client-logo-img"
                  loading="lazy"
                />
              </div>
              <h3 className="client-name">{client.name}</h3>
              <span className="client-accent-bar" aria-hidden="true" />
              <p className="client-fullname">{client.fullName}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
