/**
 * ============================================================================
 * CYBERPUNK RACER // CORE GAME ENGINE & STATE MANAGER
 * High-performance 2D arcade racing loop, HUD telemetry, and storage.
 * ============================================================================
 */

class GameEngine {
  constructor() {
    this.canvas = document.getElementById('gameCanvas');
    this.ctx = this.canvas.getContext('2d');

    // Canvas resolution
    this.width = this.canvas.width;
    this.height = this.canvas.height;

    // Subsystems
    this.player = new window.PlayerCar(this.width / 2, 480);
    this.track = window.trackManager;
    this.traffic = window.trafficManager;
    this.collectibles = window.collectibleManager;
    this.particles = window.particleSystem;
    this.input = window.inputManager;
    this.audio = window.soundEngine;

    // Game State
    this.state = 'MENU'; // 'MENU' | 'COUNTDOWN' | 'RACING' | 'PAUSED' | 'GAMEOVER'
    this.mode = 'circuit'; // 'circuit' | 'endless'

    // Race Telemetry & Scoring
    this.score = 0;
    this.coins = 0;
    this.multiplier = 1.0;
    this.raceStartTime = 0;
    this.elapsedTime = 0;
    this.topSpeedReached = 0;
    this.collisionCount = 0;
    this.overtakeCount = 0;

    // Countdown State
    this.countdownTimer = 3;
    this.countdownLastTick = 0;

    // Local Storage Data
    this.storageKey = 'cyberpunk_racer_save_v1';
    this.savedData = this.loadStorage();

    // Cache UI DOM Elements
    this.initDOMElements();
    this.bindUIEvents();
    this.applySavedPreferences();

    // Start Game Loop
    this.lastFrameTime = performance.now();
    requestAnimationFrame((timestamp) => this.mainLoop(timestamp));
  }

  /**
   * Cache all DOM UI pointers
   */
  initDOMElements() {
    this.dom = {
      hudLayer: document.getElementById('hud-layer'),
      hudScore: document.getElementById('hud-score'),
      hudCoins: document.getElementById('hud-coins'),
      hudTimer: document.getElementById('hud-timer'),
      hudLapLabel: document.getElementById('hud-lap-label'),
      hudLap: document.getElementById('hud-lap'),
      hudBestScore: document.getElementById('hud-best-score'),
      hudHpBar: document.getElementById('hud-hp-bar'),
      hudHpText: document.getElementById('hud-hp-text'),
      hudNitroBar: document.getElementById('hud-nitro-bar'),
      hudNitroText: document.getElementById('hud-nitro-text'),
      hudSpeed: document.getElementById('hud-speed'),
      hudSpeedBar: document.getElementById('hud-speed-bar'),
      hudGear: document.getElementById('hud-gear'),
      hudMult: document.getElementById('hud-mult'),
      hudBanner: document.getElementById('hud-banner'),
      hudBannerText: document.getElementById('hud-banner-text'),
      hazardWarning: document.getElementById('hazard-warning'),
      radarBlips: document.getElementById('radar-blips-container'),

      // Overlays
      screenMenu: document.getElementById('screen-main-menu'),
      screenControls: document.getElementById('screen-controls'),
      screenPause: document.getElementById('screen-pause'),
      screenResults: document.getElementById('screen-results'),
      countdownOverlay: document.getElementById('countdown-overlay'),
      countdownNumber: document.getElementById('countdown-number'),
      countdownSubtext: document.getElementById('countdown-subtext'),

      // Menu data displays
      menuBestTime: document.getElementById('menu-best-time'),
      menuHighScore: document.getElementById('menu-high-score'),
      menuTotalCoins: document.getElementById('menu-total-coins'),

      // Pause displays
      pauseScore: document.getElementById('pause-score'),
      pauseSpeed: document.getElementById('pause-speed'),
      pauseTime: document.getElementById('pause-time'),
      pauseHp: document.getElementById('pause-hp'),
      pauseAudioStatus: document.getElementById('pause-audio-status'),

      // Results displays
      resultsTitle: document.getElementById('results-title'),
      resultsSubtitle: document.getElementById('results-subtitle'),
      resultsBadge: document.getElementById('results-badge'),
      newRecordAlert: document.getElementById('new-record-alert'),
      resScore: document.getElementById('res-score'),
      resTime: document.getElementById('res-time'),
      resBestLap: document.getElementById('res-best-lap'),
      resTopSpeed: document.getElementById('res-top-speed'),
      resCoins: document.getElementById('res-coins'),
      resOvertakes: document.getElementById('res-overtakes'),
      resCollisions: document.getElementById('res-collisions'),
      resHull: document.getElementById('res-hull'),

      // Buttons
      btnStartGame: document.getElementById('btn-start-game'),
      btnOpenControls: document.getElementById('btn-open-controls'),
      btnCloseControls: document.getElementById('btn-close-controls'),
      btnResumeGame: document.getElementById('btn-resume-game'),
      btnRestartGamePause: document.getElementById('btn-restart-game-pause'),
      btnQuitToMenu: document.getElementById('btn-quit-to-menu'),
      btnRestartGameResults: document.getElementById('btn-restart-game-results'),
      btnMenuFromResults: document.getElementById('btn-menu-from-results'),
      btnAudioToggle: document.getElementById('btn-audio-toggle'),
      btnAudioTogglePause: document.getElementById('btn-audio-toggle-pause'),
      btnPauseQuick: document.getElementById('btn-pause-quick'),
      audioStateText: document.getElementById('audio-state-text'),

      // Mode & Color Buttons
      btnModeCircuit: document.getElementById('btn-mode-circuit'),
      btnModeEndless: document.getElementById('btn-mode-endless'),
      colorSwatches: document.querySelectorAll('.btn-color-swatch')
    };
  }

