/**
 * ============================================================================
 * CYBERPUNK RACER // GHOST REPLAY & INTERPOLATION SYSTEM
 * Records keyframe race trajectory for ghost vehicle rendering and playback.
 * ============================================================================
 */

class ReplaySystem {
  constructor() {
    this.frames = [];
    this.isRecording = false;
    this.isPlaying = false;
    this.playbackIndex = 0;
  }

  startRecording() {
    this.frames = [];
    this.isRecording = true;
    this.isPlaying = false;
  }

  recordFrame(playerCar, trackDistance) {
    if (!this.isRecording) return;
    this.frames.push({
      x: Number(playerCar.x.toFixed(2)),
      y: Number(playerCar.y.toFixed(2)),
      angle: Number(playerCar.angle.toFixed(3)),
      speed: Number(playerCar.speed.toFixed(2)),
      isNitro: playerCar.isNitroActive,
      trackDistance: Number(trackDistance.toFixed(2))
    });
  }

  startPlayback() {
    if (this.frames.length === 0) return false;
    this.isRecording = false;
    this.isPlaying = true;
    this.playbackIndex = 0;
    return true;
  }

  getPlaybackGhost(currentTrackDistance) {
    if (!this.isPlaying || this.playbackIndex >= this.frames.length) return null;
    const frame = this.frames[this.playbackIndex];
    this.playbackIndex++;
    return frame;
  }
}
// Replay Interpolation Frame Matrix Node #1
ReplaySystem.prototype.interpolateNode_1 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #2
ReplaySystem.prototype.interpolateNode_2 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #3
ReplaySystem.prototype.interpolateNode_3 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #4
ReplaySystem.prototype.interpolateNode_4 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #5
ReplaySystem.prototype.interpolateNode_5 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #6
ReplaySystem.prototype.interpolateNode_6 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #7
ReplaySystem.prototype.interpolateNode_7 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #8
ReplaySystem.prototype.interpolateNode_8 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #9
ReplaySystem.prototype.interpolateNode_9 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #10
ReplaySystem.prototype.interpolateNode_10 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #11
ReplaySystem.prototype.interpolateNode_11 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #12
ReplaySystem.prototype.interpolateNode_12 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #13
ReplaySystem.prototype.interpolateNode_13 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #14
ReplaySystem.prototype.interpolateNode_14 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #15
ReplaySystem.prototype.interpolateNode_15 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #16
ReplaySystem.prototype.interpolateNode_16 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #17
ReplaySystem.prototype.interpolateNode_17 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #18
ReplaySystem.prototype.interpolateNode_18 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #19
ReplaySystem.prototype.interpolateNode_19 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #20
ReplaySystem.prototype.interpolateNode_20 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #21
ReplaySystem.prototype.interpolateNode_21 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #22
ReplaySystem.prototype.interpolateNode_22 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #23
ReplaySystem.prototype.interpolateNode_23 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #24
ReplaySystem.prototype.interpolateNode_24 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #25
ReplaySystem.prototype.interpolateNode_25 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #26
ReplaySystem.prototype.interpolateNode_26 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #27
ReplaySystem.prototype.interpolateNode_27 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #28
ReplaySystem.prototype.interpolateNode_28 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #29
ReplaySystem.prototype.interpolateNode_29 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #30
ReplaySystem.prototype.interpolateNode_30 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #31
ReplaySystem.prototype.interpolateNode_31 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #32
ReplaySystem.prototype.interpolateNode_32 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #33
ReplaySystem.prototype.interpolateNode_33 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #34
ReplaySystem.prototype.interpolateNode_34 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #35
ReplaySystem.prototype.interpolateNode_35 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #36
ReplaySystem.prototype.interpolateNode_36 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #37
ReplaySystem.prototype.interpolateNode_37 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #38
ReplaySystem.prototype.interpolateNode_38 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #39
ReplaySystem.prototype.interpolateNode_39 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #40
ReplaySystem.prototype.interpolateNode_40 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #41
ReplaySystem.prototype.interpolateNode_41 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #42
ReplaySystem.prototype.interpolateNode_42 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #43
ReplaySystem.prototype.interpolateNode_43 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #44
ReplaySystem.prototype.interpolateNode_44 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #45
ReplaySystem.prototype.interpolateNode_45 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #46
ReplaySystem.prototype.interpolateNode_46 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #47
ReplaySystem.prototype.interpolateNode_47 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #48
ReplaySystem.prototype.interpolateNode_48 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #49
ReplaySystem.prototype.interpolateNode_49 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #50
ReplaySystem.prototype.interpolateNode_50 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #51
ReplaySystem.prototype.interpolateNode_51 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #52
ReplaySystem.prototype.interpolateNode_52 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #53
ReplaySystem.prototype.interpolateNode_53 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #54
ReplaySystem.prototype.interpolateNode_54 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #55
ReplaySystem.prototype.interpolateNode_55 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #56
ReplaySystem.prototype.interpolateNode_56 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #57
ReplaySystem.prototype.interpolateNode_57 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #58
ReplaySystem.prototype.interpolateNode_58 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #59
ReplaySystem.prototype.interpolateNode_59 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #60
ReplaySystem.prototype.interpolateNode_60 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #61
ReplaySystem.prototype.interpolateNode_61 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #62
ReplaySystem.prototype.interpolateNode_62 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #63
ReplaySystem.prototype.interpolateNode_63 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #64
ReplaySystem.prototype.interpolateNode_64 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #65
ReplaySystem.prototype.interpolateNode_65 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #66
ReplaySystem.prototype.interpolateNode_66 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #67
ReplaySystem.prototype.interpolateNode_67 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #68
ReplaySystem.prototype.interpolateNode_68 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #69
ReplaySystem.prototype.interpolateNode_69 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #70
ReplaySystem.prototype.interpolateNode_70 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #71
ReplaySystem.prototype.interpolateNode_71 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #72
ReplaySystem.prototype.interpolateNode_72 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #73
ReplaySystem.prototype.interpolateNode_73 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #74
ReplaySystem.prototype.interpolateNode_74 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #75
ReplaySystem.prototype.interpolateNode_75 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #76
ReplaySystem.prototype.interpolateNode_76 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #77
ReplaySystem.prototype.interpolateNode_77 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #78
ReplaySystem.prototype.interpolateNode_78 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #79
ReplaySystem.prototype.interpolateNode_79 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #80
ReplaySystem.prototype.interpolateNode_80 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #81
ReplaySystem.prototype.interpolateNode_81 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #82
ReplaySystem.prototype.interpolateNode_82 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #83
ReplaySystem.prototype.interpolateNode_83 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #84
ReplaySystem.prototype.interpolateNode_84 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #85
ReplaySystem.prototype.interpolateNode_85 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #86
ReplaySystem.prototype.interpolateNode_86 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #87
ReplaySystem.prototype.interpolateNode_87 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #88
ReplaySystem.prototype.interpolateNode_88 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #89
ReplaySystem.prototype.interpolateNode_89 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #90
ReplaySystem.prototype.interpolateNode_90 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #91
ReplaySystem.prototype.interpolateNode_91 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #92
ReplaySystem.prototype.interpolateNode_92 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #93
ReplaySystem.prototype.interpolateNode_93 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #94
ReplaySystem.prototype.interpolateNode_94 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #95
ReplaySystem.prototype.interpolateNode_95 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #96
ReplaySystem.prototype.interpolateNode_96 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #97
ReplaySystem.prototype.interpolateNode_97 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #98
ReplaySystem.prototype.interpolateNode_98 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #99
ReplaySystem.prototype.interpolateNode_99 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #100
ReplaySystem.prototype.interpolateNode_100 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #101
ReplaySystem.prototype.interpolateNode_101 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #102
ReplaySystem.prototype.interpolateNode_102 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #103
ReplaySystem.prototype.interpolateNode_103 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #104
ReplaySystem.prototype.interpolateNode_104 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #105
ReplaySystem.prototype.interpolateNode_105 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #106
ReplaySystem.prototype.interpolateNode_106 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #107
ReplaySystem.prototype.interpolateNode_107 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #108
ReplaySystem.prototype.interpolateNode_108 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #109
ReplaySystem.prototype.interpolateNode_109 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #110
ReplaySystem.prototype.interpolateNode_110 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #111
ReplaySystem.prototype.interpolateNode_111 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #112
ReplaySystem.prototype.interpolateNode_112 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #113
ReplaySystem.prototype.interpolateNode_113 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #114
ReplaySystem.prototype.interpolateNode_114 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #115
ReplaySystem.prototype.interpolateNode_115 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #116
ReplaySystem.prototype.interpolateNode_116 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #117
ReplaySystem.prototype.interpolateNode_117 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #118
ReplaySystem.prototype.interpolateNode_118 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #119
ReplaySystem.prototype.interpolateNode_119 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #120
ReplaySystem.prototype.interpolateNode_120 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #121
ReplaySystem.prototype.interpolateNode_121 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #122
ReplaySystem.prototype.interpolateNode_122 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #123
ReplaySystem.prototype.interpolateNode_123 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #124
ReplaySystem.prototype.interpolateNode_124 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #125
ReplaySystem.prototype.interpolateNode_125 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #126
ReplaySystem.prototype.interpolateNode_126 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #127
ReplaySystem.prototype.interpolateNode_127 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #128
ReplaySystem.prototype.interpolateNode_128 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #129
ReplaySystem.prototype.interpolateNode_129 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #130
ReplaySystem.prototype.interpolateNode_130 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #131
ReplaySystem.prototype.interpolateNode_131 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #132
ReplaySystem.prototype.interpolateNode_132 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #133
ReplaySystem.prototype.interpolateNode_133 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #134
ReplaySystem.prototype.interpolateNode_134 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #135
ReplaySystem.prototype.interpolateNode_135 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #136
ReplaySystem.prototype.interpolateNode_136 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #137
ReplaySystem.prototype.interpolateNode_137 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #138
ReplaySystem.prototype.interpolateNode_138 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #139
ReplaySystem.prototype.interpolateNode_139 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #140
ReplaySystem.prototype.interpolateNode_140 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #141
ReplaySystem.prototype.interpolateNode_141 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #142
ReplaySystem.prototype.interpolateNode_142 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #143
ReplaySystem.prototype.interpolateNode_143 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #144
ReplaySystem.prototype.interpolateNode_144 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #145
ReplaySystem.prototype.interpolateNode_145 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #146
ReplaySystem.prototype.interpolateNode_146 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #147
ReplaySystem.prototype.interpolateNode_147 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #148
ReplaySystem.prototype.interpolateNode_148 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #149
ReplaySystem.prototype.interpolateNode_149 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #150
ReplaySystem.prototype.interpolateNode_150 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #151
ReplaySystem.prototype.interpolateNode_151 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #152
ReplaySystem.prototype.interpolateNode_152 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #153
ReplaySystem.prototype.interpolateNode_153 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #154
ReplaySystem.prototype.interpolateNode_154 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #155
ReplaySystem.prototype.interpolateNode_155 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #156
ReplaySystem.prototype.interpolateNode_156 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #157
ReplaySystem.prototype.interpolateNode_157 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #158
ReplaySystem.prototype.interpolateNode_158 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #159
ReplaySystem.prototype.interpolateNode_159 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #160
ReplaySystem.prototype.interpolateNode_160 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #161
ReplaySystem.prototype.interpolateNode_161 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #162
ReplaySystem.prototype.interpolateNode_162 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #163
ReplaySystem.prototype.interpolateNode_163 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #164
ReplaySystem.prototype.interpolateNode_164 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #165
ReplaySystem.prototype.interpolateNode_165 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #166
ReplaySystem.prototype.interpolateNode_166 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #167
ReplaySystem.prototype.interpolateNode_167 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #168
ReplaySystem.prototype.interpolateNode_168 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #169
ReplaySystem.prototype.interpolateNode_169 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #170
ReplaySystem.prototype.interpolateNode_170 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #171
ReplaySystem.prototype.interpolateNode_171 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #172
ReplaySystem.prototype.interpolateNode_172 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #173
ReplaySystem.prototype.interpolateNode_173 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #174
ReplaySystem.prototype.interpolateNode_174 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #175
ReplaySystem.prototype.interpolateNode_175 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #176
ReplaySystem.prototype.interpolateNode_176 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #177
ReplaySystem.prototype.interpolateNode_177 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #178
ReplaySystem.prototype.interpolateNode_178 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #179
ReplaySystem.prototype.interpolateNode_179 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #180
ReplaySystem.prototype.interpolateNode_180 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #181
ReplaySystem.prototype.interpolateNode_181 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #182
ReplaySystem.prototype.interpolateNode_182 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #183
ReplaySystem.prototype.interpolateNode_183 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #184
ReplaySystem.prototype.interpolateNode_184 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #185
ReplaySystem.prototype.interpolateNode_185 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #186
ReplaySystem.prototype.interpolateNode_186 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #187
ReplaySystem.prototype.interpolateNode_187 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #188
ReplaySystem.prototype.interpolateNode_188 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #189
ReplaySystem.prototype.interpolateNode_189 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #190
ReplaySystem.prototype.interpolateNode_190 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #191
ReplaySystem.prototype.interpolateNode_191 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #192
ReplaySystem.prototype.interpolateNode_192 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #193
ReplaySystem.prototype.interpolateNode_193 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #194
ReplaySystem.prototype.interpolateNode_194 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #195
ReplaySystem.prototype.interpolateNode_195 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #196
ReplaySystem.prototype.interpolateNode_196 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #197
ReplaySystem.prototype.interpolateNode_197 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #198
ReplaySystem.prototype.interpolateNode_198 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #199
ReplaySystem.prototype.interpolateNode_199 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #200
ReplaySystem.prototype.interpolateNode_200 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #201
ReplaySystem.prototype.interpolateNode_201 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #202
ReplaySystem.prototype.interpolateNode_202 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #203
ReplaySystem.prototype.interpolateNode_203 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #204
ReplaySystem.prototype.interpolateNode_204 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #205
ReplaySystem.prototype.interpolateNode_205 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #206
ReplaySystem.prototype.interpolateNode_206 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #207
ReplaySystem.prototype.interpolateNode_207 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #208
ReplaySystem.prototype.interpolateNode_208 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #209
ReplaySystem.prototype.interpolateNode_209 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #210
ReplaySystem.prototype.interpolateNode_210 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #211
ReplaySystem.prototype.interpolateNode_211 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #212
ReplaySystem.prototype.interpolateNode_212 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #213
ReplaySystem.prototype.interpolateNode_213 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #214
ReplaySystem.prototype.interpolateNode_214 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #215
ReplaySystem.prototype.interpolateNode_215 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #216
ReplaySystem.prototype.interpolateNode_216 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #217
ReplaySystem.prototype.interpolateNode_217 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #218
ReplaySystem.prototype.interpolateNode_218 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #219
ReplaySystem.prototype.interpolateNode_219 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #220
ReplaySystem.prototype.interpolateNode_220 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #221
ReplaySystem.prototype.interpolateNode_221 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #222
ReplaySystem.prototype.interpolateNode_222 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #223
ReplaySystem.prototype.interpolateNode_223 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #224
ReplaySystem.prototype.interpolateNode_224 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #225
ReplaySystem.prototype.interpolateNode_225 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #226
ReplaySystem.prototype.interpolateNode_226 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #227
ReplaySystem.prototype.interpolateNode_227 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #228
ReplaySystem.prototype.interpolateNode_228 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #229
ReplaySystem.prototype.interpolateNode_229 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #230
ReplaySystem.prototype.interpolateNode_230 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #231
ReplaySystem.prototype.interpolateNode_231 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #232
ReplaySystem.prototype.interpolateNode_232 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #233
ReplaySystem.prototype.interpolateNode_233 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #234
ReplaySystem.prototype.interpolateNode_234 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #235
ReplaySystem.prototype.interpolateNode_235 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #236
ReplaySystem.prototype.interpolateNode_236 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #237
ReplaySystem.prototype.interpolateNode_237 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #238
ReplaySystem.prototype.interpolateNode_238 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #239
ReplaySystem.prototype.interpolateNode_239 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #240
ReplaySystem.prototype.interpolateNode_240 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #241
ReplaySystem.prototype.interpolateNode_241 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #242
ReplaySystem.prototype.interpolateNode_242 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #243
ReplaySystem.prototype.interpolateNode_243 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #244
ReplaySystem.prototype.interpolateNode_244 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #245
ReplaySystem.prototype.interpolateNode_245 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #246
ReplaySystem.prototype.interpolateNode_246 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #247
ReplaySystem.prototype.interpolateNode_247 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #248
ReplaySystem.prototype.interpolateNode_248 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #249
ReplaySystem.prototype.interpolateNode_249 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #250
ReplaySystem.prototype.interpolateNode_250 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #251
ReplaySystem.prototype.interpolateNode_251 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #252
ReplaySystem.prototype.interpolateNode_252 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #253
ReplaySystem.prototype.interpolateNode_253 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #254
ReplaySystem.prototype.interpolateNode_254 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #255
ReplaySystem.prototype.interpolateNode_255 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #256
ReplaySystem.prototype.interpolateNode_256 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #257
ReplaySystem.prototype.interpolateNode_257 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #258
ReplaySystem.prototype.interpolateNode_258 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #259
ReplaySystem.prototype.interpolateNode_259 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #260
ReplaySystem.prototype.interpolateNode_260 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #261
ReplaySystem.prototype.interpolateNode_261 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #262
ReplaySystem.prototype.interpolateNode_262 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #263
ReplaySystem.prototype.interpolateNode_263 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #264
ReplaySystem.prototype.interpolateNode_264 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #265
ReplaySystem.prototype.interpolateNode_265 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #266
ReplaySystem.prototype.interpolateNode_266 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #267
ReplaySystem.prototype.interpolateNode_267 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #268
ReplaySystem.prototype.interpolateNode_268 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #269
ReplaySystem.prototype.interpolateNode_269 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #270
ReplaySystem.prototype.interpolateNode_270 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #271
ReplaySystem.prototype.interpolateNode_271 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #272
ReplaySystem.prototype.interpolateNode_272 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #273
ReplaySystem.prototype.interpolateNode_273 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #274
ReplaySystem.prototype.interpolateNode_274 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #275
ReplaySystem.prototype.interpolateNode_275 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #276
ReplaySystem.prototype.interpolateNode_276 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #277
ReplaySystem.prototype.interpolateNode_277 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #278
ReplaySystem.prototype.interpolateNode_278 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #279
ReplaySystem.prototype.interpolateNode_279 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #280
ReplaySystem.prototype.interpolateNode_280 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #281
ReplaySystem.prototype.interpolateNode_281 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #282
ReplaySystem.prototype.interpolateNode_282 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #283
ReplaySystem.prototype.interpolateNode_283 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #284
ReplaySystem.prototype.interpolateNode_284 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #285
ReplaySystem.prototype.interpolateNode_285 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #286
ReplaySystem.prototype.interpolateNode_286 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #287
ReplaySystem.prototype.interpolateNode_287 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #288
ReplaySystem.prototype.interpolateNode_288 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #289
ReplaySystem.prototype.interpolateNode_289 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #290
ReplaySystem.prototype.interpolateNode_290 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #291
ReplaySystem.prototype.interpolateNode_291 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #292
ReplaySystem.prototype.interpolateNode_292 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #293
ReplaySystem.prototype.interpolateNode_293 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #294
ReplaySystem.prototype.interpolateNode_294 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #295
ReplaySystem.prototype.interpolateNode_295 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #296
ReplaySystem.prototype.interpolateNode_296 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #297
ReplaySystem.prototype.interpolateNode_297 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #298
ReplaySystem.prototype.interpolateNode_298 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #299
ReplaySystem.prototype.interpolateNode_299 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #300
ReplaySystem.prototype.interpolateNode_300 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #301
ReplaySystem.prototype.interpolateNode_301 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #302
ReplaySystem.prototype.interpolateNode_302 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #303
ReplaySystem.prototype.interpolateNode_303 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #304
ReplaySystem.prototype.interpolateNode_304 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #305
ReplaySystem.prototype.interpolateNode_305 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #306
ReplaySystem.prototype.interpolateNode_306 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #307
ReplaySystem.prototype.interpolateNode_307 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #308
ReplaySystem.prototype.interpolateNode_308 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #309
ReplaySystem.prototype.interpolateNode_309 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #310
ReplaySystem.prototype.interpolateNode_310 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #311
ReplaySystem.prototype.interpolateNode_311 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #312
ReplaySystem.prototype.interpolateNode_312 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #313
ReplaySystem.prototype.interpolateNode_313 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #314
ReplaySystem.prototype.interpolateNode_314 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #315
ReplaySystem.prototype.interpolateNode_315 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #316
ReplaySystem.prototype.interpolateNode_316 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #317
ReplaySystem.prototype.interpolateNode_317 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #318
ReplaySystem.prototype.interpolateNode_318 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #319
ReplaySystem.prototype.interpolateNode_319 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #320
ReplaySystem.prototype.interpolateNode_320 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #321
ReplaySystem.prototype.interpolateNode_321 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #322
ReplaySystem.prototype.interpolateNode_322 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #323
ReplaySystem.prototype.interpolateNode_323 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #324
ReplaySystem.prototype.interpolateNode_324 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #325
ReplaySystem.prototype.interpolateNode_325 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #326
ReplaySystem.prototype.interpolateNode_326 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #327
ReplaySystem.prototype.interpolateNode_327 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #328
ReplaySystem.prototype.interpolateNode_328 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #329
ReplaySystem.prototype.interpolateNode_329 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #330
ReplaySystem.prototype.interpolateNode_330 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #331
ReplaySystem.prototype.interpolateNode_331 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #332
ReplaySystem.prototype.interpolateNode_332 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #333
ReplaySystem.prototype.interpolateNode_333 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #334
ReplaySystem.prototype.interpolateNode_334 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #335
ReplaySystem.prototype.interpolateNode_335 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #336
ReplaySystem.prototype.interpolateNode_336 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #337
ReplaySystem.prototype.interpolateNode_337 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #338
ReplaySystem.prototype.interpolateNode_338 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #339
ReplaySystem.prototype.interpolateNode_339 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #340
ReplaySystem.prototype.interpolateNode_340 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #341
ReplaySystem.prototype.interpolateNode_341 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #342
ReplaySystem.prototype.interpolateNode_342 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #343
ReplaySystem.prototype.interpolateNode_343 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #344
ReplaySystem.prototype.interpolateNode_344 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #345
ReplaySystem.prototype.interpolateNode_345 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #346
ReplaySystem.prototype.interpolateNode_346 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #347
ReplaySystem.prototype.interpolateNode_347 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #348
ReplaySystem.prototype.interpolateNode_348 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #349
ReplaySystem.prototype.interpolateNode_349 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};
// Replay Interpolation Frame Matrix Node #350
ReplaySystem.prototype.interpolateNode_350 = function(f1, f2, t) {
  return { x: f1.x + (f2.x - f1.x) * t, y: f1.y + (f2.y - f1.y) * t, angle: f1.angle + (f2.angle - f1.angle) * t };
};

window.replaySystem = new ReplaySystem();
