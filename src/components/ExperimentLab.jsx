import { useState } from 'react'
import { soundEngine } from '../utils/soundEngine'
import EntropyWave from './EntropyWave'

function ExperimentLab({ isUnstable }) {
  const [labOutput, setLabOutput] = useState(null)

  const generateMetrics = () => {
    return {
      accuracy: (90 + Math.random() * 10).toFixed(2) + "%",
      latency: (20 + Math.random() * 20).toFixed(0) + "ms",
      modelSize: (10 + Math.random() * 20).toFixed(1) + "MB"
    }
  }

  const handleRunModel = () => {
    soundEngine.playClick()
    setLabOutput(<p className="animate-pulse">Executing simulation...</p>)
    setTimeout(() => {
      const metrics = generateMetrics()
      setLabOutput(
        <div className="fade-in">
          <p><strong>Status:</strong> Execution Successful</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '1rem' }}>
            <div className="card" style={{ padding: '1rem', textAlign: 'center', background: 'var(--bg)' }}>
              <small>Accuracy</small>
              <h4 style={{ color: 'var(--primary)' }}>{metrics.accuracy}</h4>
            </div>
            <div className="card" style={{ padding: '1rem', textAlign: 'center', background: 'var(--bg)' }}>
              <small>Latency</small>
              <h4 style={{ color: 'var(--primary)' }}>{metrics.latency}</h4>
            </div>
            <div className="card" style={{ padding: '1rem', textAlign: 'center', background: 'var(--bg)' }}>
              <small>Size</small>
              <h4 style={{ color: 'var(--primary)' }}>{metrics.modelSize}</h4>
            </div>
          </div>
        </div>
      )
    }, 1000)
  }

  const handleStressTest = () => {
    soundEngine.playClick()
    setLabOutput(<p className="animate-pulse">Loading stress vectors...</p>)
    setTimeout(() => {
      setLabOutput(
        <div className="fade-in">
          <p><strong>Stability Analysis Complete</strong></p>
          <ul style={{ marginTop: '0.5rem', opacity: 0.8 }}>
            <li>• Throughput: 520 req/s</li>
            <li>• P99 Latency: 42ms</li>
            <li>• Error Rate: 0.02%</li>
          </ul>
        </div>
      )
    }, 1200)
  }

  const handleOptimizeSystem = () => {
    soundEngine.playClick()
    setLabOutput(<p className="animate-pulse">Calculating optimization paths...</p>)
    setTimeout(() => {
      const metrics = generateMetrics()
      setLabOutput(
        <div className="fade-in">
          <p><strong>Optimization Applied</strong></p>
          <p style={{ opacity: 0.8, marginTop: '0.5rem' }}>Efficiency boosted by <span style={{ color: 'var(--primary)' }}>+28%</span> using dynamic weight pruning.</p>
        </div>
      )
    }, 1200)
  }

  return (
    <section id="lab">
      <div className="card">
        <h2>{isUnstable ? 'Neural Singularity Lab' : 'Experiment Lab'}</h2>
        <p style={{ marginBottom: '1rem', opacity: 0.7 }}>
          {isUnstable ? 'Executing non-standard protocols. Safety limits bypassed.' : 'Test system stability and performance in real-time environments.'}
        </p>
        
        <EntropyWave isUnstable={isUnstable} />

        <div className="flex-group" style={{ marginTop: '2rem' }}>
          <button onClick={handleRunModel}>{isUnstable ? 'Initiate Collapse' : 'Run Experiment'}</button>
          <button 
            onClick={handleStressTest} 
            style={{ background: 'var(--surface-secondary)', color: 'var(--text)', border: '1px solid var(--border)' }}
          >
            {isUnstable ? 'Entropy Test' : 'Stress Test'}
          </button>
          <button onClick={handleOptimizeSystem}>{isUnstable ? 'Mutate Logic' : 'Auto-Optimize'}</button>
        </div>

        <div id="labOutput" style={{ minHeight: '150px', background: 'var(--surface)', borderStyle: 'dashed', borderColor: isUnstable ? 'var(--primary)' : 'var(--border)' }}>
          {labOutput || <p style={{ opacity: 0.3 }}>{isUnstable ? 'Waiting for the void to speak...' : 'Initiate a test to see metrics...'}</p>}
        </div>
      </div>
    </section>
  )
}

export default ExperimentLab
