/**
 * ============================================================================
 * CYBERPUNK RACER // COLLECTIBLES & ROAD HAZARDS SYSTEM
 * Items, data chips, repair packs, nitro canisters, oil slicks, EMP hazards.
 * ============================================================================
 */

class CollectibleManager {
  constructor() {
    this.items = [];
    this.spawnTimer = 0;
  }

  reset() {
    this.items = [];
    this.spawnTimer = 0;
  }

  /**
   * Spawn randomized items and road hazards along the track lanes
   */
  update(trackSpeed, laneCenters, roadBounds) {
    // Scroll active items down screen
    for (let i = this.items.length - 1; i >= 0; i--) {
      const it = this.items[i];
      it.y += trackSpeed;
      it.animationTick = (it.animationTick || 0) + 0.05;

      // Remove if past bottom of screen
      if (it.y > 750) {
        this.items.splice(i, 1);
      }
    }

    // Spawn logic
    this.spawnTimer += 1;
    if (this.spawnTimer > 75) {
      this.spawnTimer = 0;
      this.spawnRandomEntity(laneCenters, roadBounds);
    }
  }

  /**
   * Spawns an item or obstacle at the top of the track
   */
  spawnRandomEntity(laneCenters, roadBounds) {
    if (!laneCenters || laneCenters.length === 0) return;

    // Pick a random lane
    const laneIndex = Math.floor(Math.random() * laneCenters.length);
    const x = laneCenters[laneIndex] + (Math.random() - 0.5) * 20;
    const y = -60;

    const roll = Math.random();

    if (roll < 0.45) {
      // Data Chip / Credit Coin
      this.items.push({
        type: 'coin',
        x: x,
        y: y,
        radius: 12,
        value: 150,
        color: '#f59e0b',
        animationTick: Math.random() * Math.PI
      });
    } else if (roll < 0.65) {
      // Nitro Boost Canister
      this.items.push({
        type: 'nitro',
        x: x,
        y: y,
        radius: 14,
        color: '#00d2df',
        animationTick: 0
      });
    } else if (roll < 0.78) {
      // Nano-Repair Kit
      this.items.push({
        type: 'repair',
        x: x,
        y: y,
        radius: 14,
        color: '#10b981',
        animationTick: 0
      });
    } else if (roll < 0.90) {
      // Oil Slick Hazard
      this.items.push({
        type: 'oil',
        x: x,
        y: y,
        radius: 22,
        width: 44,
        height: 28,
        color: '#1e293b',
        animationTick: 0
      });
    } else {
      // EMP Disruptor Field Hazard
      this.items.push({
        type: 'emp',
        x: x,
        y: y,
        radius: 20,
        width: 48,
        height: 18,
        color: '#8b5cf6',
        animationTick: 0
      });
    }
  }

  /**
   * Check collision with player car bounding box/circle
   */
  checkCollisions(playerCar) {
    const hits = [];
    const px = playerCar.x;
    const py = playerCar.y;
    const pRadius = 18;

    for (let i = this.items.length - 1; i >= 0; i--) {
      const it = this.items[i];
      const dist = Math.hypot(px - it.x, py - it.y);

      if (dist < pRadius + it.radius) {
        hits.push(it);
        // If it's a collectible, remove from world. If it's a persistent hazard like oil, remove once stepped or let it pass
        this.items.splice(i, 1);
      }
    }
    return hits;
  }

  /**
   * Draw all items & hazards using crisp Canvas vector shapes
   */
  draw(ctx) {
    ctx.save();
    for (let i = 0; i < this.items.length; i++) {
      const it = this.items[i];

      if (it.type === 'coin') {
        // Rotating Cyber Data Chip (Diamond / Hexagon)
        const scaleX = Math.cos(it.animationTick);
        ctx.save();
        ctx.translate(it.x, it.y);
        ctx.scale(scaleX, 1);

        // Outer Diamond
        ctx.fillStyle = '#f59e0b';
        ctx.strokeStyle = '#fef08a';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(0, -11);
        ctx.lineTo(11, 0);
        ctx.lineTo(0, 11);
        ctx.lineTo(-11, 0);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Inner Core
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(0, 0, 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();

      } else if (it.type === 'nitro') {
        // Cyan Nitro Canister
        ctx.save();
        ctx.translate(it.x, it.y);

        ctx.fillStyle = '#00d2df';
        ctx.strokeStyle = '#e0f2fe';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(-8, -12, 16, 24, 4);
        ctx.fill();
        ctx.stroke();

        // Valve top
        ctx.fillStyle = '#94a3b8';
        ctx.fillRect(-4, -15, 8, 3);

        // Text tag
        ctx.fillStyle = '#090d14';
        ctx.font = 'bold 8px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('N2O', 0, 3);

        ctx.restore();

      } else if (it.type === 'repair') {
        // Green Nano-Repair Kit
        ctx.save();
        ctx.translate(it.x, it.y);

        ctx.fillStyle = '#10b981';
        ctx.strokeStyle = '#dcfce7';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(-10, -10, 20, 20, 3);
        ctx.fill();
        ctx.stroke();

        // White Medical Cross
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(-2, -7, 4, 14);
        ctx.fillRect(-7, -2, 14, 4);

        ctx.restore();

      } else if (it.type === 'oil') {
        // Dark slick puddle
        ctx.save();
        ctx.translate(it.x, it.y);
        ctx.fillStyle = '#0f172a';
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.ellipse(0, 0, 22, 14, Math.sin(it.animationTick) * 0.1, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Iridescent sheen highlight
        ctx.fillStyle = 'rgba(236, 72, 153, 0.4)';
        ctx.beginPath();
        ctx.ellipse(-4, -2, 10, 5, -0.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();

      } else if (it.type === 'emp') {
        // Purple EMP Field Hazard
        ctx.save();
        ctx.translate(it.x, it.y);

        ctx.fillStyle = 'rgba(139, 92, 246, 0.25)';
        ctx.strokeStyle = '#8b5cf6';
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.roundRect(-22, -9, 44, 18, 4);
        ctx.fill();
        ctx.stroke();

        // Warning Hazard stripes
        ctx.fillStyle = '#c084fc';
        ctx.font = 'bold 9px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('⚡ EMP ⚡', 0, 3);

        ctx.restore();
      }
    }
    ctx.restore();
  }
}

window.CollectibleManager = CollectibleManager;
window.collectibleManager = new CollectibleManager();
