import React from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { soundEngine } from '../utils/soundEngine'

const Navbar = ({ scrolled, onMobileToggle }) => {
  const handleClick = () => {
    soundEngine.playClick()
  }

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="container nav-inner">
        <a href="#" className="nav-logo" onClick={handleClick}>
          <div className="logo-icon">B</div>
          <span>Bipolar Factory</span>
        </a>
        
        <div className="nav-links desktop-only">
          <a href="#about" onClick={handleClick}>ABOUT</a>
          <a href="#services" onClick={handleClick}>SERVICES</a>
          <a href="#projects" onClick={handleClick}>PROJECTS</a>
          <a href="#case-studies" onClick={handleClick}>CASES</a>
        </div>

        <div className="nav-actions">
          <a href="#contact" className="nav-cta desktop-only" onClick={handleClick}>START A PROJECT</a>
          <button className="mobile-toggle" onClick={() => { handleClick(); onMobileToggle(); }}>
            <Menu size={24} />
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
