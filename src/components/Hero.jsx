import TextScrambler from './TextScrambler'

function Hero({ isUnstable, onToggle }) {
  return (
    <section id="hero">
      <h2>
        <TextScrambler 
          text={isUnstable 
            ? "Recursive Intelligence. Embracing Entropy." 
            : "Engineering AI Systems with Absolute Precision"} 
        />
      </h2>
      <p>
        {isUnstable 
          ? "The machines are dreaming in the noise. We are here to listen to the chaos and find the logic within the void."
          : "We build adaptive AI systems that evolve within strict safety bounds. Explore our standardized engineering dashboard."}
      </p>
      <div className="flex-group" style={{ justifyContent: 'center', marginTop: '2rem' }}>
        <button onClick={() => document.getElementById('playground').scrollIntoView({ behavior: 'smooth' })}>
          Enter Lab
        </button>
        <button 
          onClick={onToggle}
          style={{ 
            background: isUnstable ? '#fff' : '#000', 
            color: isUnstable ? '#000' : '#fff',
            border: isUnstable ? 'none' : '1px solid #333'
          }}
        >
          {isUnstable ? 'Switch to Logic' : 'Switch to Chaos'}
        </button>
      </div>
    </section>
  )
}

export default Hero
