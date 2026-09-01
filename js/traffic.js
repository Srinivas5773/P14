/**
 * ============================================================================
 * CYBERPUNK RACER // TRAFFIC & AI VEHICLES
 * Procedural AI traffic cars with distinct archetypes, speeds, and behaviors.
 * ============================================================================
 */

class TrafficManager {
  constructor() {
    this.vehicles = [];
    this.spawnTimer = 0;
    this.overtakeCount = 0;

    // Vehicle color palettes
    this.palette = [
      { body: '#3b82f6', trim: '#60a5fa', light: '#93c5fd' }, // Blue
      { body: '#ef4444', trim: '#f87171', light: '#fca5a5' }, // Red
      { body: '#eab308', trim: '#facc15', light: '#fef08a' }, // Yellow
      { body: '#64748b', trim: '#94a3b8', light: '#cbd5e1' }, // Steel Grey
      { body: '#8b5cf6', trim: '#a78bfa', light: '#c4b5fd' }, // Purple
    ];
  }

  reset() {
    this.vehicles = [];
    this.spawnTimer = 0;
    this.overtakeCount = 0;
  }

  /**
   * Updates traffic movement, lane changes, overtakes, and spawning
   */
  update(playerSpeed, laneCenters, difficultyMultiplier = 1.0) {
    let overtakesThisFrame = 0;

    // Update existing traffic cars
    for (let i = this.vehicles.length - 1; i >= 0; i--) {
      const v = this.vehicles[i];

      // Relative motion: player car scrolling vs traffic forward speed
      const relativeSpeed = playerSpeed - v.speed;
      v.y += relativeSpeed;

      // Handle Lane changing for Tuner cars
      if (v.isLaneChanger) {
        v.laneChangeTimer -= 1;
        if (v.laneChangeTimer <= 0) {
          v.laneChangeTimer = 180 + Math.random() * 200;
          // Pick adjacent lane
          const currentLaneIdx = laneCenters.indexOf(v.targetX);
          if (currentLaneIdx !== -1) {
            const dir = Math.random() > 0.5 ? 1 : -1;
            const newLaneIdx = Math.max(0, Math.min(laneCenters.length - 1, currentLaneIdx + dir));
            v.targetX = laneCenters[newLaneIdx];
            v.blinker = dir > 0 ? 'right' : 'left';
            v.blinkerTimer = 60;
          }
        }

        // Smooth steering toward target lane
        if (Math.abs(v.x - v.targetX) > 2) {
          const steerSpeed = 1.2;
          v.x += (v.targetX > v.x ? steerSpeed : -steerSpeed);
        } else {
          v.x = v.targetX;
          if (v.blinkerTimer > 0) v.blinkerTimer--;
        }
      }

      // Track overtake when traffic car drops below player position
      if (!v.overtaken && v.y > 480) {
        v.overtaken = true;
        this.overtakeCount++;
        overtakesThisFrame++;
      }

      // Despawn off screen
      if (v.y > 800 || v.y < -350) {
        this.vehicles.splice(i, 1);
      }
    }

    // Spawn logic based on difficulty
    this.spawnTimer += 1;
    const spawnThreshold = Math.max(45, 95 - difficultyMultiplier * 10);

    if (this.spawnTimer > spawnThreshold) {
      this.spawnTimer = 0;
      this.spawnTrafficVehicle(laneCenters);
    }

    return overtakesThisFrame;
  }

  /**
   * Spawns a traffic vehicle in an available lane
   */
  spawnTrafficVehicle(laneCenters) {
    if (!laneCenters || laneCenters.length === 0) return;

    // Pick random lane
    const laneIdx = Math.floor(Math.random() * laneCenters.length);
    const laneX = laneCenters[laneIdx];

    // Check if lane is already blocked near top
    const isOccupied = this.vehicles.some(v => Math.abs(v.x - laneX) < 40 && v.y < 120 && v.y > -200);
    if (isOccupied) return;

    // Archetype selection
    const roll = Math.random();
    let archetype = 'sedan';
    let width = 34;
    let height = 62;
    let speed = 4.0 + Math.random() * 1.5;
    let isLaneChanger = false;

    if (roll < 0.22) {
      // Armored Cyber Hauler / Truck
      archetype = 'truck';
      width = 42;
      height = 84;
      speed = 2.8 + Math.random() * 1.0;
    } else if (roll < 0.45) {
      // Tuner / Coupe (Fast & lane changer)
      archetype = 'tuner';
      width = 32;
      height = 58;
      speed = 5.5 + Math.random() * 2.0;
      isLaneChanger = true;
    } else if (roll < 0.60) {
      // Sector Enforcer Patrol Car
      archetype = 'patrol';
      width = 36;
      height = 64;
      speed = 4.8 + Math.random() * 1.2;
    }

    const theme = this.palette[Math.floor(Math.random() * this.palette.length)];

    this.vehicles.push({
      archetype: archetype,
      x: laneX,
      y: -120,
      width: width,
      height: height,
      speed: speed,
      targetX: laneX,
      isLaneChanger: isLaneChanger,
      laneChangeTimer: 90 + Math.random() * 120,
      blinker: null,
      blinkerTimer: 0,
      color: theme,
      overtaken: false
    });
  }

