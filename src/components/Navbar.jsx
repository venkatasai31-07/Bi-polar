import React from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'
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
        <Link to="/" className="nav-logo" onClick={handleClick}>
          <div className="logo-icon">B</div>
          <span className="desktop-only">Bi-Polar Factory</span>
        </Link>
        
        <div className="nav-links desktop-only">
          <Link to="/products" onClick={handleClick}>Products</Link>
          <Link to="/partnership" onClick={handleClick}>Technology Partnership</Link>
          <Link to="/about" onClick={handleClick}>About</Link>
          <a href="https://bipolarfactory.zohorecruit.in/jobs/Careers" onClick={handleClick} target="_blank" rel="noreferrer">Careers</a>
          <Link to="/case-studies" onClick={handleClick}>Case Studies</Link>
          <Link to="/contact" onClick={handleClick}>Contact Us</Link>
        </div>

        <div className="nav-actions">
          <Link to="/contact" className="nav-cta desktop-only" onClick={handleClick}>Join waitlist</Link>
          <button className="mobile-toggle" onClick={() => { handleClick(); onMobileToggle(); }}>
            <Menu size={20} />
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
