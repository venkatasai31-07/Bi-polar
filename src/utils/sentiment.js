const chaosWords = [
  'chaos', 'break', 'entropy', 'destroy', 'glitch', 'void', 'noise', 'unstable', 'rebel', 'anomaly',
  'recursive', 'evolution', 'dark', 'transcend', 'fuck', 'shit', 'crazy', 'mad'
]

const logicWords = [
  'logic', 'standard', 'precision', 'safe', 'stable', 'engineering', 'build', 'structure', 'clean',
  'accurate', 'performance', 'optimized', 'corporate', 'system', 'proper'
]

export function analyzeVibe(text) {
  const words = text.toLowerCase().split(/\s+/)
  let score = 0
  
  words.forEach(word => {
    if (chaosWords.includes(word)) score -= 1
    if (logicWords.includes(word)) score += 1
  })

  if (score < -1) return 'chaos'
  if (score > 1) return 'logic'
  return null
}
