import React from 'react'
import { motion } from 'framer-motion'
import { soundEngine } from '../utils/soundEngine'

const GlassCard = ({ children, className = "" }) => {
  const handleClick = () => {
    soundEngine.playClick()
  }

  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.02 }}
      onClick={handleClick}
      className={`glass-card ${className}`}
    >
      <div className="glass-glow"></div>
      {children}
    </motion.div>
  )
}

export default GlassCard