  /**
   * Bind all event handlers for buttons and shortcuts
   */
  bindUIEvents() {
    // Mode Switcher
    this.dom.btnModeCircuit.addEventListener('click', () => this.setMode('circuit'));
    this.dom.btnModeEndless.addEventListener('click', () => this.setMode('endless'));

    // Color Swatches
    this.dom.colorSwatches.forEach(swatch => {
      swatch.addEventListener('click', (e) => {
        this.dom.colorSwatches.forEach(s => s.classList.remove('active'));
        const btn = e.currentTarget;
        btn.classList.add('active');
        const color = btn.getAttribute('data-color');
        this.player.neonColor = color;
        this.savedData.chassisColor = color;
        this.saveStorage();
        if (this.audio) this.audio.playClickSound();
      });
    });

    // Start Game
    this.dom.btnStartGame.addEventListener('click', () => this.startCountdown());
    this.dom.btnOpenControls.addEventListener('click', () => {
      this.dom.screenControls.classList.remove('hidden');
      if (this.audio) this.audio.playClickSound();
    });
    this.dom.btnCloseControls.addEventListener('click', () => {
      this.dom.screenControls.classList.add('hidden');
      if (this.audio) this.audio.playClickSound();
    });

    // Pause / Resume
    this.dom.btnResumeGame.addEventListener('click', () => this.resumeGame());
    this.dom.btnRestartGamePause.addEventListener('click', () => this.startCountdown());
    this.dom.btnQuitToMenu.addEventListener('click', () => this.returnToMenu());
    this.dom.btnPauseQuick.addEventListener('click', () => {
      if (this.state === 'RACING') this.pauseGame();
      else if (this.state === 'PAUSED') this.resumeGame();
    });

    // Results Actions
    this.dom.btnRestartGameResults.addEventListener('click', () => this.startCountdown());
    this.dom.btnMenuFromResults.addEventListener('click', () => this.returnToMenu());

    // Audio Toggles
    const toggleAudioHandler = () => {
      const enabled = this.audio.toggleMute();
      const text = enabled ? 'ON' : 'OFF';
      this.dom.audioStateText.textContent = text;
      this.dom.pauseAudioStatus.textContent = text;
      if (this.audio) this.audio.playClickSound();
    };

    this.dom.btnAudioToggle.addEventListener('click', toggleAudioHandler);
    this.dom.btnAudioTogglePause.addEventListener('click', toggleAudioHandler);
  }

  setMode(mode) {
    this.mode = mode;
    if (mode === 'circuit') {
      this.dom.btnModeCircuit.classList.add('active');
      this.dom.btnModeEndless.classList.remove('active');
    } else {
      this.dom.btnModeEndless.classList.add('active');
      this.dom.btnModeCircuit.classList.remove('active');
    }
    if (this.audio) this.audio.playClickSound();
  }

