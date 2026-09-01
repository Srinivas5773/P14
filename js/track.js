/**
 * ============================================================================
 * CYBERPUNK RACER // TRACK & ENVIRONMENT SYSTEM
 * Manages road rendering, scrolling lanes, curbs, city scenery, & finish line.
 * ============================================================================
 */

class TrackManager {
  constructor(canvasWidth = 960, canvasHeight = 640) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    // Road dimensions
    this.roadWidth = 520;
    this.roadLeft = (this.canvasWidth - this.roadWidth) / 2;
    this.roadRight = this.roadLeft + this.roadWidth;
    this.numLanes = 4;
    this.laneWidth = this.roadWidth / this.numLanes;

    // Lane center X positions
    this.laneCenters = [];
    for (let i = 0; i < this.numLanes; i++) {
      this.laneCenters.push(this.roadLeft + (i + 0.5) * this.laneWidth);
    }

    // Scroll offsets
    this.scrollY = 0;
    this.totalDistance = 0;

    // Lap tracking (for Circuit Mode)
    this.lapLength = 12000; // pixels per lap
    this.currentLap = 1;
    this.totalLaps = 3;
    this.lapStartTime = 0;
    this.bestLapTime = null;
    this.isFinishLineVisible = false;
    this.finishLineY = -200;

    // Road curve dynamics
    this.curveOffset = 0;
    this.targetCurve = 0;
    this.curveTimer = 0;

    // Scenery building elements (pre-generated)
    this.leftBuildings = this.generateBuildings(this.roadLeft - 20, 'left');
    this.rightBuildings = this.generateBuildings(this.canvasWidth - (this.roadRight + 20), 'right');

