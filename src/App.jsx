import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { 
  Zap, 
  Cpu, 
  Eye, 
  Terminal, 
  Globe, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Mail,
  Linkedin,
  Twitter,
  Github,
  Menu,
  X,
  Code2
} from 'lucide-react'
import './index.css'

/* ======== ANIMATION VARIANTS ======== */
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

/* ======== COMPONENTS ======== */

const GlassCard = ({ children, className = "" }) => (
  <motion.div 
    whileHover={{ y: -10, scale: 1.02 }}
    className={`glass-card ${className}`}
  >
    <div className="glass-glow"></div>
    {children}
  </motion.div>
)

const Navbar = ({ scrolled, onMobileToggle }) => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="container nav-inner">
        <a href="#" className="nav-logo">
          <div className="logo-icon">B</div>
          <span>Bipolar Factory</span>
        </a>
        
        <div className="nav-links desktop-only">
          <a href="#about">ABOUT</a>
          <a href="#services">SERVICES</a>
          <a href="#projects">PROJECTS</a>
          <a href="#case-studies">CASES</a>
        </div>

        <div className="nav-actions">
          <a href="#contact" className="nav-cta desktop-only">START A PROJECT</a>
          <button className="mobile-toggle" onClick={onMobileToggle}>
            <Menu size={24} />
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

const Hero = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="hero" id="hero">
      <motion.div 
        style={{ y: y1, opacity }}
        className="hero-background"
      >
        <div className="hero-glow-main"></div>
        <div className="hero-grid"></div>
      </motion.div>

      <div className="container">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="hero-content"
        >
          <motion.div variants={fadeInUp} className="hero-badge">
            <Zap size={14} fill="currentColor" />
            <span>AGENTIC AI & PRODUCT LAB</span>
          </motion.div>

          <motion.h1 variants={fadeInUp}>
            WE BUILD THE <span className="text-red">IMPOSSIBLE</span> <br />
            WHILE OTHERS <span className="text-outline">OVERTHINK.</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="hero-description">
            A collective of scrappy engineers, designers, and visionaries 
            building high-impact technology solutions that actually move the needle.
          </motion.p>

          <motion.div variants={fadeInUp} className="hero-buttons">
            <a href="#projects" className="btn-primary">
              EXPLORE OUR LAB <ArrowRight size={18} />
            </a>
            <a href="#about" className="btn-secondary">
              OUR MANIFESTO
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="scroll-indicator"
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </motion.div>
    </section>
  )
}

/* ======== MAIN APP ======== */
function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      {/* Background Orbs */}
      <div className="bg-effects">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
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
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="mobile-menu-overlay"
          >
            <button className="close-btn" onClick={() => setMobileMenuOpen(false)}>
              <X size={32} />
            </button>
            <div className="mobile-links">
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>ABOUT</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>SERVICES</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)}>PROJECTS</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>CONTACT</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Hero />

      {/* Marquee Section */}
      <div className="marquee">
        <div className="marquee-content">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="marquee-item">
              BIPOLAR FACTORY // AI FIRST // SCAPPY EXECUTION // CREATIVE LAB // 
            </span>
          ))}
        </div>
      </div>

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
              <p>
                Founded on the principle that technology should be a multiplier for human potential, 
                we've evolved from a small collective into a powerhouse of digital transformation.
              </p>
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

      {/* Case Studies / Success Section */}
      <section className="casestudies-section" id="case-studies">
        <div className="container">
          <div className="section-header">
            <div className="section-label">CHASE STUDIES</div>
            <h2>REAL <span className="text-red">IMPACT</span></h2>
          </div>
          
          <div className="cases-grid">
            {caseStudies.map((cs, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="case-card-v2"
              >
                <div className="case-tag">{cs.tag}</div>
                <h3>{cs.title}</h3>
                <p>{cs.description}</p>
                <a href="#" className="case-link-v2">READ STORY <ArrowRight size={16} /></a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="contact">
        <div className="container">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="cta-box-v2"
          >
            <h2>READY TO <span className="text-red">VIBECODE</span> YOUR NEXT BIG IDEA?</h2>
            <p>Let's build something that matters. No rigid briefs, just vision and execution.</p>
            <div className="cta-btns">
              <a href="mailto:hello@bipolarfactory.com" className="btn-primary-big">
                SEND AN ENQUIRY
              </a>
              <a href="#" className="btn-secondary-big">
                VIEW OUR CAREERS
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
              <p>Harnessing technology for the <br />betterment of society.</p>
            </div>
            <div className="footer-links-grid">
              <div className="footer-col">
                <h4>LAB</h4>
                <a href="#">Products</a>
                <a href="#">AI Research</a>
                <a href="#">Open Source</a>
              </div>
              <div className="footer-col">
                <h4>COMPANY</h4>
                <a href="#">Manifesto</a>
                <a href="#">Careers</a>
                <a href="#">Contact</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom-v2">
            <p>© 2026 BIPOLAR FACTORY. BUILT WITH VIBE.</p>
            <div className="social-links">
              <a href="#"><Linkedin size={20} /></a>
              <a href="#"><Twitter size={20} /></a>
              <a href="#"><Github size={20} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* ======== DATA ======== */
const services = [
  {
    icon: <Cpu size={32} className="text-red" />,
    title: 'AGENTIC AI SYSTEMS',
    description: 'We build autonomous AI agents that don\'t just chat, but execute complex multi-step workflows for your business.'
  },
  {
    icon: <Globe size={32} className="text-red" />,
    title: 'DIGITAL TRANSFORMATION',
    description: 'Modernizing legacy architectures into scalable, cloud-native ecosystems built for the next decade.'
  },
  {
    icon: <Code2 size={32} className="text-red" />,
    title: 'CUSTOM PRODUCT LAB',
    description: 'From zero-to-one product development with a focus on speed-to-market and high-fidelity user experiences.'
  },
  {
    icon: <Users size={32} className="text-red" />,
    title: 'TECH PARTNERSHIP',
    description: 'Acting as your fractional CTO and engineering team, we align our success strictly with your growth.'
  }
]

const caseStudies = [
  {
    tag: 'GOVERNMENT',
    title: 'AUTOMATED VOTE COUNTING',
    description: 'A transparent, AI-powered system for the Bihar Election Commission ensuring democratic integrity.'
  },
  {
    tag: 'LOGISTICS',
    title: 'INDOOR GPS FOR WEAVING',
    description: 'Real-time precision tracking within manufacturing units to optimize industrial productivity.'
  },
  {
    tag: 'SUSTAINABILITY',
    title: 'EPR WASTE PORTAL',
    description: 'Connecting waste management stakeholders through a unified, transparent digital platform.'
  }
]

export default App