  /**
   * Load and save persistent data via localStorage
   */
  loadStorage() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch (e) {
      console.warn('LocalStorage unavailable');
    }
    return {
      circuitBestTime: null,
      highwayHighScore: 0,
      totalCredits: 0,
      chassisColor: '#00d2df'
    };
  }

  saveStorage() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.savedData));
    } catch (e) {
      console.warn('Failed to save to localStorage');
    }
  }

  applySavedPreferences() {
    // Apply color
    if (this.savedData.chassisColor) {
      this.player.neonColor = this.savedData.chassisColor;
      this.dom.colorSwatches.forEach(s => {
        if (s.getAttribute('data-color') === this.savedData.chassisColor) {
          s.classList.add('active');
        } else {
          s.classList.remove('active');
        }
      });
    }

    // Update menu records summary
    this.dom.menuBestTime.textContent = this.savedData.circuitBestTime ? this.formatTime(this.savedData.circuitBestTime) : '--:--.--';
    this.dom.menuHighScore.textContent = String(this.savedData.highwayHighScore || 0).padStart(6, '0');
    this.dom.menuTotalCoins.textContent = String(this.savedData.totalCredits || 0);
  }

  /**
   * Starts the 3-second countdown sequence before active racing
   */
  startCountdown() {
    // Hide all menus
    this.dom.screenMenu.classList.add('hidden');
    this.dom.screenPause.classList.add('hidden');
    this.dom.screenResults.classList.add('hidden');
    this.dom.screenControls.classList.add('hidden');

    // Reset systems
    this.player.reset(this.width / 2, 480);
    this.track.reset(this.mode);
    this.traffic.reset();
    this.collectibles.reset();
    this.particles.reset();

    // Reset telemetry
    this.score = 0;
    this.coins = 0;
    this.multiplier = 1.0;
    this.elapsedTime = 0;
    this.topSpeedReached = 0;
    this.collisionCount = 0;
    this.overtakeCount = 0;

    // Show HUD & Countdown
    this.dom.hudLayer.classList.remove('hidden');
    this.dom.countdownOverlay.classList.remove('hidden');

    this.countdownTimer = 3;
    this.dom.countdownNumber.textContent = '3';
    this.dom.countdownSubtext.textContent = 'READY';
    this.countdownLastTick = performance.now();

    this.state = 'COUNTDOWN';
    if (this.audio) this.audio.playCountdownBeep(false);
  }

  /**
   * Transition from countdown to active racing
   */
  startRace() {
    this.state = 'RACING';
    this.raceStartTime = performance.now();
    this.dom.countdownOverlay.classList.add('hidden');
    if (this.audio) this.audio.playCountdownBeep(true);
  }

  /**
   * Pause simulation
   */
  pauseGame() {
    if (this.state !== 'RACING') return;
    this.state = 'PAUSED';
    if (this.audio) this.audio.silenceContinuous();

    // Fill pause stats
    this.dom.pauseScore.textContent = String(Math.floor(this.score)).padStart(6, '0');
    this.dom.pauseSpeed.textContent = `${Math.round(this.player.speed * 15)} KM/H`;
    this.dom.pauseTime.textContent = this.formatTime(this.elapsedTime);
    this.dom.pauseHp.textContent = `${Math.round(this.player.health)}%`;

    this.dom.screenPause.classList.remove('hidden');
  }

  /**
   * Resume simulation
   */
  resumeGame() {
    if (this.state !== 'PAUSED') return;
    this.state = 'RACING';
    this.dom.screenPause.classList.add('hidden');
  }

  /**
   * Return to Main Menu
   */
  returnToMenu() {
    this.state = 'MENU';
    if (this.audio) this.audio.silenceContinuous();

    this.dom.hudLayer.classList.add('hidden');
    this.dom.screenPause.classList.add('hidden');
    this.dom.screenResults.classList.add('hidden');
    this.dom.countdownOverlay.classList.add('hidden');
    this.dom.screenMenu.classList.remove('hidden');

    this.applySavedPreferences();
  }

  /**
   * Game Over / Results calculation
   */
  finishRace(isVictory = false) {
    this.state = 'GAMEOVER';
    if (this.audio) this.audio.silenceContinuous();

    // Update saved records
    let isNewRecord = false;
    if (this.mode === 'circuit' && isVictory) {
      if (!this.savedData.circuitBestTime || this.elapsedTime < this.savedData.circuitBestTime) {
        this.savedData.circuitBestTime = this.elapsedTime;
        isNewRecord = true;
      }
    } else {
      if (this.score > (this.savedData.highwayHighScore || 0)) {
        this.savedData.highwayHighScore = Math.floor(this.score);
        isNewRecord = true;
      }
    }

    this.savedData.totalCredits = (this.savedData.totalCredits || 0) + this.coins;
    this.saveStorage();

    // Populate Results Screen
    this.dom.resultsTitle.textContent = isVictory ? 'Race Finished!' : 'You Crashed!';
    this.dom.resultsTitle.className = isVictory ? 'dialog-title text-gold' : 'dialog-title val-red';
    this.dom.resultsBadge.textContent = isVictory ? 'RACE FINISHED' : 'YOU CRASHED';
    this.dom.resultsSubtitle.textContent = isVictory ? 'Great driving! All laps complete.' : 'Your car took too much damage. Try again!';

    if (isNewRecord) {
      this.dom.newRecordAlert.classList.remove('hidden');
      this.dom.newRecordAlert.textContent = this.mode === 'circuit' ? '*** NEW BEST LAP TIME! ***' : '*** NEW HIGH SCORE! ***';
    } else {
      this.dom.newRecordAlert.classList.add('hidden');
    }

    this.dom.resScore.textContent = String(Math.floor(this.score)).padStart(6, '0');
    this.dom.resTime.textContent = this.formatTime(this.elapsedTime);
    this.dom.resBestLap.textContent = this.track.bestLapTime ? this.formatTime(this.track.bestLapTime) : '--:--.--';
    this.dom.resTopSpeed.textContent = `${Math.round(this.topSpeedReached * 15)} KM/H`;
    this.dom.resCoins.textContent = String(this.coins);
    this.dom.resOvertakes.textContent = String(this.traffic.overtakeCount);
    this.dom.resCollisions.textContent = String(this.collisionCount);
    this.dom.resHull.textContent = `${Math.round(this.player.health)}%`;

    this.dom.screenResults.classList.remove('hidden');
  }

  /**
   * Main Simulation Update Tick
   */
  update(delta) {
    // 1. Handle Global Single-Press Shortcuts
    if (this.input.isJustPressed('KeyP') || this.input.isJustPressed('Escape')) {
      if (this.state === 'RACING') this.pauseGame();
      else if (this.state === 'PAUSED') this.resumeGame();
    }

    if (this.input.isJustPressed('KeyR')) {
      if (this.state === 'RACING' || this.state === 'PAUSED' || this.state === 'GAMEOVER') {
        this.startCountdown();
      }
    }

    if (this.input.isJustPressed('KeyM')) {
      this.dom.btnAudioToggle.click();
    }

    if (this.input.isJustPressed('Enter')) {
      if (this.state === 'MENU' || this.state === 'GAMEOVER') {
        this.startCountdown();
      }
    }

    // 2. State-Specific Updates
    if (this.state === 'COUNTDOWN') {
      const now = performance.now();
      if (now - this.countdownLastTick >= 800) {
        this.countdownLastTick = now;
        this.countdownTimer--;

        if (this.countdownTimer > 0) {
          this.dom.countdownNumber.textContent = String(this.countdownTimer);
          this.dom.countdownSubtext.textContent = this.countdownTimer === 2 ? 'SET' : 'READY';
          if (this.audio) this.audio.playCountdownBeep(false);
        } else if (this.countdownTimer === 0) {
          this.dom.countdownNumber.textContent = 'GO!';
          this.dom.countdownSubtext.textContent = 'GO!';
          this.startRace();
        }
      }
      return;
    }

    if (this.state !== 'RACING') return;

    // Track Elapsed Time
    this.elapsedTime += delta;

    // 3. Update Player Physics
    const roadBounds = { left: this.track.roadLeft, right: this.track.roadRight };
    this.player.update(this.input, roadBounds);

    // Track top speed reached
    if (this.player.speed > this.topSpeedReached) {
      this.topSpeedReached = this.player.speed;
    }

    // 4. Update Track Progress & Laps
    const prevDistance = this.track.totalDistance;
    this.track.update(this.player.speed);

    if (this.mode === 'circuit') {
      const completedLap = this.track.checkLapCompletion(prevDistance);
      if (completedLap) {
        if (this.track.currentLap > this.track.totalLaps) {
          // Finished all 3 laps!
          if (this.audio) this.audio.playLapSound();
          this.finishRace(true);
          return;
        } else {
          // Lap Completed
          if (this.audio) this.audio.playLapSound();
          this.showHudBanner(`Lap ${this.track.currentLap} / ${this.track.totalLaps}`);
        }
      }
    }

    // 5. Update Traffic AI & Overtakes
    const difficultyMult = 1.0 + (this.track.totalDistance / 20000);
    const overtakes = this.traffic.update(this.player.speed, this.track.laneCenters, difficultyMult);
    if (overtakes > 0) {
      this.score += overtakes * 100 * this.multiplier;
      this.particles.emitFloatingText(this.player.x, this.player.y - 20, `+${overtakes * 100}`, '#00d2df');
    }

    // 6. Update Collectibles & Hazards
    this.collectibles.update(this.player.speed, this.track.laneCenters, roadBounds);

    // 7. Check Collisions: Player vs Collectibles / Hazards
    const collectedItems = this.collectibles.checkCollisions(this.player);
    for (let i = 0; i < collectedItems.length; i++) {
      const it = collectedItems[i];
      if (it.type === 'coin') {
        this.coins += 1;
        this.score += it.value * this.multiplier;
        if (this.audio) this.audio.playCoinSound();
        this.particles.emitFloatingText(this.player.x, this.player.y - 20, `+${it.value}`, '#f59e0b');
      } else if (it.type === 'nitro') {
        this.player.refillNitro(40);
        if (this.audio) this.audio.playNitroPickupSound();
      } else if (it.type === 'repair') {
        this.player.repair(35);
        if (this.audio) this.audio.playRepairSound();
      } else if (it.type === 'oil') {
        this.player.triggerOilSlip();
        this.showHudBanner('Oil Slick!');
      } else if (it.type === 'emp') {
        this.player.triggerEMP();
        this.showHudBanner('EMP Jammers!');
      }
    }

    // 8. Check Collisions: Player vs Traffic
    const trafficHits = this.traffic.checkCollisions(this.player);
    if (trafficHits.length > 0) {
      this.collisionCount++;
      const hit = trafficHits[0];
      const bounceX = this.player.x > hit.x ? 1 : -1;
      this.player.takeDamage(30, bounceX);
      hit.speed = Math.max(2, hit.speed - 2);

      if (this.player.isWrecked) {
        this.finishRace(false);
        return;
      }
    }

    // 9. Score Accumulation (Velocity based)
    if (this.player.speed > 1.0) {
      this.score += (this.player.speed * 0.4) * this.multiplier;
    }

    // Dynamic Multiplier based on clean speed
    if (this.player.speed > 14.0) {
      this.multiplier = 2.0;
    } else if (this.player.speed > 10.0) {
      this.multiplier = 1.5;
    } else {
      this.multiplier = 1.0;
    }

    // 10. Update Particles
    this.particles.update(this.player.speed);

    // 11. Update HUD Telemetry
    this.updateHUD();

    // Clear single frame inputs
    this.input.clearFrame();
  }

  /**
   * Update real-time HUD gauges, meters, and radar
   */
  updateHUD() {
    this.dom.hudScore.textContent = String(Math.floor(this.score)).padStart(6, '0');
    this.dom.hudCoins.textContent = String(this.coins).padStart(3, '0');
    this.dom.hudTimer.textContent = this.formatTime(this.elapsedTime);

    // Best record display
    const bestVal = this.mode === 'circuit'
      ? (this.savedData.circuitBestTime ? this.formatTime(this.savedData.circuitBestTime) : '--:--.--')
      : String(this.savedData.highwayHighScore || 0).padStart(6, '0');
    this.dom.hudBestScore.textContent = bestVal;

    // Lap / Distance Display
    if (this.mode === 'circuit') {
      this.dom.hudLapLabel.textContent = 'LAP';
      this.dom.hudLap.textContent = `${Math.min(this.track.totalLaps, this.track.currentLap)} / ${this.track.totalLaps}`;
    } else {
      this.dom.hudLapLabel.textContent = 'SECTOR';
      this.dom.hudLap.textContent = `${Math.floor(this.track.totalDistance / 2000) + 1}`;
    }

    // HP Bar
    const hpPct = Math.max(0, Math.min(100, this.player.health));
    this.dom.hudHpBar.style.width = `${hpPct}%`;
    this.dom.hudHpText.textContent = `${Math.round(hpPct)}%`;
    if (hpPct < 25) {
      this.dom.hudHpBar.className = 'meter-fill fill-red';
    } else if (hpPct < 55) {
      this.dom.hudHpBar.className = 'meter-fill fill-amber';
    } else {
      this.dom.hudHpBar.className = 'meter-fill fill-green';
    }

    // Nitro Bar
    const nitroPct = Math.max(0, Math.min(100, this.player.nitro));
    this.dom.hudNitroBar.style.width = `${nitroPct}%`;
    this.dom.hudNitroText.textContent = `${Math.round(nitroPct)}%`;

    // Speedometer
    const currentKmh = Math.max(0, Math.round(this.player.speed * 15.5));
    this.dom.hudSpeed.textContent = String(currentKmh).padStart(3, '0');
    const speedRatio = Math.min(100, (this.player.speed / this.player.maxNitroSpeed) * 100);
    this.dom.hudSpeedBar.style.width = `${speedRatio}%`;

    // Gear computation
    let gear = 1;
    if (currentKmh > 190) gear = 5;
    else if (currentKmh > 140) gear = 4;
    else if (currentKmh > 90) gear = 3;
    else if (currentKmh > 40) gear = 2;
    this.dom.hudGear.textContent = gear;
    this.dom.hudMult.textContent = this.multiplier.toFixed(1);

    // Hazard Radar Scanning
    this.updateRadar();
  }

  /**
   * Render radar blips inside the HUD mini-radar box
   */
  updateRadar() {
    const container = this.dom.radarBlips;
    container.innerHTML = '';

    let hasHazardAhead = false;
    const radarH = 60;
    const radarW = 90;
    const roadLeft = this.track.roadLeft;
    const roadWidth = this.track.roadWidth;

    // Traffic Blips
    for (let i = 0; i < this.traffic.vehicles.length; i++) {
      const v = this.traffic.vehicles[i];
      const relY = this.player.y - v.y; // distance ahead

      if (relY > 0 && relY < 480) {
        const blipY = (1 - (relY / 480)) * (radarH * 0.75);
        const normX = (v.x - roadLeft) / roadWidth;
        const blipX = normX * radarW;

        const dot = document.createElement('div');
        dot.className = 'radar-dot dot-traffic';
        dot.style.left = `${Math.max(2, Math.min(radarW - 6, blipX))}px`;
        dot.style.top = `${blipY}px`;
        container.appendChild(dot);

        if (relY < 180 && Math.abs(this.player.x - v.x) < 40) {
          hasHazardAhead = true;
        }
      }
    }

    // Toggle Hazard Alert text
    if (hasHazardAhead) {
      this.dom.hazardWarning.classList.remove('hidden');
    } else {
      this.dom.hazardWarning.classList.add('hidden');
    }
  }

  /**
   * Display dynamic HUD banner notification
   */
  showHudBanner(text) {
    this.dom.hudBannerText.textContent = text;
    this.dom.hudBanner.classList.remove('hidden');
    // Reset animation
    this.dom.hudBanner.style.animation = 'none';
    this.dom.hudBanner.offsetHeight; /* trigger reflow */
    this.dom.hudBanner.style.animation = null;

    setTimeout(() => {
      this.dom.hudBanner.classList.add('hidden');
    }, 1600);
  }

  /**
   * Format milliseconds into mm:ss.ms
   */
  formatTime(ms) {
    if (!ms || ms < 0) return '00:00.00';
    const totalSeconds = ms / 1000;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    const hundredths = Math.floor((ms % 1000) / 10);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(hundredths).padStart(2, '0')}`;
  }

  /**
   * Main Render Pass
   */
  render() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // 1. Draw Track, Road Markings, & City
    this.track.draw(this.ctx);

    // 2. Draw Skid Marks
    this.particles.drawSkidMarks(this.ctx);

    // 3. Draw Collectibles & Road Hazards
    this.collectibles.draw(this.ctx);

    // 4. Draw Traffic AI Vehicles
    this.traffic.draw(this.ctx);

    // 5. Draw Player Car
    this.player.draw(this.ctx);

    // 6. Draw Particles (Exhaust, Sparks, Smoke)
    this.particles.drawParticles(this.ctx);

    // 7. Draw Floating Score Texts
    this.particles.drawFloatingTexts(this.ctx);
  }

  /**
   * Main Engine Loop (60 FPS requestAnimationFrame)
   */
  mainLoop(timestamp) {
    const delta = Math.min(32, timestamp - this.lastFrameTime);
    this.lastFrameTime = timestamp;

    this.update(delta);
    this.render();

    requestAnimationFrame((t) => this.mainLoop(t));
  }
}

// Start Game Engine on DOM Load
window.addEventListener('DOMContentLoaded', () => {
  window.gameEngine = new GameEngine();
});
