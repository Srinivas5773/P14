/**
 * ============================================================================
 * CYBERPUNK RACER // AUDIO SYNTHESIZER ENGINE (Web Audio API)
 * 100% Procedural synthesis. No external audio assets or CDNs required.
 * ============================================================================
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.initialized = false;
    
    // Continuous nodes
    this.engineGain = null;
    this.engineOsc = null;
    this.engineNoiseGain = null;
    this.nitroGain = null;
    this.nitroNoise = null;
    this.skidGain = null;
    this.skidNoise = null;

    // Master volume node
    this.masterGain = null;

    // State
    this.isNitroPlaying = false;
    this.isSkidPlaying = false;
  }

  /**
   * Initializes audio context on first user interaction (browser policy compliant)
   */
  init() {
    if (this.initialized) return;

    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) {
        console.warn('Web Audio API is not supported in this browser.');
        return;
      }

      this.ctx = new AudioContext();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      this.setupEngineSynth();
      this.setupNitroSynth();
      this.setupSkidSynth();

      this.initialized = true;
    } catch (e) {
      console.error('Failed to initialize AudioContext', e);
    }
  }

  /**
   * Resume audio context if suspended
   */
  resumeContext() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  /**
   * Toggle mute / unmute
   */
  toggleMute() {
    this.enabled = !this.enabled;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.enabled ? 0.25 : 0.0, this.ctx.currentTime);
    }
    return this.enabled;
  }

  /**
   * Generate simple white noise buffer for continuous friction / wind effects
   */
  createNoiseBuffer(seconds = 2.0) {
    if (!this.ctx) return null;
    const bufferSize = this.ctx.sampleRate * seconds;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    return buffer;
  }

  /**
   * Continuous engine rumble synthesizer
   */
  setupEngineSynth() {
    if (!this.ctx) return;

    // Main low frequency rumble oscillator
    this.engineOsc = this.ctx.createOscillator();
    this.engineOsc.type = 'sawtooth';
    this.engineOsc.frequency.setValueAtTime(55, this.ctx.currentTime);

    // Filter to give it an exhaust/muffler resonance
    const engineFilter = this.ctx.createBiquadFilter();
    engineFilter.type = 'lowpass';
    engineFilter.frequency.setValueAtTime(240, this.ctx.currentTime);
    engineFilter.Q.setValueAtTime(2.0, this.ctx.currentTime);

    this.engineGain = this.ctx.createGain();
    this.engineGain.gain.setValueAtTime(0.0, this.ctx.currentTime);

    this.engineOsc.connect(engineFilter);
    engineFilter.connect(this.engineGain);
    this.engineGain.connect(this.masterGain);

    this.engineOsc.start();
  }

  /**
   * Continuous nitro rush synthesizer
   */
  setupNitroSynth() {
    if (!this.ctx) return;

    const noiseBuffer = this.createNoiseBuffer(2.0);
    if (!noiseBuffer) return;

    const noiseSource = this.ctx.createBufferSource();
    noiseSource.buffer = noiseBuffer;
    noiseSource.loop = true;

    const nitroFilter = this.ctx.createBiquadFilter();
    nitroFilter.type = 'bandpass';
    nitroFilter.frequency.setValueAtTime(800, this.ctx.currentTime);
    nitroFilter.Q.setValueAtTime(1.5, this.ctx.currentTime);

    this.nitroGain = this.ctx.createGain();
    this.nitroGain.gain.setValueAtTime(0.0, this.ctx.currentTime);

    noiseSource.connect(nitroFilter);
    nitroFilter.connect(this.nitroGain);
    this.nitroGain.connect(this.masterGain);

    noiseSource.start();
  }

  /**
   * Continuous tire skid synthesizer
   */
  setupSkidSynth() {
    if (!this.ctx) return;

    const noiseBuffer = this.createNoiseBuffer(2.0);
    if (!noiseBuffer) return;

    const skidSource = this.ctx.createBufferSource();
    skidSource.buffer = noiseBuffer;
    skidSource.loop = true;

    const skidFilter = this.ctx.createBiquadFilter();
    skidFilter.type = 'highpass';
    skidFilter.frequency.setValueAtTime(1200, this.ctx.currentTime);
    skidFilter.Q.setValueAtTime(1.0, this.ctx.currentTime);

    this.skidGain = this.ctx.createGain();
    this.skidGain.gain.setValueAtTime(0.0, this.ctx.currentTime);

    skidSource.connect(skidFilter);
    skidFilter.connect(this.skidGain);
    this.skidGain.connect(this.masterGain);

    skidSource.start();
  }

  /**
   * Updates dynamic continuous sounds based on car telemetry
   */
  updateEngineSound(speedRatio, isAccelerating, isBraking, isDrifting, isNitroActive) {
    if (!this.initialized || !this.ctx || !this.enabled) return;

    const now = this.ctx.currentTime;

    // Engine Pitch & Volume
    const minFreq = 45;
    const maxFreq = 220;
    const targetFreq = minFreq + (maxFreq - minFreq) * Math.min(1.0, Math.max(0.0, speedRatio));

    if (this.engineOsc) {
      this.engineOsc.frequency.setTargetAtTime(targetFreq, now, 0.05);
    }

    if (this.engineGain) {
      let targetVol = 0.08 + speedRatio * 0.15;
      if (isAccelerating) targetVol += 0.05;
      this.engineGain.gain.setTargetAtTime(targetVol, now, 0.05);
    }

    // Nitro sound
    if (this.nitroGain) {
      const nitroTarget = isNitroActive ? 0.22 : 0.0;
      this.nitroGain.gain.setTargetAtTime(nitroTarget, now, 0.06);
    }

    // Tire Skid sound
    if (this.skidGain) {
      const skidTarget = (isDrifting && speedRatio > 0.25) || (isBraking && speedRatio > 0.4) ? 0.14 : 0.0;
      this.skidGain.gain.setTargetAtTime(skidTarget, now, 0.04);
    }
  }

  /**
   * Silence all continuous sounds when paused or game over
   */
  silenceContinuous() {
    if (!this.initialized || !this.ctx) return;
    const now = this.ctx.currentTime;
    if (this.engineGain) this.engineGain.gain.setTargetAtTime(0.0, now, 0.03);
    if (this.nitroGain) this.nitroGain.gain.setTargetAtTime(0.0, now, 0.03);
    if (this.skidGain) this.skidGain.gain.setTargetAtTime(0.0, now, 0.03);
  }

  /**
   * Sound effect: Pickup credit / coin
   */
  playCoinSound() {
    if (!this.initialized || !this.ctx || !this.enabled) return;
    const now = this.ctx.currentTime;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = 'sine';
    osc2.type = 'triangle';

    osc1.frequency.setValueAtTime(987.77, now); // B5
    osc1.frequency.setValueAtTime(1318.51, now + 0.08); // E6
    osc2.frequency.setValueAtTime(1318.51, now + 0.08);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now + 0.08);
    osc1.stop(now + 0.3);
    osc2.stop(now + 0.3);
  }

  /**
   * Sound effect: Repair powerup
   */
  playRepairSound() {
    if (!this.initialized || !this.ctx || !this.enabled) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.linearRampToValueAtTime(880, now + 0.15);
    osc.frequency.linearRampToValueAtTime(1174, now + 0.3);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.35);
  }

  /**
   * Sound effect: Nitro canister collect
   */
  playNitroPickupSound() {
    if (!this.initialized || !this.ctx || !this.enabled) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.exponentialRampToValueAtTime(900, now + 0.22);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.25);
  }

  /**
   * Sound effect: Collision / Impact crash
   */
  playCrashSound(intensity = 1.0) {
    if (!this.initialized || !this.ctx || !this.enabled) return;
    const now = this.ctx.currentTime;

    // Sub thump
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(140 * intensity, now);
    osc.frequency.exponentialRampToValueAtTime(30, now + 0.25);

    oscGain.gain.setValueAtTime(0.3 * Math.min(1.0, intensity), now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

    osc.connect(oscGain);
    oscGain.connect(this.masterGain);

    // Noise burst
    const noiseBuffer = this.createNoiseBuffer(0.3);
    if (noiseBuffer) {
      const noise = this.ctx.createBufferSource();
      noise.buffer = noiseBuffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800 * intensity, now);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.25 * Math.min(1.0, intensity), now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.masterGain);

      noise.start(now);
      noise.stop(now + 0.25);
    }

    osc.start(now);
    osc.stop(now + 0.28);
  }

  /**
   * Sound effect: Oil slip / EMP hazard sound
   */
  playHazardSound() {
    if (!this.initialized || !this.ctx || !this.enabled) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.linearRampToValueAtTime(150, now + 0.2);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.22);
  }

  /**
   * Sound effect: Countdown beep (low for 3, 2, 1, high for GO)
   */
  playCountdownBeep(isGo = false) {
    if (!this.initialized || !this.ctx || !this.enabled) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(isGo ? 880 : 440, now);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + (isGo ? 0.45 : 0.2));

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + (isGo ? 0.45 : 0.2));
  }

  /**
   * Sound effect: Lap completion fanfare
   */
  playLapSound() {
    if (!this.initialized || !this.ctx || !this.enabled) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    const now = this.ctx.currentTime;

    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0.18, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.25);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.26);
    });
  }

  /**
   * Sound effect: UI Button click
   */
  playClickSound() {
    if (!this.initialized || !this.ctx || !this.enabled) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.04);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.04);
  }
}

// Global instance
window.soundEngine = new SoundEngine();
