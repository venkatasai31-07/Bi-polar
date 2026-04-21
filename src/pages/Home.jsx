import React from 'react'
import Hero from '../components/Hero'
import { services } from '../data/siteData'

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="features-section" id="services">
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="section-header" style={{ marginBottom: '40px' }}>
            <h2>Powerful Features</h2>
          </div>
          <div className="features-grid">
            {services.map((service, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
