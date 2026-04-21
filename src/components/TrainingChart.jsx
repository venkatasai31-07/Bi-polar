import { useEffect, useState } from 'react'

function TrainingChart({ isTraining, isUnstable, realLoss, realEpoch }) {
  const [data, setData] = useState({ loss: [], accuracy: [] })

  useEffect(() => {
    if (isTraining && realEpoch === 0) {
      setData({ loss: [], accuracy: [] })
    }
  }, [isTraining, realEpoch])

  useEffect(() => {
    if (isTraining && realLoss !== null) {
      const maxEpochs = 20
      const progress = (realEpoch / maxEpochs) * 100
      
      // Calculate Accuracy based on Loss for visualization (inverse relationship)
      const simulatedAcc = Math.min(99, (1 - realLoss) * 100 + (Math.random() * 2))

      setData(prev => ({
        loss: [...prev.loss, `${progress},${100 - (realLoss * 100)}`],
        accuracy: [...prev.accuracy, `${progress},${100 - simulatedAcc}`]
      }))
    }
  }, [realLoss, realEpoch, isTraining])

  if (!isTraining && data.loss.length === 0) return null

  return (
    <div className="card" style={{ background: '#000', padding: '1.5rem', marginTop: '1.5rem', border: '1px solid #333' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
        <span style={{ color: '#ff4444' }}>● Loss</span>
        <span style={{ color: '#00ffcc' }}>● Accuracy</span>
      </div>
      <svg width="100%" height="120" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
        {/* Grid Lines */}
        <line x1="0" y1="0" x2="0" y2="100" stroke="#222" strokeWidth="0.5" />
        <line x1="0" y1="100" x2="100" y2="100" stroke="#222" strokeWidth="0.5" />
        
        {/* Accuracy Path */}
        <path
          d={`M 0,100 L ${data.accuracy.join(' L ')}`}
          fill="none"
          stroke="#00ffcc"
          strokeWidth="1.5"
          style={{ transition: 'all 0.2s ease' }}
        />
        
        {/* Loss Path */}
        <path
          d={`M 0,0 L ${data.loss.join(' L ')}`}
          fill="none"
          stroke="#ff4444"
          strokeWidth="1.5"
          style={{ transition: 'all 0.2s ease' }}
        />
      </svg>
      <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.6rem', opacity: 0.4 }}>
        {isUnstable ? 'TRAINING STATUS: STOCHASTIC FLUCTUATION' : 'REAL-TIME OPTIMIZATION TRACE'}
      </div>
    </div>
  )
}

export default TrainingChart
