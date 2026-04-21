import React from 'react'

export default function CaseStudies() {
  return (
    <main style={{ paddingTop: '160px', paddingBottom: '100px', minHeight: '100vh' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '60px' }}>
          <h2>Case Studies</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '16px auto', fontSize: '1.2rem' }}>
            Read up on how our technological expertise has helped clients achieve their ultimate operational goals.
          </p>
        </div>

        <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
          <div className="feature-card" style={{ textAlign: 'left' }}>
            <span style={{ color: 'var(--accent-pink)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Election Commission of India</span>
            <h3 style={{ fontSize: '1.5rem', margin: '12px 0' }}>Live Streaming for Kerala Assembly Elections</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Bipolar Factory created a cross-platform desktop application for the Election Commissioner's office used for live video streaming during the 2021 Kerala elections. The application facilitated surveillance to ensure compliance across over 20,000 booths, streaming for 150,000+ hours without lag.</p>
          </div>

          <div className="feature-card" style={{ textAlign: 'left' }}>
            <span style={{ color: 'var(--accent-pink)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Landmark Group</span>
            <h3 style={{ fontSize: '1.5rem', margin: '12px 0' }}>Real-time Footfall Analytics for Max Stores</h3>
            <p style={{ color: 'var(--text-secondary)' }}>We transformed Max stores' in-store experience by creating a cutting-edge footfall analytics solution. Leveraging existing CCTV cameras, the system captures and analyzes real-time customer movements, offering valuable insights into shopper behavior to optimize layouts.</p>
          </div>

          <div className="feature-card" style={{ textAlign: 'left' }}>
            <span style={{ color: 'var(--accent-pink)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Zigma Global Environ Solutions</span>
            <h3 style={{ fontSize: '1.5rem', margin: '12px 0' }}>EPR Portal for Waste Management</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Bipolar Factory enhanced Zigma's Extended Producer Responsibility (EPR) solutions by developing a web portal. This enabled Zigma to successfully process around 85 lakh tons of municipal solid waste and properly track material movement through clear digitization.</p>
          </div>

          <div className="feature-card" style={{ textAlign: 'left' }}>
            <span style={{ color: 'var(--accent-pink)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Election Commission of India</span>
            <h3 style={{ fontSize: '1.5rem', margin: '12px 0' }}>Automated Vote Counting (Bihar)</h3>
            <p style={{ color: 'var(--text-secondary)' }}>We partnered with the Bihar State Election Commission to automate the election counting process, eliminating human errors and ensuring an efficient procedure, upholding the integrity of democracy.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