  /**
   * Check collision between player car and all traffic vehicles
   */
  checkCollisions(playerCar) {
    const collisions = [];
    const px = playerCar.x;
    const py = playerCar.y;
    const pw = playerCar.width * 0.75;
    const ph = playerCar.height * 0.75;

    for (let i = 0; i < this.vehicles.length; i++) {
      const v = this.vehicles[i];
      const vw = v.width * 0.8;
      const vh = v.height * 0.8;

      // Axis-Aligned Bounding Box test
      if (
        Math.abs(px - v.x) < (pw + vw) / 2 &&
        Math.abs(py - v.y) < (ph + vh) / 2
      ) {
        collisions.push(v);
      }
    }
    return collisions;
  }

  /**
   * Draw all traffic cars with clean top-down geometric styling
   */
  draw(ctx) {
    ctx.save();
    for (let i = 0; i < this.vehicles.length; i++) {
      const v = this.vehicles[i];
      this.drawVehicle(ctx, v);
    }
    ctx.restore();
  }

  /**
   * Draw individual vehicle
   */
  drawVehicle(ctx, v) {
    ctx.save();
    ctx.translate(v.x, v.y);

    const w = v.width;
    const h = v.height;
    const halfW = w / 2;
    const halfH = h / 2;

    // Drop shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
    ctx.fillRect(-halfW + 3, -halfH + 4, w, h);

    if (v.archetype === 'truck') {
      // Armored Heavy Truck
      ctx.fillStyle = '#1e293b';
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(-halfW, -halfH, w, h, 3);
      ctx.fill();
      ctx.stroke();

      // Cargo Container Roof Panels
      ctx.fillStyle = '#334155';
      ctx.fillRect(-halfW + 4, -halfH + 24, w - 8, h - 30);

      // Hazard Lines on Rear
      ctx.fillStyle = '#f59e0b';
      ctx.fillRect(-halfW + 4, halfH - 6, (w - 8) / 2, 4);
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, halfH - 6, (w - 8) / 2, 4);

      // Cab Windshield
      ctx.fillStyle = '#0ea5e9';
      ctx.fillRect(-halfW + 5, -halfH + 8, w - 10, 10);

      // Taillights
      ctx.fillStyle = '#ef4444';
      ctx.fillRect(-halfW + 2, halfH - 3, 6, 3);
      ctx.fillRect(halfW - 8, halfH - 3, 6, 3);

    } else if (v.archetype === 'patrol') {
      // Sector Enforcer Patrol Cruiser
      ctx.fillStyle = '#0f172a';
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(-halfW, -halfH, w, h, 4);
      ctx.fill();
      ctx.stroke();

      // Windshield
      ctx.fillStyle = '#38bdf8';
      ctx.fillRect(-halfW + 5, -halfH + 12, w - 10, 9);
      // Rear Glass
      ctx.fillRect(-halfW + 6, halfH - 18, w - 12, 6);

      // Flashing Emergency Light Bar
      const flash = Math.floor(Date.now() / 120) % 2 === 0;
      ctx.fillStyle = flash ? '#ef4444' : '#00d2df';
      ctx.fillRect(-8, -4, 7, 5);
      ctx.fillStyle = flash ? '#00d2df' : '#ef4444';
      ctx.fillRect(1, -4, 7, 5);

      // Taillights
      ctx.fillStyle = '#ef4444';
      ctx.fillRect(-halfW + 2, halfH - 2, 5, 2);
      ctx.fillRect(halfW - 7, halfH - 2, 5, 2);

    } else {
      // Standard Cyber Sedan / Tuner Coupe
      ctx.fillStyle = v.color.body;
      ctx.strokeStyle = v.color.trim;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(-halfW, -halfH, w, h, 4);
      ctx.fill();
      ctx.stroke();

      // Front Windshield
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(-halfW + 4, -halfH + 12, w - 8, 10);
      ctx.fillStyle = v.color.light;
      ctx.fillRect(-halfW + 6, -halfH + 14, w - 12, 6);

      // Rear Glass
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(-halfW + 5, halfH - 18, w - 10, 6);

      // Roof Accent Stripe
      ctx.fillStyle = v.color.trim;
      ctx.fillRect(-2, -halfH + 24, 4, h - 44);

      // Taillights
      ctx.fillStyle = '#ef4444';
      ctx.fillRect(-halfW + 2, halfH - 2, 6, 2);
      ctx.fillRect(halfW - 8, halfH - 2, 6, 2);

      // Front Headlights
      ctx.fillStyle = '#f8fafc';
      ctx.fillRect(-halfW + 2, -halfH, 5, 2);
      ctx.fillRect(halfW - 7, -halfH, 5, 2);

      // Turn signal blinker
      if (v.blinker && v.blinkerTimer > 0 && Math.floor(Date.now() / 150) % 2 === 0) {
        ctx.fillStyle = '#f59e0b';
        if (v.blinker === 'left') {
          ctx.fillRect(-halfW - 2, -halfH + 2, 3, 6);
        } else {
          ctx.fillRect(halfW - 1, -halfH + 2, 3, 6);
        }
      }
    }

    ctx.restore();
  }
}

window.TrafficManager = TrafficManager;
window.trafficManager = new TrafficManager();
