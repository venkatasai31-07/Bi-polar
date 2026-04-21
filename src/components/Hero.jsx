import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, LayoutDashboard, Database, Settings, Users, Activity, Search, BarChart3, Bell } from 'lucide-react'

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
                <div style={{ display: 'flex', gap: '8px', marginRight: '24px' }}>
                  <div className="app-dot"></div>
                  <div className="app-dot"></div>
                  <div className="app-dot"></div>
                </div>
                <div style={{ flex: 1, height: '24px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', padding: '0 12px' }}>
                  <Search size={12} style={{ color: 'var(--text-dim)', marginRight: '8px' }} />
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>Search analytics...</span>
                </div>
                <div style={{ display: 'flex', gap: '16px', marginLeft: '24px' }}>
                  <Bell size={14} style={{ color: 'var(--text-dim)' }} />
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'linear-gradient(to bottom, #9D4EDD, #FF00FF)' }}></div>
                </div>
              </div>
              <div className="app-body">
                <div className="app-sidebar desktop-only">
                  <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '24px', height: '24px', background: 'var(--accent-purple)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifySelf: 'center' }}>
                      <Activity size={14} style={{ margin: '0 auto', color: 'white' }} />
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>OLY DASH</span>
                  </div>
                  
                  <div className="app-sidebar-item active">
                    <LayoutDashboard size={14} />
                    <span>Overview</span>
                  </div>
                  <div className="app-sidebar-item">
                    <BarChart3 size={14} />
                    <span>Analytics</span>
                  </div>
                  <div className="app-sidebar-item">
                    <Users size={14} />
                    <span>Customers</span>
                  </div>
                  <div className="app-sidebar-item">
                    <Database size={14} />
                    <span>Inventory</span>
                  </div>
                  <div className="app-sidebar-item" style={{ marginTop: 'auto' }}>
                    <Settings size={14} />
                    <span>Settings</span>
                  </div>
                </div>
                <div className="app-main">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Store Performance</h4>
                      <p style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>Real-time growth across all regions</p>
                    </div>
                    <div className="btn-gradient" style={{ padding: '6px 12px', fontSize: '0.7rem' }}>Export PDF</div>
                  </div>

                  <div className="app-hero-element" style={{ display: 'flex', alignItems: 'center', padding: '0 20px', gap: '40px' }}>
                    <div>
                      <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)', display: 'block' }}>DAILY VISITS</span>
                      <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>12,482</span>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)', display: 'block' }}>AVG. DWELL TIME</span>
                      <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>42m 10s</span>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)', display: 'block' }}>CONVERSION</span>
                      <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#27C93F' }}>+12.4%</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '24px' }}>
                    <div className="app-hero-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 600 }}>Traffic Path Analysis</span>
                      <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
                        {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                          <div key={i} style={{ flex: 1, height: `${h}%`, background: 'rgba(157, 78, 221, 0.4)', borderRadius: '4px 4px 0 0' }}></div>
                        ))}
                      </div>
                    </div>
                    <div className="app-hero-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                       <span style={{ fontSize: '0.7rem', fontWeight: 600 }}>Regional Metrics</span>
                       <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
                         {[
                           { name: 'North Region', val: 75, color: '#9D4EDD' },
                           { name: 'South Region', val: 92, color: '#FF00FF' },
                           { name: 'West Region', val: 45, color: '#7873F5' }
                         ].map((reg, i) => (
                           <div key={i}>
                             <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6rem', marginBottom: '4px' }}>
                               <span>{reg.name}</span>
                               <span>{reg.val}%</span>
                             </div>
                             <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px' }}>
                               <div style={{ height: '100%', width: `${reg.val}%`, background: reg.color, borderRadius: '2px' }}></div>
                             </div>
                           </div>
                         ))}
                       </div>
                    </div>
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
