import { useState, useEffect } from 'react'

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+'

function TextScrambler({ text, speed = 40, scrambleCount = 3 }) {
  const [displayText, setDisplayText] = useState(text)

  useEffect(() => {
    let iteration = 0
    let interval = null

    clearInterval(interval)

    interval = setInterval(() => {
      setDisplayText(text
        .split('')
        .map((char, index) => {
          if (index < iteration) {
            return text[index]
          }
          return characters[Math.floor(Math.random() * characters.length)]
        })
        .join('')
      )

      if (iteration >= text.length) {
        clearInterval(interval)
      }

      iteration += 1 / scrambleCount
    }, speed)

    return () => clearInterval(interval)
  }, [text])

  return <span>{displayText}</span>
}

export default TextScrambler
