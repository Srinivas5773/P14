/**
 * ============================================================================
 * CYBERPUNK RACER // PLAYER CAR & HANDLING PHYSICS
 * Dynamic vehicle physics, steering, drifting, nitro, health, and rendering.
 * ============================================================================
 */

class PlayerCar {
  constructor(x = 480, y = 500) {
    this.startX = x;
    this.startY = y;

    // Dimensions
    this.width = 38;
    this.height = 70;

    // Transform
    this.x = x;
    this.y = y;
    this.angle = 0; // Radians (-0.25 to +0.25 tilt)
    this.angularVelocity = 0;

    // Speeds (Units: px/tick, mapped to km/h in HUD)
    this.speed = 0;
    this.maxSpeed = 12.0;       // Base max speed (~180 km/h)
    this.maxNitroSpeed = 17.5;  // Boosted max speed (~260 km/h)
    this.reverseMaxSpeed = -3.5;
    this.acceleration = 0.16;
    this.braking = 0.32;
    this.friction = 0.05;
    this.steerPower = 0.08;

    // Lateral Physics / Drift
    this.lateralVelocity = 0;
    this.driftFactor = 0.88;
    this.isDrifting = false;

    // Nitro System
    this.nitro = 100;
    this.maxNitro = 100;
    this.isNitroActive = false;
    this.nitroDepletionRate = 0.65;
    this.nitroRechargeRate = 0.08;

    // Health & Damage
    this.health = 100;
    this.maxHealth = 100;
    this.isWrecked = false;
    this.invulnerableTimer = 0;

    // Hazard Status Effects
    this.spinTimer = 0;
    this.empTimer = 0;

    // Cosmetics
    this.neonColor = '#00d2df';
    this.bodyColor = '#0f172a';
  }

  reset(x = 480, y = 500) {
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.angularVelocity = 0;
    this.speed = 0;
    this.lateralVelocity = 0;
    this.nitro = 100;
    this.health = 100;
    this.isWrecked = false;
    this.invulnerableTimer = 0;
    this.spinTimer = 0;
    this.empTimer = 0;
  }

