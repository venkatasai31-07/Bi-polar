import { useState, useRef, useEffect } from 'react'
import { soundEngine } from '../utils/soundEngine'

function TerminalREPL({ isUnstable, onToggle }) {
  const [history, setHistory] = useState(['Bipolar OS v1.0.0 init...', 'Type "help" for commands.'])
  const [input, setInput] = useState('')
  const terminalRef = useRef(null)

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase()
      let response = ''
      
      soundEngine.playClick()

      if (cmd === 'help') {
        response = 'Available: help, status, mode --chaos, mode --logic, clear'
      } else if (cmd === 'status') {
        response = isUnstable ? 'SYSTEM_STATE: CRITICAL ENTROPY' : 'SYSTEM_STATE: NOMINAL'
      } else if (cmd === 'mode --chaos') {
        if (!isUnstable) {
          onToggle()
          response = 'Breaching logic gates... Chaos mode active.'
        } else {
          response = 'System is already in Chaos.'
        }
      } else if (cmd === 'mode --logic') {
        if (isUnstable) {
          onToggle()
          response = 'Restoring order... Logic mode active.'
        } else {
          response = 'System is already in Logic.'
        }
      } else if (cmd === 'clear') {
        setHistory([])
        setInput('')
        return
      } else {
        response = `Command not found: ${cmd}`
      }

      setHistory(prev => [...prev, `> ${input}`, response])
      setInput('')
    }
  }

  useEffect(() => {
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight)
  }, [history])

  return (
    <div className="card terminal-repl" style={{ 
      background: '#000', 
      color: isUnstable ? 'var(--primary)' : '#0f0', 
      fontFamily: 'monospace',
      padding: '1.5rem',
      marginTop: '4rem',
      border: isUnstable ? '1px solid var(--primary)' : '1px solid #333'
    }}>
      <div ref={terminalRef} style={{ height: '150px', overflowY: 'auto', marginBottom: '1rem' }}>
        {history.map((line, i) => <p key={i} style={{ margin: 0, opacity: 0.8 }}>{line}</p>)}
      </div>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <span>{isUnstable ? 'chaos@void:~$' : 'engineer@lab:~$'}</span>
        <input 
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          style={{ 
            background: 'transparent', 
            border: 'none', 
            color: 'inherit', 
            outline: 'none',
            flex: 1,
            margin: 0,
            padding: 0
          }}
        />
      </div>
    </div>
  )
}

export default TerminalREPL
