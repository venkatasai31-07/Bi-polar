import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'

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

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="glow-orb-top"></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <motion.div variants={fadeInUp} className="hero-badge">
            <Sparkles size={14} />
            <span>Announcing our Private Beta</span>
          </motion.div>

          <motion.h1 variants={fadeInUp}>
            Bi-Polar Factory is the new <br />
            standard for <span className="text-gradient">collaboration</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="hero-description">
            Chat, code, cloud, deployments, and more. All seamlessly integrated into a single high-performance agentic laboratory.
          </motion.p>

          <motion.form variants={fadeInUp} className="hero-cta-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email address" required />
            <button type="submit" className="btn-gradient">
              Join waitlist
            </button>
          </motion.form>

          {/* High Fidelity App Mockup Window */}
          <motion.div 
            variants={fadeInUp}
            className="app-preview-wrapper"
          >
            <div className="app-preview">
              <div className="app-header">
                <div className="app-dot"></div>
                <div className="app-dot"></div>
                <div className="app-dot"></div>
              </div>
              <div className="app-body">
                <div className="app-sidebar desktop-only">
                  <div className="app-sidebar-item short"></div>
                  <div className="app-sidebar-item"></div>
                  <div className="app-sidebar-item active"></div>
                  <div className="app-sidebar-item short"></div>
                  <div className="app-sidebar-item"></div>
                </div>
                <div className="app-main">
                  <div className="app-hero-element"></div>
                  <div style={{ display: 'flex', gap: '24px' }}>
                    <div className="app-hero-card"></div>
                    <div className="app-hero-card"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default Hero