  /**
   * Updates car physics, inputs, and particle generation
   */
  update(input, roadBounds) {
    if (this.isWrecked) {
      // Wrecked car decelerates rapidly
      this.speed *= 0.92;
      this.angle += 0.15;
      return;
    }

    // Decrement timers
    if (this.invulnerableTimer > 0) this.invulnerableTimer--;
    if (this.empTimer > 0) this.empTimer--;

    // Handle Oil Slick Spin
    if (this.spinTimer > 0) {
      this.spinTimer--;
      this.angle += 0.25;
      this.speed *= 0.96;
      this.x += this.lateralVelocity;
      // Emit skid marks while spinning
      if (window.particleSystem) {
        window.particleSystem.addSkidMark(this.x - 12, this.y + 15, this.x - 12 + this.lateralVelocity, this.y + 15);
        window.particleSystem.addSkidMark(this.x + 12, this.y + 15, this.x + 12 + this.lateralVelocity, this.y + 15);
      }
      return;
    }

    // 1. NITRO BOOST HANDLING
    const wantsNitro = input.nitro && this.nitro > 5 && this.empTimer <= 0 && this.speed > 3;
    if (wantsNitro) {
      this.isNitroActive = true;
      this.nitro = Math.max(0, this.nitro - this.nitroDepletionRate);
    } else {
      this.isNitroActive = false;
      // Passive slow recharge
      if (this.nitro < this.maxNitro) {
        this.nitro = Math.min(this.maxNitro, this.nitro + this.nitroRechargeRate);
      }
    }

    // 2. ACCELERATION & BRAKING
    const currentMaxSpeed = this.isNitroActive ? this.maxNitroSpeed : this.maxSpeed;
    const currentAccel = this.isNitroActive ? this.acceleration * 1.8 : this.acceleration;

    if (input.up) {
      if (this.speed < currentMaxSpeed) {
        this.speed += currentAccel;
      }
    } else if (input.down) {
      if (this.speed > 0) {
        this.speed -= this.braking;
      } else if (this.speed > this.reverseMaxSpeed) {
        this.speed -= this.acceleration * 0.5;
      }
    } else {
      // Natural rolling friction
      if (this.speed > 0) {
        this.speed = Math.max(0, this.speed - this.friction);
      } else if (this.speed < 0) {
        this.speed = Math.min(0, this.speed + this.friction);
      }
    }

    // 3. STEERING & LATERAL DRIFT
    let steerDir = 0;
    if (this.empTimer > 0) {
      // EMP glitch slightly inverts or jitters steering
      if (input.left) steerDir += 0.6;
      if (input.right) steerDir -= 0.6;
    } else {
      if (input.left) steerDir -= 1.0;
      if (input.right) steerDir += 1.0;
    }

    // Steering effectiveness scales with speed
    const speedRatio = Math.abs(this.speed) / this.maxSpeed;
    const steerFactor = Math.min(1.2, Math.max(0.2, speedRatio));

    if (steerDir !== 0 && Math.abs(this.speed) > 0.4) {
      this.lateralVelocity += steerDir * this.steerPower * (this.speed > 0 ? 1 : -1) * 3.5;
      this.angle = steerDir * 0.18 * steerFactor;
    } else {
      this.angle *= 0.85; // Auto-align forward
    }

    // Lateral friction / tire grip
    this.lateralVelocity *= this.driftFactor;
    this.x += this.lateralVelocity;

    // Detect Drift
    this.isDrifting = Math.abs(this.lateralVelocity) > 3.0 && this.speed > 5;

    // 4. OFF-ROAD / SHOULDER PENALTY
    const isOffRoad = this.x < roadBounds.left || this.x > roadBounds.right;
    if (isOffRoad) {
      this.speed *= 0.95; // Significant slowdown
      if (Math.random() > 0.4 && window.particleSystem) {
        window.particleSystem.emitExhaust(this.x, this.y + 20, 0, false, '#64748b');
      }
    }

    // Keep car within overall screen boundary
    this.x = Math.max(roadBounds.left - 25, Math.min(roadBounds.right + 25, this.x));

    // 5. EXHAUST & SKID PARTICLES
    if (window.particleSystem) {
      if (this.speed > 1.5) {
        window.particleSystem.emitExhaust(
          this.x - 8,
          this.y + 28,
          this.angle,
          this.isNitroActive,
          this.neonColor
        );
        window.particleSystem.emitExhaust(
          this.x + 8,
          this.y + 28,
          this.angle,
          this.isNitroActive,
          this.neonColor
        );
      }

      if (this.isDrifting) {
        window.particleSystem.addSkidMark(
          this.x - 14,
          this.y + 20,
          this.x - 14 + this.lateralVelocity,
          this.y + 20,
          0.4
        );
        window.particleSystem.addSkidMark(
          this.x + 14,
          this.y + 20,
          this.x + 14 + this.lateralVelocity,
          this.y + 20,
          0.4
        );
      }
    }

    // 6. CONTINUOUS ENGINE SOUND TELEMETRY
    if (window.soundEngine) {
      window.soundEngine.updateEngineSound(
        this.speed / this.maxNitroSpeed,
        input.up,
        input.down,
        this.isDrifting,
        this.isNitroActive
      );
    }
  }

  /**
   * Apply damage from collision
   */
  takeDamage(amount = 25, bounceX = 0) {
    if (this.invulnerableTimer > 0 || this.isWrecked) return;

    this.health = Math.max(0, this.health - amount);
    this.invulnerableTimer = 40; // ~0.6s grace period
    this.lateralVelocity += bounceX * 5.0;
    this.speed *= 0.65;

    if (window.particleSystem) {
      window.particleSystem.emitCollisionSparks(this.x, this.y, 24, '#f59e0b');
    }

    if (window.soundEngine) {
      window.soundEngine.playCrashSound(1.0);
    }

    if (this.health <= 0) {
      this.isWrecked = true;
      if (window.particleSystem) {
        window.particleSystem.emitCollisionSparks(this.x, this.y, 50, '#ef4444');
      }
    }
  }

  /**
   * Apply hazard effects
   */
  triggerOilSlip() {
    this.spinTimer = 45; // ~0.75s spinout
    this.lateralVelocity = (Math.random() > 0.5 ? 1 : -1) * 7.0;
    if (window.soundEngine) window.soundEngine.playHazardSound();
  }