    // Overhead digital sign gantries
    this.gantries = [
      { y: -800, text: 'Speed limit: 180 km/h - Drive safe' },
      { y: -3500, text: 'Caution: Heavy traffic in right lanes' },
      { y: -6500, text: 'Next exit: Downtown District (2 km)' },
      { y: -9500, text: 'Lap Checkpoint - Watch for hazards' }
    ];
  }

  reset(mode = 'circuit') {
    this.scrollY = 0;
    this.totalDistance = 0;
    this.currentLap = 1;
    this.lapStartTime = performance.now();
    this.curveOffset = 0;
    this.targetCurve = 0;
    this.curveTimer = 0;
    this.isFinishLineVisible = false;
    this.finishLineY = -200;
  }

  /**
   * Generate static building silhouettes along track borders
   */
  generateBuildings(maxWidth, side) {
    const buildings = [];
    const count = 16;
    for (let i = 0; i < count; i++) {
      const width = 60 + Math.floor(Math.random() * (maxWidth - 70));
      const height = 100 + Math.floor(Math.random() * 180);
      buildings.push({
        baseY: i * 140,
        width: width,
        height: height,
        color: i % 2 === 0 ? '#111827' : '#0f172a',
        hasAntenna: Math.random() > 0.6,
        windowRows: 3 + Math.floor(Math.random() * 5),
        windowCols: 2 + Math.floor(Math.random() * 4),
        side: side
      });
    }
    return buildings;
  }

  /**
   * Updates track scroll, curve shifts, and lap progress
   */
  update(playerSpeed) {
    this.scrollY = (this.scrollY + playerSpeed) % 80;
    this.totalDistance += playerSpeed;

    // Subtle track curve variation
    this.curveTimer++;
    if (this.curveTimer > 180) {
      this.curveTimer = 0;
      this.targetCurve = (Math.random() - 0.5) * 40;
    }
    this.curveOffset += (this.targetCurve - this.curveOffset) * 0.02;

    // Update overhead sign gantries
    for (let i = 0; i < this.gantries.length; i++) {
      this.gantries[i].y += playerSpeed;
      if (this.gantries[i].y > 800) {
        this.gantries[i].y = -10000;
      }
    }

    // Lap & Finish Line computation (Circuit Mode)
    const lapProgress = this.totalDistance % this.lapLength;
    const distanceToLapEnd = this.lapLength - lapProgress;

    if (distanceToLapEnd < 600) {
      this.isFinishLineVisible = true;
      this.finishLineY = 500 - distanceToLapEnd;
    } else {
      this.isFinishLineVisible = false;
    }
  }

  /**
   * Check if player just crossed the lap finish line
   */
  checkLapCompletion(prevDistance) {
    const prevLap = Math.floor(prevDistance / this.lapLength);
    const currLap = Math.floor(this.totalDistance / this.lapLength);

    if (currLap > prevLap) {
      this.currentLap = Math.min(this.totalLaps + 1, currLap + 1);
      return true;
    }
    return false;
  }

  /**
   * Main render method for Track & Scenery
   */
  draw(ctx) {
    this.drawCityBackdrop(ctx);
    this.drawRoad(ctx);
    this.drawGantries(ctx);
  }

  /**
   * Draw left & right cyberpunk cityscapes
   */
  drawCityBackdrop(ctx) {
    ctx.save();

    // Dark grid ground
    ctx.fillStyle = '#090d14';
    ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

    // Left city buildings
    for (let i = 0; i < this.leftBuildings.length; i++) {
      const b = this.leftBuildings[i];
      const y = (b.baseY + this.totalDistance * 0.35) % (this.canvasHeight + 200) - 150;
      const x = this.roadLeft - b.width - 20;

      this.drawBuildingBlock(ctx, x, y, b.width, b.height, b);
    }

    // Right city buildings
    for (let i = 0; i < this.rightBuildings.length; i++) {
      const b = this.rightBuildings[i];
      const y = (b.baseY + this.totalDistance * 0.35) % (this.canvasHeight + 200) - 150;
      const x = this.roadRight + 20;

      this.drawBuildingBlock(ctx, x, y, b.width, b.height, b);
    }

    ctx.restore();
  }

  /**
   * Draw single building block with geometric windows and antenna
   */
  drawBuildingBlock(ctx, x, y, w, h, b) {
    ctx.fillStyle = b.color;
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;

    ctx.fillRect(x, y, w, h);
    ctx.strokeRect(x, y, w, h);

    // Rooftop HVAC unit
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(x + w * 0.2, y - 8, w * 0.3, 8);

    // Communication Antenna
    if (b.hasAntenna) {
      ctx.strokeStyle = '#64748b';
      ctx.beginPath();
      ctx.moveTo(x + w * 0.7, y);
      ctx.lineTo(x + w * 0.7, y - 24);
      ctx.stroke();

      // Flashing warning beacon
      const flash = Math.floor(Date.now() / 400) % 2 === 0;
      ctx.fillStyle = flash ? '#ef4444' : '#7f1d1d';
      ctx.beginPath();
      ctx.arc(x + w * 0.7, y - 24, 2, 0, Math.PI * 2);
      ctx.fill();
    }

    // Windows Grid
    ctx.fillStyle = '#1e3a8a';
    const cellW = (w - 16) / b.windowCols;
    const cellH = (h - 20) / b.windowRows;
    for (let r = 0; r < b.windowRows; r++) {
      for (let c = 0; c < b.windowCols; c++) {
        // Random illuminated window
        if ((r + c + Math.floor(b.baseY)) % 3 === 0) {
          ctx.fillStyle = '#0284c7';
        } else {
          ctx.fillStyle = '#0f172a';
        }
        ctx.fillRect(x + 8 + c * cellW, y + 10 + r * cellH, cellW - 4, cellH - 4);
      }
    }
  }

  /**
   * Draw asphalt highway, lane markings, curbs, and finish line
   */
  drawRoad(ctx) {
    ctx.save();

    // Road Shoulder Grass / Cyber Verge
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(this.roadLeft - 20, 0, 20, this.canvasHeight);
    ctx.fillRect(this.roadRight, 0, 20, this.canvasHeight);

    // Road Surface (Dark Asphalt)
    ctx.fillStyle = '#141824';
    ctx.fillRect(this.roadLeft, 0, this.roadWidth, this.canvasHeight);

    // Hazard Rumble Strips / Curbs (Left & Right)
    const curbSegmentH = 40;
    const curbOffset = this.scrollY % curbSegmentH;

    for (let y = -curbSegmentH; y < this.canvasHeight + curbSegmentH; y += curbSegmentH) {
      const isAlt = Math.floor((y - this.scrollY) / curbSegmentH) % 2 === 0;

      // Left curb
      ctx.fillStyle = isAlt ? '#f59e0b' : '#1e293b';
      ctx.fillRect(this.roadLeft - 10, y + curbOffset, 10, curbSegmentH);

      // Right curb
      ctx.fillStyle = isAlt ? '#f59e0b' : '#1e293b';
      ctx.fillRect(this.roadRight, y + curbOffset, 10, curbSegmentH);
    }

    // Outer Solid White Road Edge Lines
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(this.roadLeft, 0);
    ctx.lineTo(this.roadLeft, this.canvasHeight);
    ctx.moveTo(this.roadRight, 0);
    ctx.lineTo(this.roadRight, this.canvasHeight);
    ctx.stroke();

    // Inner Dashed Lane Markings
    const dashLength = 32;
    const dashGap = 32;
    const totalDashH = dashLength + dashGap;
    const dashOffset = this.scrollY % totalDashH;

    ctx.strokeStyle = '#00d2df';
    ctx.lineWidth = 2;
    ctx.setLineDash([dashLength, dashGap]);
    ctx.lineDashOffset = -dashOffset;

    for (let i = 1; i < this.numLanes; i++) {
      const laneX = this.roadLeft + i * this.laneWidth;
      ctx.beginPath();
      ctx.moveTo(laneX, -dashLength);
      ctx.lineTo(laneX, this.canvasHeight + dashLength);
      ctx.stroke();
    }
    ctx.setLineDash([]); // Reset dash

    // Draw Finish Line Gate (If within visible range)
    if (this.isFinishLineVisible) {
      this.drawFinishLine(ctx, this.finishLineY);
    }

    ctx.restore();
  }

  /**
   * Draw Checkered Digital Finish Line Banner
   */
  drawFinishLine(ctx, y) {
    ctx.save();
    const boxSize = 16;
    const rows = 2;
    const cols = Math.floor(this.roadWidth / boxSize);

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const isWhite = (r + c) % 2 === 0;
        ctx.fillStyle = isWhite ? '#ffffff' : '#0f172a';
        ctx.fillRect(this.roadLeft + c * boxSize, y + r * boxSize, boxSize, boxSize);
      }
    }

    // Neon Checkpoint Laser Line
    ctx.strokeStyle = '#00d2df';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(this.roadLeft, y);
    ctx.lineTo(this.roadRight, y);
    ctx.moveTo(this.roadLeft, y + rows * boxSize);
    ctx.lineTo(this.roadRight, y + rows * boxSize);
    ctx.stroke();

    // Finish / Checkpoint text
    ctx.fillStyle = '#00d2df';
    ctx.font = 'bold 12px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('FINISH LINE // CHECKPOINT', this.canvasWidth / 2, y - 8);

    ctx.restore();
  }

  /**
   * Draw overhead digital traffic sign gantries
   */
  drawGantries(ctx) {
    ctx.save();
    for (let i = 0; i < this.gantries.length; i++) {
      const g = this.gantries[i];
      if (g.y > -80 && g.y < this.canvasHeight + 80) {
        // Gantry Crossbeam
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(this.roadLeft - 30, g.y - 12, this.roadWidth + 60, 24);
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 2;
        ctx.strokeRect(this.roadLeft - 30, g.y - 12, this.roadWidth + 60, 24);

        // Sign Panel
        ctx.fillStyle = '#090d14';
        ctx.fillRect(this.roadLeft + 20, g.y - 8, this.roadWidth - 40, 16);
        ctx.strokeStyle = '#00d2df';
        ctx.lineWidth = 1;
        ctx.strokeRect(this.roadLeft + 20, g.y - 8, this.roadWidth - 40, 16);

        // Digital LED Text
        ctx.fillStyle = '#f59e0b';
        ctx.font = 'bold 10px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(g.text, this.canvasWidth / 2, g.y + 4);

        // Support Pillars
        ctx.fillStyle = '#334155';
        ctx.fillRect(this.roadLeft - 36, g.y - 12, 10, 36);
        ctx.fillRect(this.roadRight + 26, g.y - 12, 10, 36);
      }
    }
    ctx.restore();
  }
}

window.TrackManager = TrackManager;
window.trackManager = new TrackManager();
