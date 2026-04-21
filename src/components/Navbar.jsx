function Navbar({ isUnstable, onToggle }) {
  return (
    <nav>
      <div className="logo">
        <h1>Bipolar <span>{isUnstable ? 'Chaos' : 'Logic'}</span></h1>
      </div>
      <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <a href="#hero" style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Home</a>
        <a href="#playground" style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Lab</a>
        <div 
          onClick={onToggle}
          className="mode-switch"
          style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 0.8rem', 
            borderRadius: '100px',
            cursor: 'pointer',
            background: isUnstable ? 'var(--primary)' : 'var(--surface-secondary)',
            border: '1px solid var(--border)',
            fontSize: '0.75rem',
            fontWeight: 'bold',
            color: isUnstable ? '#000' : 'var(--text)'
          }}
        >
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: isUnstable ? '#000' : 'var(--primary)', boxShadow: isUnstable ? 'none' : '0 0 10px var(--primary)' }}></span>
          {isUnstable ? 'UNSTABLE' : 'STABLE'}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
