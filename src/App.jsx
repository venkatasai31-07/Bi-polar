import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

// Modular Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { LinkedinIcon, TwitterIcon, GithubIcon } from './components/SocialIcons'

// Data & Utils
import { services } from './data/siteData'
import { soundEngine } from './utils/soundEngine'
import './index.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Subtle background sound
    // soundEngine.startStableHum(); 
  }, [])

  const handleSoundClick = () => {
    soundEngine.playClick()
  }

  return (
    <div className="app">
      {/* Background Effects */}
      <div className="bg-effects"></div>
      <div className="grid-overlay"></div>

      <Navbar onMobileToggle={() => setMobileMenuOpen(true)} />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mobile-menu-overlay"
            style={{ background: 'var(--bg-primary)', position: 'fixed', inset: 0, zIndex: 2000, padding: '40px' }}
          >
            <button style={{ background: 'none', border: 'none', color: 'white', position: 'absolute', top: '32px', right: '32px' }} onClick={() => { handleSoundClick(); setMobileMenuOpen(false); }}>
              <X size={32} />
            </button>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginTop: '60px' }}>
              <a href="#about" onClick={() => { handleSoundClick(); setMobileMenuOpen(false); }} style={{ fontSize: '2rem', fontWeight: 700 }}>About</a>
              <a href="#services" onClick={() => { handleSoundClick(); setMobileMenuOpen(false); }} style={{ fontSize: '2rem', fontWeight: 700 }}>Services</a>
              <a href="#projects" onClick={() => { handleSoundClick(); setMobileMenuOpen(false); }} style={{ fontSize: '2rem', fontWeight: 700 }}>Changelog</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Hero />

        {/* Features Section */}
        <section className="features-section" id="services">
          <div className="container" style={{ position: 'relative', zIndex: 10 }}>
            <div className="section-header">
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

      {/* Footer */}
      <footer className="footer-v2">
        <div className="container">
          <div className="footer-top">
            <div style={{ maxWidth: '300px' }}>
              <div className="nav-logo" style={{ marginBottom: '16px' }}>
                <div className="logo-icon">B</div>
                <span>Bi-Polar Factory</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                The new standard for high-performance agentic collaboration and software development.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '60px' }}>
              <div className="footer-col">
                <h4>PRODUCT</h4>
                <a href="#" onClick={handleSoundClick}>Features</a>
                <a href="#" onClick={handleSoundClick}>Integrations</a>
                <a href="#" onClick={handleSoundClick}>Changelog</a>
              </div>
              <div className="footer-col">
                <h4>COMPANY</h4>
                <a href="#" onClick={handleSoundClick}>About Us</a>
                <a href="#" onClick={handleSoundClick}>Careers</a>
                <a href="#" onClick={handleSoundClick}>Contact</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom-v2">
            <p>© 2026 Bi-Polar Factory. All rights reserved.</p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" onClick={handleSoundClick}><LinkedinIcon /></a>
              <a href="#" onClick={handleSoundClick}><TwitterIcon /></a>
              <a href="#" onClick={handleSoundClick}><GithubIcon /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
