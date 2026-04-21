import React from 'react'

export default function Contact() {
  return (
    <main style={{ paddingTop: '160px', paddingBottom: '100px', minHeight: '100vh' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '60px' }}>
          <h2>Get In Touch</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '16px auto', fontSize: '1.2rem' }}>
            Drop us a line to know more about our company, products, and what we can do for you.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)', gap: '40px', maxWidth: '900px', margin: '0 auto' }}>
          
          <div className="feature-card" style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', padding: '40px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Our Office</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}><strong>Bipolar Factory Private Limited</strong></p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '32px' }}>
              2/118, First Floor, Nehru Nagar,<br />
              Koundampalayam Road, Edayarpalayam,<br />
              Coimbatore, Tamil Nadu 641025
            </p>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Socials</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="https://www.linkedin.com/company/bipolar-factory" style={{ color: 'var(--accent-pink)', textDecoration: 'none' }}>LinkedIn ↗</a>
              <a href="https://twitter.com/bipolarfactory" style={{ color: 'var(--accent-pink)', textDecoration: 'none' }}>Twitter ↗</a>
            </div>
          </div>

          <div className="feature-card" style={{ textAlign: 'left', padding: '40px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Send a Message</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} onSubmit={(e) => e.preventDefault()}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Name</label>
                <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.5)', color: 'white' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email</label>
                <input type="email" placeholder="john@company.com" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.5)', color: 'white' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Message</label>
                <textarea rows="4" placeholder="How can we help you?" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.5)', color: 'white', resize: 'vertical' }}></textarea>
              </div>
              <button className="cta-button" style={{ width: '100%', marginTop: '16px' }}>Submit Request</button>
            </form>
          </div>

        </div>
      </div>
    </main>
  )
}
