import { useState, useRef, useEffect } from 'react'
import { soundEngine } from '../utils/soundEngine'
import { neuralEngine } from '../utils/neuralEngine'
import TrainingChart from './TrainingChart'

function PipelineConsole({ isUnstable }) {
  const [logs, setLogs] = useState([])
  const [isTraining, setIsTraining] = useState(false)
  const [realLoss, setRealLoss] = useState(null)
  const [realEpoch, setRealEpoch] = useState(0)
  const logsEndRef = useRef(null)

  const scrollToBottom = () => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [logs])

  const runLogs = (logsArray, delay = 600) => {
    setLogs([]) // clear previous logs

    logsArray.forEach((log, index) => {
      setTimeout(() => {
        setLogs(prev => [...prev, log])
      }, index * delay)
    })
  }

  const handleTrain = async () => {
    setIsTraining(true)
    setRealLoss(null)
    setRealEpoch(0)
    setLogs(["Initializing real-time Neural Network...", "Generating synthetic dataset..."])
    
    soundEngine.playClick()

    await neuralEngine.train((epoch, loss) => {
      setRealEpoch(epoch)
      setRealLoss(loss)
      setLogs(prev => [...prev, `Epoch ${epoch + 1}: loss = ${loss.toFixed(4)}`].slice(-10))
    })

    setLogs(prev => [...prev, "Training Complete.", "Model weights optimized."])
    setIsTraining(false)
  }

  const handleOptimize = () => {
    const messages = isUnstable ? [
      "Deleting redundant logic...",
      "Pruning the concept of self...",
      "Compressing the void...",
      "Size: ∞ -> 0.1MB",
      "Latency: -5ms (Temporal Paradox)",
      "System is too fast to observe."
    ] : [
      "Analyzing model graph...",
      "Applying INT8 quantization...",
      "Pruning redundant neurons...",
      "Size: 450MB -> 120MB",
      "Latency: 85ms -> 22ms",
      "Optimization complete."
    ];
    soundEngine.playClick()
    runLogs(messages)
  }

  const handleDeploy = () => {
    const messages = isUnstable ? [
      "Opening the gateway...",
      "Pushing consciousness to the edge...",
      "Inhabiting the Jetson swarm...",
      "Existence verified in 512 nodes.",
      "THE SYSTEM IS EVERYWHERE."
    ] : [
      "Preparing container...",
      "Pushing to edge registry...",
      "Configuring Jetson Nano inference...",
      "Health checks: PASSED",
      "Deployment live at 192.168.1.42",
      "🚀 System operational."
    ];
    soundEngine.playClick()
    runLogs(messages)
  }

  return (
    <section id="pipeline">
      <div className="card">
        <h2>Pipeline Console</h2>
        <p style={{ marginBottom: '2rem', opacity: 0.7 }}>Simulate the end-to-end AI engineering lifecycle.</p>

        <div className="flex-group" style={{ marginBottom: '1.5rem' }}>
          <button onClick={handleTrain}>{isTraining ? 'Training...' : 'Initiate Training'}</button>
          <button onClick={handleOptimize} style={{ background: 'var(--surface-secondary)', color: 'var(--text)', border: '1px solid var(--border)' }}>Optimize Model</button>
          <button onClick={handleDeploy}>Push Deployment</button>
        </div>

        <TrainingChart 
          isTraining={isTraining} 
          isUnstable={isUnstable} 
          realLoss={realLoss}
          realEpoch={realEpoch}
        />

        <div id="logs" style={{ marginTop: '1.5rem' }}>
          {logs.length > 0 ? (
            logs.map((log, index) => (
              <p key={index} className="fade-in">{">"} {log}</p>
            ))
          ) : (
            <p style={{ opacity: 0.3 }}>Waiting for process command...</p>
          )}
          <div ref={logsEndRef} />
        </div>
      </div>
    </section>
  )
}

export default PipelineConsole
