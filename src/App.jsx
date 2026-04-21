import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  CheckCircle2, 
  Mail,
  X,
  ArrowRight
} from 'lucide-react'

// Modular Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GlassCard from './components/GlassCard'
import { LinkedinIcon, TwitterIcon, GithubIcon } from './components/SocialIcons'

// Data & Utils
import { services, caseStudies } from './data/siteData'
import { soundEngine } from './utils/soundEngine'
import './index.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    
    // Play a subtle background hum when the lab "powers on"
    // soundEngine.startStableHum(); // Optional: User can toggle

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSoundClick = () => {
    soundEngine.playClick()
  }

  return (
    <div className="app">
      {/* Background Effects */}
      <div className="bg-effects">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="grid-overlay"></div>
      </div>

      <Navbar scrolled={scrolled} onMobileToggle={() => setMobileMenuOpen(true)} />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="mobile-menu-overlay"
          >
            <button className="close-btn" onClick={() => { handleSoundClick(); setMobileMenuOpen(false); }}>
              <X size={32} />
            </button>
            <div className="mobile-links">
              <a href="#about" onClick={() => { handleSoundClick(); setMobileMenuOpen(false); }}>ABOUT</a>
              <a href="#services" onClick={() => { handleSoundClick(); setMobileMenuOpen(false); }}>SERVICES</a>
              <a href="#projects" onClick={() => { handleSoundClick(); setMobileMenuOpen(false); }}>PROJECTS</a>
              <a href="#contact" onClick={() => { handleSoundClick(); setMobileMenuOpen(false); }}>CONTACT</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Hero />

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="about-grid">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="about-text"
            >
              <div className="section-label">OUR MANIFESTO</div>
              <h2>WE DON'T JUST <span className="text-red">CODE.</span> WE CREATE <span className="text-red">MOMENTUM.</span></h2>
              <div className="points-list">
                <div className="point">
                  <CheckCircle2 size={20} className="text-red" />
                  <span>Problem First, Code Second</span>
                </div>
                <div className="point">
                  <CheckCircle2 size={20} className="text-red" />
                  <span>Radical Transparency in Build</span>
                </div>
                <div className="point">
                  <CheckCircle2 size={20} className="text-red" />
                  <span>Speed is a Feature</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="about-visual"
            >
              <div className="code-card">
                <div className="code-header">
                  <div className="dot red"></div>
                  <div className="dot yellow"></div>
                  <div className="dot green"></div>
                </div>
                <div className="code-body">
                  <pre>
                    <code>
{`class BipolarFactory {
  constructor() {
    this.focus = "Human Centric AI";
    this.style = "Scrappy & Bold";
  }

  async solve(problem) {
    const solution = await think(problem);
    return execute(solution);
  }
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="section-header">
            <div className="section-label">WHAT WE DO</div>
            <h2>ENGINEERING <span className="text-red">EDGE</span></h2>
          </div>

          <div className="services-grid">
            {services.map((service, i) => (
              <GlassCard key={i} className="service-card">
                <div className="service-icon-box">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="contact">
        <div className="container">
          <motion.div className="cta-box-v2">
            <h2>READY TO <span className="text-red">VIBECODE?</span></h2>
            <div className="cta-btns">
              <a href="mailto:hello@bipolarfactory.com" className="btn-primary-big" onClick={handleSoundClick}>
                SEND ENQUIRY
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-v2">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="nav-logo">
                <div className="logo-icon">B</div>
                <span>Bipolar Factory</span>
              </div>
              <p>Harnessing technology for the betterment of society.</p>
            </div>
            <div className="footer-links-grid">
              <div className="footer-col">
                <h4>LAB</h4>
                <a href="#" onClick={handleSoundClick}>Products</a>
                <a href="#" onClick={handleSoundClick}>AI Research</a>
              </div>
              <div className="footer-col">
                <h4>COMPANY</h4>
                <a href="#" onClick={handleSoundClick}>Careers</a>
                <a href="#" onClick={handleSoundClick}>Contact</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom-v2">
            <p>© 2026 BIPOLAR FACTORY. BUILT WITH VIBE.</p>
            <div className="social-links">
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
