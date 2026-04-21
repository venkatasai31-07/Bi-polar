import React from 'react'

export default function About() {
  return (
    <main style={{ paddingTop: '160px', paddingBottom: '100px', minHeight: '100vh' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '60px' }}>
          <h2>About Bipolar Factory</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '16px auto', fontSize: '1.2rem' }}>
            We are not just a company; we are a collective of dreamers, thinkers, and doers based in Coimbatore, Tamil Nadu.
          </p>
        </div>

        <div className="feature-card" style={{ marginBottom: '60px', padding: '40px', textAlign: 'left' }}>
          <h3 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>We Build For People</h3>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
            Our journey began in 2020 with the recognition that seemingly insurmountable challenges are, in fact, opportunities waiting for the right idea. At Bipolar Factory, we strive to be the catalyst for those ideas and transform them into products that not only solve problems but elevate the very essence of everyday living. 
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            Our mission is a call to action, a commitment to positive change through innovation. Join us on this transformative journey where ideas become reality, and positive change is not just a vision but a reality we create every day.
          </p>
        </div>

        <div className="section-header" style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2rem' }}>Our Values</h2>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <h3>Innovation</h3>
            <p>Pioneering solutions that redefine industries and build the future.</p>
          </div>
          <div className="feature-card">
            <h3>Quality</h3>
            <p>Delivering excellence and robust execution in every product and service.</p>
          </div>
          <div className="feature-card">
            <h3>Humility</h3>
            <p>Embracing the learning journey with an open mind and collaborative spirit.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
