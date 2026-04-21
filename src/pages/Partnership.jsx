import React from 'react'

export default function Partnership() {
  return (
    <main style={{ paddingTop: '160px', paddingBottom: '100px', minHeight: '100vh' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '60px' }}>
          <h2>Technology Partnership</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '16px auto', fontSize: '1.2rem' }}>
            Empower your business with our technology partnership program, offering innovative solutions for new entrepreneurs, startups, and corporations alike.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <h3>TPaaS (Technology Partner as a Service)</h3>
            <p>Unlike traditional tech services which may focus on specific aspects like software development, TPaaS offers a comprehensive package focusing on long-term business growth and digital transformation.</p>
          </div>
          <div className="feature-card">
            <h3>Technical Consulting</h3>
            <p>We start by understanding your unique business needs, conducting a thorough assessment, and collaborating to develop a tailored tech strategy that aligns with objectives.</p>
          </div>
          <div className="feature-card">
            <h3>Custom Software</h3>
            <p>We specialize in enterprise applications, CRM systems, e-commerce, mobile apps, and enterprise AI solutions ensuring operations are efficient and robust.</p>
          </div>
          <div className="feature-card">
            <h3>Digital Transformation</h3>
            <p>We empower you to modernize operations, uphold efficiency and strategically prepare your business for the future.</p>
          </div>
          <div className="feature-card">
            <h3>Research Assist</h3>
            <p>Stay at the forefront of industry trends. We provide invaluable insights into the latest technological advancements.</p>
          </div>
          <div className="feature-card">
            <h3>IP Security</h3>
            <p>The ownership of intellectual property (IP) created during our engagement safely belongs to the client, ensuring you have full control over your code.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
