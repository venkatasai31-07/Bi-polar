const tf = window.tf

class NeuralEngine {
  constructor() {
    this.model = null
  }

  async createModel() {
    const model = tf.sequential()
    model.add(tf.layers.dense({ units: 10, inputShape: [1], activation: 'relu' }))
    model.add(tf.layers.dense({ units: 1 }))
    
    model.compile({
      optimizer: tf.train.adam(0.1),
      loss: 'meanSquaredError'
    })
    this.model = model
    return model
  }

  generateData(points = 100) {
    return tf.tidy(() => {
      const xs = tf.randomUniform([points, 1], 0, 1)
      const ys = xs.square().add(tf.scalar(0.1)).add(tf.randomNormal([points, 1], 0, 0.05))
      
      // Normalize
      const xMin = xs.min()
      const xMax = xs.max()
      const yMin = ys.min()
      const yMax = ys.max()

      const normalizedXs = xs.sub(xMin).div(xMax.sub(xMin))
      const normalizedYs = ys.sub(yMin).div(yMax.sub(yMin))

      return {
        xs: normalizedXs,
        ys: normalizedYs
      }
    })
  }

  async train(onBatchEnd) {
    if (!this.model) await this.createModel()
    const { xs, ys } = this.generateData()

    await this.model.fit(xs, ys, {
      epochs: 20,
      batchSize: 10,
      callbacks: {
        onEpochEnd: (epoch, logs) => {
          onBatchEnd(epoch, logs.loss)
        }
      }
    })

    xs.dispose()
    ys.dispose()
  }
}

export const neuralEngine = new NeuralEngine()