  triggerEMP() {
    this.empTimer = 90; // ~1.5s glitch
    this.nitro = Math.max(0, this.nitro - 25);
    if (window.soundEngine) window.soundEngine.playHazardSound();
  }

  repair(amount = 35) {
    this.health = Math.min(this.maxHealth, this.health + amount);
    if (window.particleSystem) {
      window.particleSystem.emitFloatingText(this.x, this.y - 30, '+35% REPAIR', '#10b981');
    }
  }

  refillNitro(amount = 40) {
    this.nitro = Math.min(this.maxNitro, this.nitro + amount);
    if (window.particleSystem) {
      window.particleSystem.emitFloatingText(this.x, this.y - 30, '+40% N2O', '#00d2df');
    }
  }

  /**
   * Render Player Car using clean Canvas 2D vectors
   */
  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);

    // Invulnerability flashing effect
    if (this.invulnerableTimer > 0 && Math.floor(this.invulnerableTimer / 4) % 2 === 0) {
      ctx.globalAlpha = 0.5;
    }

    const w = this.width;
    const h = this.height;
    const halfW = w / 2;
    const halfH = h / 2;

    // 1. Drop Shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(-halfW + 4, -halfH + 6, w, h);

    // 2. Underglow Neon Strips
    ctx.fillStyle = this.neonColor;
    ctx.fillRect(-halfW - 2, -halfH + 16, 2, h - 32);
    ctx.fillRect(halfW, -halfH + 16, 2, h - 32);

    // 3. Main Chassis Polygon (Cyber Wedge)
    ctx.fillStyle = this.bodyColor;
    ctx.strokeStyle = this.neonColor;
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(0, -halfH);             // Front nose center
    ctx.lineTo(halfW - 4, -halfH + 10); // Front right corner
    ctx.lineTo(halfW, -halfH + 25);    // Front right fender
    ctx.lineTo(halfW, halfH - 8);      // Rear right fender
    ctx.lineTo(halfW - 6, halfH);      // Rear right bumper
    ctx.lineTo(-halfW + 6, halfH);     // Rear left bumper
    ctx.lineTo(-halfW, halfH - 8);     // Rear left fender
    ctx.lineTo(-halfW, -halfH + 25);   // Front left fender
    ctx.lineTo(-halfW + 4, -halfH + 10);// Front left corner
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // 4. Front Aerodynamic Splitter
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(-halfW + 4, -halfH + 2, w - 8, 4);

    // 5. Front Headlights (High-intensity white/cyan LED bars)
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(-halfW + 5, -halfH + 7, 7, 3);
    ctx.fillRect(halfW - 12, -halfH + 7, 7, 3);

    // 6. Cockpit Canopy Glass (Glossy Cyan Tint)
    ctx.fillStyle = '#0284c7';
    ctx.beginPath();
    ctx.moveTo(0, -halfH + 18);
    ctx.lineTo(halfW - 8, -halfH + 26);
    ctx.lineTo(halfW - 8, halfH - 22);
    ctx.lineTo(-halfW + 8, halfH - 22);
    ctx.lineTo(-halfW + 8, -halfH + 26);
    ctx.closePath();
    ctx.fill();

    // Interior Pilot HUD Grid line
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(-halfW + 12, -halfH + 30);
    ctx.lineTo(halfW - 12, -halfH + 30);
    ctx.stroke();

    // 7. Engine Cover & Vents
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(-halfW + 10, halfH - 18, w - 20, 10);
    ctx.fillStyle = this.neonColor;
    ctx.fillRect(-2, halfH - 18, 4, 10);

    // 8. Rear Spoiler
    ctx.fillStyle = '#334155';
    ctx.fillRect(-halfW + 2, halfH - 6, w - 4, 4);

    // 9. Active Taillights / Brake Lights (Bright red flare if braking)
    const isBraking = window.inputManager && window.inputManager.down;
    ctx.fillStyle = isBraking ? '#ff0033' : '#ef4444';
    ctx.fillRect(-halfW + 4, halfH - 2, 8, isBraking ? 4 : 2);
    ctx.fillRect(halfW - 12, halfH - 2, 8, isBraking ? 4 : 2);

    ctx.restore();
  }
}

window.PlayerCar = PlayerCar;
