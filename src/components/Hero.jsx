import React, { useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Zap, ArrowRight } from 'lucide-react'
import { soundEngine } from '../utils/soundEngine'

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
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    // Play transition sound on mount (Vibe)
    soundEngine.playTransition()
  }, [])

  const handleInteraction = () => {
    soundEngine.playClick()
  }

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
            WE BUILD THE <span className="text-green">IMPOSSIBLE</span> <br />
            WHILE OTHERS <span className="text-outline">OVERTHINK.</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="hero-description">
            A collective of scrappy engineers, designers, and visionaries 
            building high-impact technology solutions that actually move the needle.
          </motion.p>

          <motion.div variants={fadeInUp} className="hero-buttons">
            <a href="#projects" className="btn-primary" onClick={handleInteraction}>
              EXPLORE OUR LAB <ArrowRight size={18} />
            </a>
            <a href="#about" className="btn-secondary" onClick={handleInteraction}>
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

export default Hero
