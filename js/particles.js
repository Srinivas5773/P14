/**
 * ============================================================================
 * CYBERPUNK RACER // PARTICLE & VISUAL EFFECTS SYSTEM
 * Clean, geometric 2D particles using canvas vector primitives.
 * ============================================================================
 */

class ParticleSystem {
  constructor() {
    this.particles = [];
    this.skidMarks = [];
    this.floatingTexts = [];
  }

  reset() {
    this.particles = [];
    this.skidMarks = [];
    this.floatingTexts = [];
  }

  /**
   * Spawn metal sparks and shards on car collision
   */
  emitCollisionSparks(x, y, count = 18, color = '#f59e0b') {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.5 + Math.random() * 6.0;
      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 1.5 + Math.random() * 2.5,
        color: Math.random() > 0.3 ? color : '#ffffff',
        alpha: 1.0,
        decay: 0.02 + Math.random() * 0.03,
        type: 'spark',
        length: 3 + Math.random() * 5
      });
    }
  }

  /**
   * Spawn exhaust smoke and nitro thruster flames
   */
  emitExhaust(x, y, angle, isNitro, color = '#00d2df') {
    const spread = (Math.random() - 0.5) * 0.35;
    const launchAngle = angle + Math.PI + spread;
    const speed = isNitro ? 4.5 + Math.random() * 3.0 : 1.5 + Math.random() * 2.0;

    this.particles.push({
      x: x,
      y: y,
      vx: Math.cos(launchAngle) * speed,
      vy: Math.sin(launchAngle) * speed,
      size: isNitro ? 3 + Math.random() * 3 : 2 + Math.random() * 2,
      color: isNitro ? (Math.random() > 0.4 ? color : '#ffffff') : '#334155',
      alpha: 0.9,
      decay: isNitro ? 0.06 : 0.035,
      type: isNitro ? 'flame' : 'smoke'
    });
  }

  /**
   * Spawn floating text notification (e.g. "+150 CREDITS", "REPAIRED!")
   */
  emitFloatingText(x, y, text, color = '#00d2df') {
    this.floatingTexts.push({
      x: x,
      y: y,
      vy: -1.2,
      text: text,
      color: color,
      alpha: 1.0,
      decay: 0.02
    });
  }

  /**
   * Add tire skid mark segment
   */
  addSkidMark(x1, y1, x2, y2, alpha = 0.5) {
    this.skidMarks.push({
      x1: x1,
      y1: y1,
      x2: x2,
      y2: y2,
      alpha: alpha,
      decay: 0.003
    });

    // Cap skid mark buffer to maintain high FPS
    if (this.skidMarks.length > 250) {
      this.skidMarks.shift();
    }
  }

  /**
   * Update particle positions and fade lifetimes
   */
  update(worldScrollY = 0) {
    // Update active particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy + worldScrollY;
      p.alpha -= p.decay;

      if (p.type === 'flame' || p.type === 'spark') {
        p.size *= 0.94;
      } else {
        p.size += 0.08;
      }

      if (p.alpha <= 0 || p.size <= 0.2) {
        this.particles.splice(i, 1);
      }
    }

    // Update floating score texts
    for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
      const t = this.floatingTexts[i];
      t.y += t.vy + worldScrollY * 0.5;
      t.alpha -= t.decay;
      if (t.alpha <= 0) {
        this.floatingTexts.splice(i, 1);
      }
    }

    // Fade skid marks and adjust for road scroll
    for (let i = this.skidMarks.length - 1; i >= 0; i--) {
      const sm = this.skidMarks[i];
      sm.y1 += worldScrollY;
      sm.y2 += worldScrollY;
      sm.alpha -= sm.decay;
      if (sm.alpha <= 0 || sm.y1 > 750) {
        this.skidMarks.splice(i, 1);
      }
    }
  }

  /**
   * Draw skid marks behind cars
   */
  drawSkidMarks(ctx) {
    ctx.save();
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    for (let i = 0; i < this.skidMarks.length; i++) {
      const sm = this.skidMarks[i];
      ctx.strokeStyle = `rgba(15, 20, 28, ${sm.alpha})`;
      ctx.beginPath();
      ctx.moveTo(sm.x1, sm.y1);
      ctx.lineTo(sm.x2, sm.y2);
      ctx.stroke();
    }
    ctx.restore();
  }

  /**
   * Draw all active particles
   */
  drawParticles(ctx) {
    ctx.save();
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      ctx.globalAlpha = Math.max(0, p.alpha);

      if (p.type === 'spark') {
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.size;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - p.vx * 0.8, p.y - p.vy * 0.8);
        ctx.stroke();
      } else {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.restore();
  }

  /**
   * Draw floating HUD texts
   */
  drawFloatingTexts(ctx) {
    ctx.save();
    ctx.font = 'bold 12px "Consolas", monospace';
    ctx.textAlign = 'center';
    for (let i = 0; i < this.floatingTexts.length; i++) {
      const t = this.floatingTexts[i];
      ctx.globalAlpha = Math.max(0, t.alpha);
      ctx.fillStyle = t.color;
      ctx.fillText(t.text, t.x, t.y);
    }
    ctx.restore();
  }
}

window.particleSystem = new ParticleSystem();
