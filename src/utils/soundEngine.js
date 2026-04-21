class SoundEngine {
  constructor() {
    this.context = null;
    this.oscillator = null;
    this.noiseNode = null;
    this.gainNode = null;
    this.isMuted = false;
  }

  init() {
    if (this.context) return;
    this.context = new (window.AudioContext || window.webkitAudioContext)();
    this.gainNode = this.context.createGain();
    this.gainNode.connect(this.context.destination);
    this.gainNode.gain.value = 0.1;
  }

  startStableHum() {
    this.init();
    this.stopAll();
    
    this.oscillator = this.context.createOscillator();
    const lfo = this.context.createOscillator();
    const lfoGain = this.context.createGain();

    this.oscillator.type = 'sine';
    this.oscillator.frequency.setValueAtTime(60, this.context.currentTime); // Low hum
    
    lfo.frequency.setValueAtTime(0.5, this.context.currentTime);
    lfoGain.gain.setValueAtTime(10, this.context.currentTime);
    
    lfo.connect(lfoGain);
    lfoGain.connect(this.oscillator.frequency);
    
    this.oscillator.connect(this.gainNode);
    this.oscillator.start();
    lfo.start();
  }

  startChaosStatic() {
    this.init();
    this.stopAll();

    const bufferSize = 2 * this.context.sampleRate;
    const noiseBuffer = this.context.createBuffer(1, bufferSize, this.context.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    this.noiseNode = this.context.createBufferSource();
    this.noiseNode.buffer = noiseBuffer;
    this.noiseNode.loop = true;

    const filter = this.context.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(400, this.context.currentTime);

    this.noiseNode.connect(filter);
    filter.connect(this.gainNode);
    this.noiseNode.start();
  }

  playClick() {
    if (!this.context) return;
    const osc = this.context.createOscillator();
    const g = this.context.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(800, this.context.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, this.context.currentTime + 0.1);
    g.gain.setValueAtTime(0.2, this.context.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + 0.1);
    osc.connect(g);
    g.connect(this.context.destination);
    osc.start();
    osc.stop(this.context.currentTime + 0.1);
  }

  playTransition() {
    if (!this.context) return;
    const osc = this.context.createOscillator();
    const g = this.context.createGain();

    osc.type = 'sine';
    // Droplet 'drip' sweep
    osc.frequency.setValueAtTime(1200, this.context.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, this.context.currentTime + 0.1);
    
    g.gain.setValueAtTime(0.3, this.context.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + 0.2);
    
    osc.connect(g);
    g.connect(this.context.destination);
    
    osc.start();
    osc.stop(this.context.currentTime + 0.2);
  }

  stopAll() {
    if (this.oscillator) {
      this.oscillator.stop();
      this.oscillator = null;
    }
    if (this.noiseNode) {
      this.noiseNode.stop();
      this.noiseNode = null;
    }
  }
}

export const soundEngine = new SoundEngine();
