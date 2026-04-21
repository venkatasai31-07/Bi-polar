import { useEffect, useState, useRef } from 'react'

function EntropyWave({ isUnstable }) {
  const [points, setPoints] = useState([])
  const frameRef = useRef(0)

  useEffect(() => {
    const generatePoints = () => {
      const newPoints = []
      const count = 20
      const amplitude = isUnstable ? 40 : 5
      const frequency = isUnstable ? 0.2 : 0.05
      
      for (let i = 0; i <= count; i++) {
        const x = (i / count) * 100
        const y = 50 + Math.sin(i * frequency + frameRef.current * 0.1) * amplitude
        newPoints.push(`${x},${y}`)
      }
      setPoints(newPoints)
      frameRef.current += 1
    }

    const interval = setInterval(generatePoints, 50)
    return () => clearInterval(interval)
  }, [isUnstable])

  return (
    <div style={{ width: '100%', height: '100px', background: 'var(--surface-secondary)', borderRadius: '12px', overflow: 'hidden', position: 'relative', marginTop: '1rem' }}>
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          d={`M 0,100 L ${points.join(' L ')} L 100,100 Z`}
          fill={isUnstable ? 'rgba(0, 255, 204, 0.2)' : 'rgba(99, 102, 241, 0.1)'}
          stroke={isUnstable ? 'var(--primary)' : 'var(--text-dim)'}
          strokeWidth="0.5"
          style={{ transition: 'stroke 0.3s ease, fill 0.3s ease' }}
        />
      </svg>
      <div style={{ position: 'absolute', top: '10px', left: '15px', fontSize: '0.6rem', fontWeight: 'bold', textTransform: 'uppercase', opacity: 0.5 }}>
        {isUnstable ? 'Entropy Waveform' : 'System Stability'}
      </div>
    </div>
  )
}

export default EntropyWave
