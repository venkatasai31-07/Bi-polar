import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Routes, Route, Link } from 'react-router-dom'
import { X } from 'lucide-react'

// Modular Components
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import Partnership from './pages/Partnership'
import About from './pages/About'
import CaseStudies from './pages/CaseStudies'
import Contact from './pages/Contact'
import { LinkedinIcon, TwitterIcon, GithubIcon } from './components/SocialIcons'

// Data & Utils
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
              <Link to="/products" onClick={() => { handleSoundClick(); setMobileMenuOpen(false); }} style={{ fontSize: '2rem', fontWeight: 700, color: 'white', textDecoration: 'none' }}>Products</Link>
              <Link to="/partnership" onClick={() => { handleSoundClick(); setMobileMenuOpen(false); }} style={{ fontSize: '2rem', fontWeight: 700, color: 'white', textDecoration: 'none' }}>Partners</Link>
              <Link to="/about" onClick={() => { handleSoundClick(); setMobileMenuOpen(false); }} style={{ fontSize: '2rem', fontWeight: 700, color: 'white', textDecoration: 'none' }}>About</Link>
              <Link to="/case-studies" onClick={() => { handleSoundClick(); setMobileMenuOpen(false); }} style={{ fontSize: '2rem', fontWeight: 700, color: 'white', textDecoration: 'none' }}>Cases</Link>
              <Link to="/contact" onClick={() => { handleSoundClick(); setMobileMenuOpen(false); }} style={{ fontSize: '2rem', fontWeight: 700, color: 'white', textDecoration: 'none' }}>Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <footer className="footer-v2">
        <div className="container">
          <div className="footer-top">
            <div style={{ maxWidth: '300px' }}>
              <Link to="/" className="nav-logo" style={{ marginBottom: '16px', display: 'flex', textDecoration: 'none' }} onClick={handleSoundClick}>
                <div className="logo-icon">B</div>
                <span style={{ color: 'white' }}>Bi-Polar Factory</span>
              </Link>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                The new standard for high-performance agentic collaboration and software development.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '60px' }}>
              <div className="footer-col">
                <h4>LAB</h4>
                <Link to="/products" onClick={handleSoundClick}>Products</Link>
                <Link to="/partnership" onClick={handleSoundClick}>Partners</Link>
              </div>
              <div className="footer-col">
                <h4>COMPANY</h4>
                <Link to="/about" onClick={handleSoundClick}>About</Link>
                <Link to="/case-studies" onClick={handleSoundClick}>Cases</Link>
                <Link to="/contact" onClick={handleSoundClick}>Contact</Link>
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
