import React from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { soundEngine } from '../utils/soundEngine'

const Navbar = ({ onMobileToggle }) => {
  const handleClick = () => {
    soundEngine.playClick()
  }

  return (
    <motion.nav 
      initial={{ y: -100, x: '-50%' }}
      animate={{ y: 0, x: '-50%' }}
      className="navbar"
    >
      <div className="nav-inner">
        <a href="#" className="nav-logo" onClick={handleClick}>
          <div className="logo-icon">B</div>
          <span className="desktop-only">Bi-Polar Factory</span>
        </a>
        
        <div className="nav-links desktop-only">
          <a href="#about" onClick={handleClick}>About</a>
          <a href="#services" onClick={handleClick}>Services</a>
          <a href="#projects" onClick={handleClick}>Changelog</a>
        </div>

        <div className="nav-actions">
          <a href="#contact" className="nav-cta desktop-only" onClick={handleClick}>Join waitlist</a>
          <button className="mobile-toggle" onClick={() => { handleClick(); onMobileToggle(); }}>
            <Menu size={20} />
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
