import React from 'react'

export default function Products() {
  return (
    <main style={{ paddingTop: '160px', paddingBottom: '100px', minHeight: '100vh' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '60px' }}>
          <h2>Our Products</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '16px auto', fontSize: '1.2rem' }}>
            Each product is crafted to not only meet the current market demands but to propel users into the forefront of their industries.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <div className="feature-card" style={{ textAlign: 'left', padding: '40px' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>OLY Store Sync</h3>
            <p style={{ marginBottom: '24px', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              Store Sync is exclusively crafted for retail establishments, empowering them to harness the full spectrum of Brick and Mortar Analytics capabilities. With cutting-edge artificial intelligence and machine learning technologies, Store Sync offers comprehensive insights into customer interactions such as foot traffic, dwell time, demographics, path analysis and conversion rates.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.9rem' }}>A.I. Automation</span>
              <span style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.9rem' }}>Heat Mapping</span>
              <span style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.9rem' }}>Theft/Fire Detection</span>
            </div>
          </div>

          <div className="feature-card" style={{ textAlign: 'left', padding: '40px' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>OLY Control Center</h3>
            <p style={{ marginBottom: '24px', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              Enterprises can leverage Oly's advanced Video Management System (VMS) for centralised oversight and monitoring of security cameras. Control Center, characterised by a data-driven design and a customisable dashboard featuring useful widgets.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.9rem' }}>Camera Control</span>
              <span style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.9rem' }}>Live Widgets</span>
              <span style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.9rem' }}>Recording and Storage</span>
            </div>
          </div>

          <div className="feature-card" style={{ textAlign: 'left', padding: '40px' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>Metawood</h3>
            <p style={{ marginBottom: '24px', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              Metawood presents a pioneering fusion of a gamified streaming platform and a decentralized creator economy, harnessing the power of the metaverse and virtual reality to redefine the landscape of entertainment.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.9rem' }}>Story Mode</span>
              <span style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.9rem' }}>Watch Party</span>
              <span style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.9rem' }}>Virtual Theater</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
