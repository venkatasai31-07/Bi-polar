import { useState, useRef } from 'react'
import aiResponses from '../data/mockData'
import { soundEngine } from '../utils/soundEngine'
import { analyzeVibe } from '../utils/sentiment'

function AIPlayground({ isUnstable, onToggle }) {
  const [userInput, setUserInput] = useState('')
  const [output, setOutput] = useState(null)
  const [isThinking, setIsThinking] = useState(false)
  const [image, setImage] = useState(null)
  const [predictions, setPredictions] = useState([])
  const fileInputRef = useRef(null)
  const imgRef = useRef(null)

  const handleTextChange = (e) => {
    const val = e.target.value
    setUserInput(val)
    
    // AUTONOMOUS VIBE CHECK
    const vibe = analyzeVibe(val)
    if (vibe === 'chaos' && !isUnstable) onToggle()
    if (vibe === 'logic' && isUnstable) onToggle()
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setImage(event.target.result)
        setPredictions([])
      }
      reader.readAsDataURL(file)
    }
  }

  const detectObjects = async () => {
    if (!imgRef.current) return
    setIsThinking(true)
    soundEngine.playClick()
    setOutput(<p className="animate-pulse">Loading Computer Vision Model...</p>)

    try {
      const model = await window.cocoSsd.load()
      const preds = await model.detect(imgRef.current)
      setPredictions(preds)
      setIsThinking(false)
      setOutput(null)
    } catch (err) {
      setOutput(<p>Error loading CV model.</p>)
      setIsThinking(false)
    }
  }

  const getAIResponse = (input) => {
    const lowerInput = input.toLowerCase()
    for (let item of aiResponses) {
      for (let keyword of item.keywords) {
        if (lowerInput.includes(keyword)) return item
      }
    }
    return null
  }

  const handleRunAI = () => {
    if (userInput.trim() === '') return
    setIsThinking(true)
    soundEngine.playClick()
    setOutput(<p className="animate-pulse">{isUnstable ? 'CALCULATING ENTROPY...' : 'AI is thinking...'}</p>)

    setTimeout(() => {
      const result = getAIResponse(userInput)
      setIsThinking(false)

      if (result) {
        setOutput(
          <div className="fade-in">
            <p><strong>{isUnstable ? 'GHOST MODEL:' : 'Model:'}</strong> {isUnstable ? result.model.replace('Stable', 'Void') : result.model}</p>
            <p><strong>{isUnstable ? 'PROBABILITY:' : 'Accuracy:'}</strong> <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{result.accuracy}</span></p>
            {isUnstable && <p style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--primary)', opacity: 0.8 }}>"{result.chaosResponse}"</p>}
          </div>
        )
      } else {
        setOutput(<p>{isUnstable ? 'NO PATTERN DETECTED IN THE VOID.' : 'No exact match found. Suggesting Hybrid Model.'}</p>)
      }
    }, 1000)
  }

  return (
    <section id="playground">
      <div className="card">
        <h2>{isUnstable ? 'Synthetic Cognition Hub' : 'AI Playground'}</h2>
        <p style={{ marginBottom: '2rem', opacity: 0.7 }}>
          {isUnstable ? 'The system now responds to your vibe. Chaos is listening.' : 'Experience real-time AI inference and autonomous mode switching.'}
        </p>
        
        <div className="flex-group" style={{ marginBottom: '2rem' }}>
          <input 
            type="text" 
            value={userInput}
            onChange={handleTextChange}
            placeholder={isUnstable ? "Speak to the void..." : "Ask about AI problems..."} 
          />
          <button onClick={handleRunAI}>Analyze Intent</button>
        </div>

        {/* IMAGE ANALYSIS LAB */}
        <div className="image-lab" style={{ border: '1px dashed var(--border)', padding: '1.5rem', borderRadius: '16px', background: 'var(--surface-secondary)' }}>
          <h3>Computer Vision Lab</h3>
          <p style={{ fontSize: '0.8rem', opacity: 0.5, marginBottom: '1rem' }}>Upload any image for real-time local object detection.</p>
          
          <input type="file" ref={fileInputRef} onChange={handleImageUpload} style={{ display: 'none' }} accept="image/*" />
          <div className="flex-group">
            <button onClick={() => fileInputRef.current.click()} style={{ background: 'var(--surface)', color: 'var(--text)', border: '1px solid var(--border)' }}>
              {image ? 'Change Image' : 'Upload Image'}
            </button>
            {image && <button onClick={detectObjects}>Run Vision Inference</button>}
          </div>

          {image && (
            <div style={{ marginTop: '1.5rem', position: 'relative', textAlign: 'center' }}>
              <img 
                ref={imgRef} 
                src={image} 
                alt="Upload" 
                style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: 'var(--shadow)' }} 
              />
              {predictions.map((p, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  border: '2px solid var(--primary)',
                  left: `${(p.bbox[0] / imgRef.current.naturalWidth) * 100}%`,
                  top: `${(p.bbox[1] / imgRef.current.naturalHeight) * 100}%`,
                  width: `${(p.bbox[2] / imgRef.current.naturalWidth) * 100}%`,
                  height: `${(p.bbox[3] / imgRef.current.naturalHeight) * 100}%`,
                  pointerEvents: 'none'
                }}>
                  <span style={{ position: 'absolute', top: '-20px', left: 0, background: 'var(--primary)', color: '#000', fontSize: '0.6rem', padding: '2px 5px', fontWeight: 'bold' }}>
                    {p.class} ({Math.round(p.score * 100)}%)
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div id="aiOutput" style={{ marginTop: '2rem' }}>
          {output || <p style={{ opacity: 0.5 }}>System idle. Awaiting neural input...</p>}
        </div>
      </div>
    </section>
  )
}

export default AIPlayground
