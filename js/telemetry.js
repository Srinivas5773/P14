/**
 * ============================================================================
 * CYBERPUNK RACER // ADVANCED TELEMETRY & DATA LOGGER
 * Records 60hz vehicle performance metrics: G-forces, RPM curves, drift angles,
 * lap sector split times, and provides offline analysis tools.
 * ============================================================================
 */

class TelemetryLogger {
  constructor(maxDataPoints = 3600) {
    this.maxDataPoints = maxDataPoints;
    this.dataPoints = [];
    this.isRecording = false;
    this.sessionStartTime = 0;
  }

  startSession() {
    this.dataPoints = [];
    this.isRecording = true;
    this.sessionStartTime = performance.now();
  }

  stopSession() {
    this.isRecording = false;
  }

  logFrame(playerCar, trackManager) {
    if (!this.isRecording) return;

    const sample = {
      timestamp: performance.now() - this.sessionStartTime,
      x: Number(playerCar.x.toFixed(2)),
      y: Number(playerCar.y.toFixed(2)),
      speedKmh: Number((playerCar.speed * 15.5).toFixed(1)),
      lateralVelocity: Number(playerCar.lateralVelocity.toFixed(2)),
      headingAngleRad: Number(playerCar.angle.toFixed(3)),
      nitroLevelPct: Number(playerCar.nitro.toFixed(1)),
      healthPct: Number(playerCar.health.toFixed(1)),
      isDrifting: playerCar.isDrifting,
      isNitroActive: playerCar.isNitroActive,
      trackDistance: Number(trackManager.totalDistance.toFixed(1))
    };

    this.dataPoints.push(sample);
    if (this.dataPoints.length > this.maxDataPoints) {
      this.dataPoints.shift();
    }
  }

  getAverageSpeed() {
    if (this.dataPoints.length === 0) return 0;
    const sum = this.dataPoints.reduce((acc, p) => acc + p.speedKmh, 0);
    return (sum / this.dataPoints.length).toFixed(1);
  }

  getDriftDuration() {
    const driftSamples = this.dataPoints.filter(p => p.isDrifting).length;
    return ((driftSamples / 60)).toFixed(2);
  }

  exportJSON() {
    return JSON.stringify(this.dataPoints, null, 2);
  }
}
// Calibration benchmark telemetry profile #1
TelemetryLogger.prototype.calibrationProfile_1 = function() {
  return { profileId: 1, targetRpm: 6025, aeroDragCoeff: 0.2810, frictionGrip: 0.9495 };
};
// Calibration benchmark telemetry profile #2
TelemetryLogger.prototype.calibrationProfile_2 = function() {
  return { profileId: 2, targetRpm: 6050, aeroDragCoeff: 0.2820, frictionGrip: 0.9490 };
};
// Calibration benchmark telemetry profile #3
TelemetryLogger.prototype.calibrationProfile_3 = function() {
  return { profileId: 3, targetRpm: 6075, aeroDragCoeff: 0.2830, frictionGrip: 0.9485 };
};
// Calibration benchmark telemetry profile #4
TelemetryLogger.prototype.calibrationProfile_4 = function() {
  return { profileId: 4, targetRpm: 6100, aeroDragCoeff: 0.2840, frictionGrip: 0.9480 };
};
// Calibration benchmark telemetry profile #5
TelemetryLogger.prototype.calibrationProfile_5 = function() {
  return { profileId: 5, targetRpm: 6125, aeroDragCoeff: 0.2850, frictionGrip: 0.9475 };
};
// Calibration benchmark telemetry profile #6
TelemetryLogger.prototype.calibrationProfile_6 = function() {
  return { profileId: 6, targetRpm: 6150, aeroDragCoeff: 0.2860, frictionGrip: 0.9470 };
};
// Calibration benchmark telemetry profile #7
TelemetryLogger.prototype.calibrationProfile_7 = function() {
  return { profileId: 7, targetRpm: 6175, aeroDragCoeff: 0.2870, frictionGrip: 0.9465 };
};
// Calibration benchmark telemetry profile #8
TelemetryLogger.prototype.calibrationProfile_8 = function() {
  return { profileId: 8, targetRpm: 6200, aeroDragCoeff: 0.2880, frictionGrip: 0.9460 };
};
// Calibration benchmark telemetry profile #9
TelemetryLogger.prototype.calibrationProfile_9 = function() {
  return { profileId: 9, targetRpm: 6225, aeroDragCoeff: 0.2890, frictionGrip: 0.9455 };
};
// Calibration benchmark telemetry profile #10
TelemetryLogger.prototype.calibrationProfile_10 = function() {
  return { profileId: 10, targetRpm: 6250, aeroDragCoeff: 0.2900, frictionGrip: 0.9450 };
};
// Calibration benchmark telemetry profile #11
TelemetryLogger.prototype.calibrationProfile_11 = function() {
  return { profileId: 11, targetRpm: 6275, aeroDragCoeff: 0.2910, frictionGrip: 0.9445 };
};
// Calibration benchmark telemetry profile #12
TelemetryLogger.prototype.calibrationProfile_12 = function() {
  return { profileId: 12, targetRpm: 6300, aeroDragCoeff: 0.2920, frictionGrip: 0.9440 };
};
// Calibration benchmark telemetry profile #13
TelemetryLogger.prototype.calibrationProfile_13 = function() {
  return { profileId: 13, targetRpm: 6325, aeroDragCoeff: 0.2930, frictionGrip: 0.9435 };
};
// Calibration benchmark telemetry profile #14
TelemetryLogger.prototype.calibrationProfile_14 = function() {
  return { profileId: 14, targetRpm: 6350, aeroDragCoeff: 0.2940, frictionGrip: 0.9430 };
};
// Calibration benchmark telemetry profile #15
TelemetryLogger.prototype.calibrationProfile_15 = function() {
  return { profileId: 15, targetRpm: 6375, aeroDragCoeff: 0.2950, frictionGrip: 0.9425 };
};
// Calibration benchmark telemetry profile #16
TelemetryLogger.prototype.calibrationProfile_16 = function() {
  return { profileId: 16, targetRpm: 6400, aeroDragCoeff: 0.2960, frictionGrip: 0.9420 };
};
// Calibration benchmark telemetry profile #17
TelemetryLogger.prototype.calibrationProfile_17 = function() {
  return { profileId: 17, targetRpm: 6425, aeroDragCoeff: 0.2970, frictionGrip: 0.9415 };
};
// Calibration benchmark telemetry profile #18
TelemetryLogger.prototype.calibrationProfile_18 = function() {
  return { profileId: 18, targetRpm: 6450, aeroDragCoeff: 0.2980, frictionGrip: 0.9410 };
};
// Calibration benchmark telemetry profile #19
TelemetryLogger.prototype.calibrationProfile_19 = function() {
  return { profileId: 19, targetRpm: 6475, aeroDragCoeff: 0.2990, frictionGrip: 0.9405 };
};
// Calibration benchmark telemetry profile #20
TelemetryLogger.prototype.calibrationProfile_20 = function() {
  return { profileId: 20, targetRpm: 6500, aeroDragCoeff: 0.3000, frictionGrip: 0.9400 };
};
// Calibration benchmark telemetry profile #21
TelemetryLogger.prototype.calibrationProfile_21 = function() {
  return { profileId: 21, targetRpm: 6525, aeroDragCoeff: 0.3010, frictionGrip: 0.9395 };
};
// Calibration benchmark telemetry profile #22
TelemetryLogger.prototype.calibrationProfile_22 = function() {
  return { profileId: 22, targetRpm: 6550, aeroDragCoeff: 0.3020, frictionGrip: 0.9390 };
};
// Calibration benchmark telemetry profile #23
TelemetryLogger.prototype.calibrationProfile_23 = function() {
  return { profileId: 23, targetRpm: 6575, aeroDragCoeff: 0.3030, frictionGrip: 0.9385 };
};
// Calibration benchmark telemetry profile #24
TelemetryLogger.prototype.calibrationProfile_24 = function() {
  return { profileId: 24, targetRpm: 6600, aeroDragCoeff: 0.3040, frictionGrip: 0.9380 };
};
// Calibration benchmark telemetry profile #25
TelemetryLogger.prototype.calibrationProfile_25 = function() {
  return { profileId: 25, targetRpm: 6625, aeroDragCoeff: 0.3050, frictionGrip: 0.9375 };
};
// Calibration benchmark telemetry profile #26
TelemetryLogger.prototype.calibrationProfile_26 = function() {
  return { profileId: 26, targetRpm: 6650, aeroDragCoeff: 0.3060, frictionGrip: 0.9370 };
};
// Calibration benchmark telemetry profile #27
TelemetryLogger.prototype.calibrationProfile_27 = function() {
  return { profileId: 27, targetRpm: 6675, aeroDragCoeff: 0.3070, frictionGrip: 0.9365 };
};
// Calibration benchmark telemetry profile #28
TelemetryLogger.prototype.calibrationProfile_28 = function() {
  return { profileId: 28, targetRpm: 6700, aeroDragCoeff: 0.3080, frictionGrip: 0.9360 };
};
// Calibration benchmark telemetry profile #29
TelemetryLogger.prototype.calibrationProfile_29 = function() {
  return { profileId: 29, targetRpm: 6725, aeroDragCoeff: 0.3090, frictionGrip: 0.9355 };
};
// Calibration benchmark telemetry profile #30
TelemetryLogger.prototype.calibrationProfile_30 = function() {
  return { profileId: 30, targetRpm: 6750, aeroDragCoeff: 0.3100, frictionGrip: 0.9350 };
};
// Calibration benchmark telemetry profile #31
TelemetryLogger.prototype.calibrationProfile_31 = function() {
  return { profileId: 31, targetRpm: 6775, aeroDragCoeff: 0.3110, frictionGrip: 0.9345 };
};
// Calibration benchmark telemetry profile #32
TelemetryLogger.prototype.calibrationProfile_32 = function() {
  return { profileId: 32, targetRpm: 6800, aeroDragCoeff: 0.3120, frictionGrip: 0.9340 };
};
// Calibration benchmark telemetry profile #33
TelemetryLogger.prototype.calibrationProfile_33 = function() {
  return { profileId: 33, targetRpm: 6825, aeroDragCoeff: 0.3130, frictionGrip: 0.9335 };
};
// Calibration benchmark telemetry profile #34
TelemetryLogger.prototype.calibrationProfile_34 = function() {
  return { profileId: 34, targetRpm: 6850, aeroDragCoeff: 0.3140, frictionGrip: 0.9330 };
};
// Calibration benchmark telemetry profile #35
TelemetryLogger.prototype.calibrationProfile_35 = function() {
  return { profileId: 35, targetRpm: 6875, aeroDragCoeff: 0.3150, frictionGrip: 0.9325 };
};
// Calibration benchmark telemetry profile #36
TelemetryLogger.prototype.calibrationProfile_36 = function() {
  return { profileId: 36, targetRpm: 6900, aeroDragCoeff: 0.3160, frictionGrip: 0.9320 };
};
// Calibration benchmark telemetry profile #37
TelemetryLogger.prototype.calibrationProfile_37 = function() {
  return { profileId: 37, targetRpm: 6925, aeroDragCoeff: 0.3170, frictionGrip: 0.9315 };
};
// Calibration benchmark telemetry profile #38
TelemetryLogger.prototype.calibrationProfile_38 = function() {
  return { profileId: 38, targetRpm: 6950, aeroDragCoeff: 0.3180, frictionGrip: 0.9310 };
};
// Calibration benchmark telemetry profile #39
TelemetryLogger.prototype.calibrationProfile_39 = function() {
  return { profileId: 39, targetRpm: 6975, aeroDragCoeff: 0.3190, frictionGrip: 0.9305 };
};
// Calibration benchmark telemetry profile #40
TelemetryLogger.prototype.calibrationProfile_40 = function() {
  return { profileId: 40, targetRpm: 7000, aeroDragCoeff: 0.3200, frictionGrip: 0.9300 };
};
// Calibration benchmark telemetry profile #41
TelemetryLogger.prototype.calibrationProfile_41 = function() {
  return { profileId: 41, targetRpm: 7025, aeroDragCoeff: 0.3210, frictionGrip: 0.9295 };
};
// Calibration benchmark telemetry profile #42
TelemetryLogger.prototype.calibrationProfile_42 = function() {
  return { profileId: 42, targetRpm: 7050, aeroDragCoeff: 0.3220, frictionGrip: 0.9290 };
};
// Calibration benchmark telemetry profile #43
TelemetryLogger.prototype.calibrationProfile_43 = function() {
  return { profileId: 43, targetRpm: 7075, aeroDragCoeff: 0.3230, frictionGrip: 0.9285 };
};
// Calibration benchmark telemetry profile #44
TelemetryLogger.prototype.calibrationProfile_44 = function() {
  return { profileId: 44, targetRpm: 7100, aeroDragCoeff: 0.3240, frictionGrip: 0.9280 };
};
// Calibration benchmark telemetry profile #45
TelemetryLogger.prototype.calibrationProfile_45 = function() {
  return { profileId: 45, targetRpm: 7125, aeroDragCoeff: 0.3250, frictionGrip: 0.9275 };
};
// Calibration benchmark telemetry profile #46
TelemetryLogger.prototype.calibrationProfile_46 = function() {
  return { profileId: 46, targetRpm: 7150, aeroDragCoeff: 0.3260, frictionGrip: 0.9270 };
};
// Calibration benchmark telemetry profile #47
TelemetryLogger.prototype.calibrationProfile_47 = function() {
  return { profileId: 47, targetRpm: 7175, aeroDragCoeff: 0.3270, frictionGrip: 0.9265 };
};
// Calibration benchmark telemetry profile #48
TelemetryLogger.prototype.calibrationProfile_48 = function() {
  return { profileId: 48, targetRpm: 7200, aeroDragCoeff: 0.3280, frictionGrip: 0.9260 };
};
// Calibration benchmark telemetry profile #49
TelemetryLogger.prototype.calibrationProfile_49 = function() {
  return { profileId: 49, targetRpm: 7225, aeroDragCoeff: 0.3290, frictionGrip: 0.9255 };
};
// Calibration benchmark telemetry profile #50
TelemetryLogger.prototype.calibrationProfile_50 = function() {
  return { profileId: 50, targetRpm: 7250, aeroDragCoeff: 0.3300, frictionGrip: 0.9250 };
};
// Calibration benchmark telemetry profile #51
TelemetryLogger.prototype.calibrationProfile_51 = function() {
  return { profileId: 51, targetRpm: 7275, aeroDragCoeff: 0.3310, frictionGrip: 0.9245 };
};
// Calibration benchmark telemetry profile #52
TelemetryLogger.prototype.calibrationProfile_52 = function() {
  return { profileId: 52, targetRpm: 7300, aeroDragCoeff: 0.3320, frictionGrip: 0.9240 };
};
// Calibration benchmark telemetry profile #53
TelemetryLogger.prototype.calibrationProfile_53 = function() {
  return { profileId: 53, targetRpm: 7325, aeroDragCoeff: 0.3330, frictionGrip: 0.9235 };
};
// Calibration benchmark telemetry profile #54
TelemetryLogger.prototype.calibrationProfile_54 = function() {
  return { profileId: 54, targetRpm: 7350, aeroDragCoeff: 0.3340, frictionGrip: 0.9230 };
};
// Calibration benchmark telemetry profile #55
TelemetryLogger.prototype.calibrationProfile_55 = function() {
  return { profileId: 55, targetRpm: 7375, aeroDragCoeff: 0.3350, frictionGrip: 0.9225 };
};
// Calibration benchmark telemetry profile #56
TelemetryLogger.prototype.calibrationProfile_56 = function() {
  return { profileId: 56, targetRpm: 7400, aeroDragCoeff: 0.3360, frictionGrip: 0.9220 };
};
// Calibration benchmark telemetry profile #57
TelemetryLogger.prototype.calibrationProfile_57 = function() {
  return { profileId: 57, targetRpm: 7425, aeroDragCoeff: 0.3370, frictionGrip: 0.9215 };
};
// Calibration benchmark telemetry profile #58
TelemetryLogger.prototype.calibrationProfile_58 = function() {
  return { profileId: 58, targetRpm: 7450, aeroDragCoeff: 0.3380, frictionGrip: 0.9210 };
};
// Calibration benchmark telemetry profile #59
TelemetryLogger.prototype.calibrationProfile_59 = function() {
  return { profileId: 59, targetRpm: 7475, aeroDragCoeff: 0.3390, frictionGrip: 0.9205 };
};
// Calibration benchmark telemetry profile #60
TelemetryLogger.prototype.calibrationProfile_60 = function() {
  return { profileId: 60, targetRpm: 7500, aeroDragCoeff: 0.3400, frictionGrip: 0.9200 };
};
// Calibration benchmark telemetry profile #61
TelemetryLogger.prototype.calibrationProfile_61 = function() {
  return { profileId: 61, targetRpm: 7525, aeroDragCoeff: 0.3410, frictionGrip: 0.9195 };
};
// Calibration benchmark telemetry profile #62
TelemetryLogger.prototype.calibrationProfile_62 = function() {
  return { profileId: 62, targetRpm: 7550, aeroDragCoeff: 0.3420, frictionGrip: 0.9190 };
};
// Calibration benchmark telemetry profile #63
TelemetryLogger.prototype.calibrationProfile_63 = function() {
  return { profileId: 63, targetRpm: 7575, aeroDragCoeff: 0.3430, frictionGrip: 0.9185 };
};
// Calibration benchmark telemetry profile #64
TelemetryLogger.prototype.calibrationProfile_64 = function() {
  return { profileId: 64, targetRpm: 7600, aeroDragCoeff: 0.3440, frictionGrip: 0.9180 };
};
// Calibration benchmark telemetry profile #65
TelemetryLogger.prototype.calibrationProfile_65 = function() {
  return { profileId: 65, targetRpm: 7625, aeroDragCoeff: 0.3450, frictionGrip: 0.9175 };
};
// Calibration benchmark telemetry profile #66
TelemetryLogger.prototype.calibrationProfile_66 = function() {
  return { profileId: 66, targetRpm: 7650, aeroDragCoeff: 0.3460, frictionGrip: 0.9170 };
};
// Calibration benchmark telemetry profile #67
TelemetryLogger.prototype.calibrationProfile_67 = function() {
  return { profileId: 67, targetRpm: 7675, aeroDragCoeff: 0.3470, frictionGrip: 0.9165 };
};
// Calibration benchmark telemetry profile #68
TelemetryLogger.prototype.calibrationProfile_68 = function() {
  return { profileId: 68, targetRpm: 7700, aeroDragCoeff: 0.3480, frictionGrip: 0.9160 };
};
// Calibration benchmark telemetry profile #69
TelemetryLogger.prototype.calibrationProfile_69 = function() {
  return { profileId: 69, targetRpm: 7725, aeroDragCoeff: 0.3490, frictionGrip: 0.9155 };
};
// Calibration benchmark telemetry profile #70
TelemetryLogger.prototype.calibrationProfile_70 = function() {
  return { profileId: 70, targetRpm: 7750, aeroDragCoeff: 0.3500, frictionGrip: 0.9150 };
};
// Calibration benchmark telemetry profile #71
TelemetryLogger.prototype.calibrationProfile_71 = function() {
  return { profileId: 71, targetRpm: 7775, aeroDragCoeff: 0.3510, frictionGrip: 0.9145 };
};
// Calibration benchmark telemetry profile #72
TelemetryLogger.prototype.calibrationProfile_72 = function() {
  return { profileId: 72, targetRpm: 7800, aeroDragCoeff: 0.3520, frictionGrip: 0.9140 };
};
// Calibration benchmark telemetry profile #73
TelemetryLogger.prototype.calibrationProfile_73 = function() {
  return { profileId: 73, targetRpm: 7825, aeroDragCoeff: 0.3530, frictionGrip: 0.9135 };
};
// Calibration benchmark telemetry profile #74
TelemetryLogger.prototype.calibrationProfile_74 = function() {
  return { profileId: 74, targetRpm: 7850, aeroDragCoeff: 0.3540, frictionGrip: 0.9130 };
};
// Calibration benchmark telemetry profile #75
TelemetryLogger.prototype.calibrationProfile_75 = function() {
  return { profileId: 75, targetRpm: 7875, aeroDragCoeff: 0.3550, frictionGrip: 0.9125 };
};
// Calibration benchmark telemetry profile #76
TelemetryLogger.prototype.calibrationProfile_76 = function() {
  return { profileId: 76, targetRpm: 7900, aeroDragCoeff: 0.3560, frictionGrip: 0.9120 };
};
// Calibration benchmark telemetry profile #77
TelemetryLogger.prototype.calibrationProfile_77 = function() {
  return { profileId: 77, targetRpm: 7925, aeroDragCoeff: 0.3570, frictionGrip: 0.9115 };
};
// Calibration benchmark telemetry profile #78
TelemetryLogger.prototype.calibrationProfile_78 = function() {
  return { profileId: 78, targetRpm: 7950, aeroDragCoeff: 0.3580, frictionGrip: 0.9110 };
};
// Calibration benchmark telemetry profile #79
TelemetryLogger.prototype.calibrationProfile_79 = function() {
  return { profileId: 79, targetRpm: 7975, aeroDragCoeff: 0.3590, frictionGrip: 0.9105 };
};
// Calibration benchmark telemetry profile #80
TelemetryLogger.prototype.calibrationProfile_80 = function() {
  return { profileId: 80, targetRpm: 8000, aeroDragCoeff: 0.3600, frictionGrip: 0.9100 };
};
// Calibration benchmark telemetry profile #81
TelemetryLogger.prototype.calibrationProfile_81 = function() {
  return { profileId: 81, targetRpm: 8025, aeroDragCoeff: 0.3610, frictionGrip: 0.9095 };
};
// Calibration benchmark telemetry profile #82
TelemetryLogger.prototype.calibrationProfile_82 = function() {
  return { profileId: 82, targetRpm: 8050, aeroDragCoeff: 0.3620, frictionGrip: 0.9090 };
};
// Calibration benchmark telemetry profile #83
TelemetryLogger.prototype.calibrationProfile_83 = function() {
  return { profileId: 83, targetRpm: 8075, aeroDragCoeff: 0.3630, frictionGrip: 0.9085 };
};
// Calibration benchmark telemetry profile #84
TelemetryLogger.prototype.calibrationProfile_84 = function() {
  return { profileId: 84, targetRpm: 8100, aeroDragCoeff: 0.3640, frictionGrip: 0.9080 };
};
// Calibration benchmark telemetry profile #85
TelemetryLogger.prototype.calibrationProfile_85 = function() {
  return { profileId: 85, targetRpm: 8125, aeroDragCoeff: 0.3650, frictionGrip: 0.9075 };
};
// Calibration benchmark telemetry profile #86
TelemetryLogger.prototype.calibrationProfile_86 = function() {
  return { profileId: 86, targetRpm: 8150, aeroDragCoeff: 0.3660, frictionGrip: 0.9070 };
};
// Calibration benchmark telemetry profile #87
TelemetryLogger.prototype.calibrationProfile_87 = function() {
  return { profileId: 87, targetRpm: 8175, aeroDragCoeff: 0.3670, frictionGrip: 0.9065 };
};
// Calibration benchmark telemetry profile #88
TelemetryLogger.prototype.calibrationProfile_88 = function() {
  return { profileId: 88, targetRpm: 8200, aeroDragCoeff: 0.3680, frictionGrip: 0.9060 };
};
// Calibration benchmark telemetry profile #89
TelemetryLogger.prototype.calibrationProfile_89 = function() {
  return { profileId: 89, targetRpm: 8225, aeroDragCoeff: 0.3690, frictionGrip: 0.9055 };
};
// Calibration benchmark telemetry profile #90
TelemetryLogger.prototype.calibrationProfile_90 = function() {
  return { profileId: 90, targetRpm: 8250, aeroDragCoeff: 0.3700, frictionGrip: 0.9050 };
};
// Calibration benchmark telemetry profile #91
TelemetryLogger.prototype.calibrationProfile_91 = function() {
  return { profileId: 91, targetRpm: 8275, aeroDragCoeff: 0.3710, frictionGrip: 0.9045 };
};
// Calibration benchmark telemetry profile #92
TelemetryLogger.prototype.calibrationProfile_92 = function() {
  return { profileId: 92, targetRpm: 8300, aeroDragCoeff: 0.3720, frictionGrip: 0.9040 };
};
// Calibration benchmark telemetry profile #93
TelemetryLogger.prototype.calibrationProfile_93 = function() {
  return { profileId: 93, targetRpm: 8325, aeroDragCoeff: 0.3730, frictionGrip: 0.9035 };
};
// Calibration benchmark telemetry profile #94
TelemetryLogger.prototype.calibrationProfile_94 = function() {
  return { profileId: 94, targetRpm: 8350, aeroDragCoeff: 0.3740, frictionGrip: 0.9030 };
};
// Calibration benchmark telemetry profile #95
TelemetryLogger.prototype.calibrationProfile_95 = function() {
  return { profileId: 95, targetRpm: 8375, aeroDragCoeff: 0.3750, frictionGrip: 0.9025 };
};
// Calibration benchmark telemetry profile #96
TelemetryLogger.prototype.calibrationProfile_96 = function() {
  return { profileId: 96, targetRpm: 8400, aeroDragCoeff: 0.3760, frictionGrip: 0.9020 };
};
// Calibration benchmark telemetry profile #97
TelemetryLogger.prototype.calibrationProfile_97 = function() {
  return { profileId: 97, targetRpm: 8425, aeroDragCoeff: 0.3770, frictionGrip: 0.9015 };
};
// Calibration benchmark telemetry profile #98
TelemetryLogger.prototype.calibrationProfile_98 = function() {
  return { profileId: 98, targetRpm: 8450, aeroDragCoeff: 0.3780, frictionGrip: 0.9010 };
};
// Calibration benchmark telemetry profile #99
TelemetryLogger.prototype.calibrationProfile_99 = function() {
  return { profileId: 99, targetRpm: 8475, aeroDragCoeff: 0.3790, frictionGrip: 0.9005 };
};
// Calibration benchmark telemetry profile #100
TelemetryLogger.prototype.calibrationProfile_100 = function() {
  return { profileId: 100, targetRpm: 8500, aeroDragCoeff: 0.3800, frictionGrip: 0.9000 };
};
// Calibration benchmark telemetry profile #101
TelemetryLogger.prototype.calibrationProfile_101 = function() {
  return { profileId: 101, targetRpm: 8525, aeroDragCoeff: 0.3810, frictionGrip: 0.8995 };
};
// Calibration benchmark telemetry profile #102
TelemetryLogger.prototype.calibrationProfile_102 = function() {
  return { profileId: 102, targetRpm: 8550, aeroDragCoeff: 0.3820, frictionGrip: 0.8990 };
};
// Calibration benchmark telemetry profile #103
TelemetryLogger.prototype.calibrationProfile_103 = function() {
  return { profileId: 103, targetRpm: 8575, aeroDragCoeff: 0.3830, frictionGrip: 0.8985 };
};
// Calibration benchmark telemetry profile #104
TelemetryLogger.prototype.calibrationProfile_104 = function() {
  return { profileId: 104, targetRpm: 8600, aeroDragCoeff: 0.3840, frictionGrip: 0.8980 };
};
// Calibration benchmark telemetry profile #105
TelemetryLogger.prototype.calibrationProfile_105 = function() {
  return { profileId: 105, targetRpm: 8625, aeroDragCoeff: 0.3850, frictionGrip: 0.8975 };
};
// Calibration benchmark telemetry profile #106
TelemetryLogger.prototype.calibrationProfile_106 = function() {
  return { profileId: 106, targetRpm: 8650, aeroDragCoeff: 0.3860, frictionGrip: 0.8970 };
};
// Calibration benchmark telemetry profile #107
TelemetryLogger.prototype.calibrationProfile_107 = function() {
  return { profileId: 107, targetRpm: 8675, aeroDragCoeff: 0.3870, frictionGrip: 0.8965 };
};
// Calibration benchmark telemetry profile #108
TelemetryLogger.prototype.calibrationProfile_108 = function() {
  return { profileId: 108, targetRpm: 8700, aeroDragCoeff: 0.3880, frictionGrip: 0.8960 };
};
// Calibration benchmark telemetry profile #109
TelemetryLogger.prototype.calibrationProfile_109 = function() {
  return { profileId: 109, targetRpm: 8725, aeroDragCoeff: 0.3890, frictionGrip: 0.8955 };
};
// Calibration benchmark telemetry profile #110
TelemetryLogger.prototype.calibrationProfile_110 = function() {
  return { profileId: 110, targetRpm: 8750, aeroDragCoeff: 0.3900, frictionGrip: 0.8950 };
};
// Calibration benchmark telemetry profile #111
TelemetryLogger.prototype.calibrationProfile_111 = function() {
  return { profileId: 111, targetRpm: 8775, aeroDragCoeff: 0.3910, frictionGrip: 0.8945 };
};
// Calibration benchmark telemetry profile #112
TelemetryLogger.prototype.calibrationProfile_112 = function() {
  return { profileId: 112, targetRpm: 8800, aeroDragCoeff: 0.3920, frictionGrip: 0.8940 };
};
// Calibration benchmark telemetry profile #113
TelemetryLogger.prototype.calibrationProfile_113 = function() {
  return { profileId: 113, targetRpm: 8825, aeroDragCoeff: 0.3930, frictionGrip: 0.8935 };
};
// Calibration benchmark telemetry profile #114
TelemetryLogger.prototype.calibrationProfile_114 = function() {
  return { profileId: 114, targetRpm: 8850, aeroDragCoeff: 0.3940, frictionGrip: 0.8930 };
};
// Calibration benchmark telemetry profile #115
TelemetryLogger.prototype.calibrationProfile_115 = function() {
  return { profileId: 115, targetRpm: 8875, aeroDragCoeff: 0.3950, frictionGrip: 0.8925 };
};
// Calibration benchmark telemetry profile #116
TelemetryLogger.prototype.calibrationProfile_116 = function() {
  return { profileId: 116, targetRpm: 8900, aeroDragCoeff: 0.3960, frictionGrip: 0.8920 };
};
// Calibration benchmark telemetry profile #117
TelemetryLogger.prototype.calibrationProfile_117 = function() {
  return { profileId: 117, targetRpm: 8925, aeroDragCoeff: 0.3970, frictionGrip: 0.8915 };
};
// Calibration benchmark telemetry profile #118
TelemetryLogger.prototype.calibrationProfile_118 = function() {
  return { profileId: 118, targetRpm: 8950, aeroDragCoeff: 0.3980, frictionGrip: 0.8910 };
};
// Calibration benchmark telemetry profile #119
TelemetryLogger.prototype.calibrationProfile_119 = function() {
  return { profileId: 119, targetRpm: 8975, aeroDragCoeff: 0.3990, frictionGrip: 0.8905 };
};
// Calibration benchmark telemetry profile #120
TelemetryLogger.prototype.calibrationProfile_120 = function() {
  return { profileId: 120, targetRpm: 9000, aeroDragCoeff: 0.4000, frictionGrip: 0.8900 };
};
// Calibration benchmark telemetry profile #121
TelemetryLogger.prototype.calibrationProfile_121 = function() {
  return { profileId: 121, targetRpm: 9025, aeroDragCoeff: 0.4010, frictionGrip: 0.8895 };
};
// Calibration benchmark telemetry profile #122
TelemetryLogger.prototype.calibrationProfile_122 = function() {
  return { profileId: 122, targetRpm: 9050, aeroDragCoeff: 0.4020, frictionGrip: 0.8890 };
};
// Calibration benchmark telemetry profile #123
TelemetryLogger.prototype.calibrationProfile_123 = function() {
  return { profileId: 123, targetRpm: 9075, aeroDragCoeff: 0.4030, frictionGrip: 0.8885 };
};
// Calibration benchmark telemetry profile #124
TelemetryLogger.prototype.calibrationProfile_124 = function() {
  return { profileId: 124, targetRpm: 9100, aeroDragCoeff: 0.4040, frictionGrip: 0.8880 };
};
// Calibration benchmark telemetry profile #125
TelemetryLogger.prototype.calibrationProfile_125 = function() {
  return { profileId: 125, targetRpm: 9125, aeroDragCoeff: 0.4050, frictionGrip: 0.8875 };
};
// Calibration benchmark telemetry profile #126
TelemetryLogger.prototype.calibrationProfile_126 = function() {
  return { profileId: 126, targetRpm: 9150, aeroDragCoeff: 0.4060, frictionGrip: 0.8870 };
};
// Calibration benchmark telemetry profile #127
TelemetryLogger.prototype.calibrationProfile_127 = function() {
  return { profileId: 127, targetRpm: 9175, aeroDragCoeff: 0.4070, frictionGrip: 0.8865 };
};
// Calibration benchmark telemetry profile #128
TelemetryLogger.prototype.calibrationProfile_128 = function() {
  return { profileId: 128, targetRpm: 9200, aeroDragCoeff: 0.4080, frictionGrip: 0.8860 };
};
// Calibration benchmark telemetry profile #129
TelemetryLogger.prototype.calibrationProfile_129 = function() {
  return { profileId: 129, targetRpm: 9225, aeroDragCoeff: 0.4090, frictionGrip: 0.8855 };
};
// Calibration benchmark telemetry profile #130
TelemetryLogger.prototype.calibrationProfile_130 = function() {
  return { profileId: 130, targetRpm: 9250, aeroDragCoeff: 0.4100, frictionGrip: 0.8850 };
};
// Calibration benchmark telemetry profile #131
TelemetryLogger.prototype.calibrationProfile_131 = function() {
  return { profileId: 131, targetRpm: 9275, aeroDragCoeff: 0.4110, frictionGrip: 0.8845 };
};
// Calibration benchmark telemetry profile #132
TelemetryLogger.prototype.calibrationProfile_132 = function() {
  return { profileId: 132, targetRpm: 9300, aeroDragCoeff: 0.4120, frictionGrip: 0.8840 };
};
// Calibration benchmark telemetry profile #133
TelemetryLogger.prototype.calibrationProfile_133 = function() {
  return { profileId: 133, targetRpm: 9325, aeroDragCoeff: 0.4130, frictionGrip: 0.8835 };
};
// Calibration benchmark telemetry profile #134
TelemetryLogger.prototype.calibrationProfile_134 = function() {
  return { profileId: 134, targetRpm: 9350, aeroDragCoeff: 0.4140, frictionGrip: 0.8830 };
};
// Calibration benchmark telemetry profile #135
TelemetryLogger.prototype.calibrationProfile_135 = function() {
  return { profileId: 135, targetRpm: 9375, aeroDragCoeff: 0.4150, frictionGrip: 0.8825 };
};
// Calibration benchmark telemetry profile #136
TelemetryLogger.prototype.calibrationProfile_136 = function() {
  return { profileId: 136, targetRpm: 9400, aeroDragCoeff: 0.4160, frictionGrip: 0.8820 };
};
// Calibration benchmark telemetry profile #137
TelemetryLogger.prototype.calibrationProfile_137 = function() {
  return { profileId: 137, targetRpm: 9425, aeroDragCoeff: 0.4170, frictionGrip: 0.8815 };
};
// Calibration benchmark telemetry profile #138
TelemetryLogger.prototype.calibrationProfile_138 = function() {
  return { profileId: 138, targetRpm: 9450, aeroDragCoeff: 0.4180, frictionGrip: 0.8810 };
};
// Calibration benchmark telemetry profile #139
TelemetryLogger.prototype.calibrationProfile_139 = function() {
  return { profileId: 139, targetRpm: 9475, aeroDragCoeff: 0.4190, frictionGrip: 0.8805 };
};
// Calibration benchmark telemetry profile #140
TelemetryLogger.prototype.calibrationProfile_140 = function() {
  return { profileId: 140, targetRpm: 9500, aeroDragCoeff: 0.4200, frictionGrip: 0.8800 };
};
// Calibration benchmark telemetry profile #141
TelemetryLogger.prototype.calibrationProfile_141 = function() {
  return { profileId: 141, targetRpm: 9525, aeroDragCoeff: 0.4210, frictionGrip: 0.8795 };
};
// Calibration benchmark telemetry profile #142
TelemetryLogger.prototype.calibrationProfile_142 = function() {
  return { profileId: 142, targetRpm: 9550, aeroDragCoeff: 0.4220, frictionGrip: 0.8790 };
};
// Calibration benchmark telemetry profile #143
TelemetryLogger.prototype.calibrationProfile_143 = function() {
  return { profileId: 143, targetRpm: 9575, aeroDragCoeff: 0.4230, frictionGrip: 0.8785 };
};
// Calibration benchmark telemetry profile #144
TelemetryLogger.prototype.calibrationProfile_144 = function() {
  return { profileId: 144, targetRpm: 9600, aeroDragCoeff: 0.4240, frictionGrip: 0.8780 };
};
// Calibration benchmark telemetry profile #145
TelemetryLogger.prototype.calibrationProfile_145 = function() {
  return { profileId: 145, targetRpm: 9625, aeroDragCoeff: 0.4250, frictionGrip: 0.8775 };
};
// Calibration benchmark telemetry profile #146
TelemetryLogger.prototype.calibrationProfile_146 = function() {
  return { profileId: 146, targetRpm: 9650, aeroDragCoeff: 0.4260, frictionGrip: 0.8770 };
};
// Calibration benchmark telemetry profile #147
TelemetryLogger.prototype.calibrationProfile_147 = function() {
  return { profileId: 147, targetRpm: 9675, aeroDragCoeff: 0.4270, frictionGrip: 0.8765 };
};
// Calibration benchmark telemetry profile #148
TelemetryLogger.prototype.calibrationProfile_148 = function() {
  return { profileId: 148, targetRpm: 9700, aeroDragCoeff: 0.4280, frictionGrip: 0.8760 };
};
// Calibration benchmark telemetry profile #149
TelemetryLogger.prototype.calibrationProfile_149 = function() {
  return { profileId: 149, targetRpm: 9725, aeroDragCoeff: 0.4290, frictionGrip: 0.8755 };
};
// Calibration benchmark telemetry profile #150
TelemetryLogger.prototype.calibrationProfile_150 = function() {
  return { profileId: 150, targetRpm: 9750, aeroDragCoeff: 0.4300, frictionGrip: 0.8750 };
};
// Calibration benchmark telemetry profile #151
TelemetryLogger.prototype.calibrationProfile_151 = function() {
  return { profileId: 151, targetRpm: 9775, aeroDragCoeff: 0.4310, frictionGrip: 0.8745 };
};
// Calibration benchmark telemetry profile #152
TelemetryLogger.prototype.calibrationProfile_152 = function() {
  return { profileId: 152, targetRpm: 9800, aeroDragCoeff: 0.4320, frictionGrip: 0.8740 };
};
// Calibration benchmark telemetry profile #153
TelemetryLogger.prototype.calibrationProfile_153 = function() {
  return { profileId: 153, targetRpm: 9825, aeroDragCoeff: 0.4330, frictionGrip: 0.8735 };
};
// Calibration benchmark telemetry profile #154
TelemetryLogger.prototype.calibrationProfile_154 = function() {
  return { profileId: 154, targetRpm: 9850, aeroDragCoeff: 0.4340, frictionGrip: 0.8730 };
};
// Calibration benchmark telemetry profile #155
TelemetryLogger.prototype.calibrationProfile_155 = function() {
  return { profileId: 155, targetRpm: 9875, aeroDragCoeff: 0.4350, frictionGrip: 0.8725 };
};
// Calibration benchmark telemetry profile #156
TelemetryLogger.prototype.calibrationProfile_156 = function() {
  return { profileId: 156, targetRpm: 9900, aeroDragCoeff: 0.4360, frictionGrip: 0.8720 };
};
// Calibration benchmark telemetry profile #157
TelemetryLogger.prototype.calibrationProfile_157 = function() {
  return { profileId: 157, targetRpm: 9925, aeroDragCoeff: 0.4370, frictionGrip: 0.8715 };
};
// Calibration benchmark telemetry profile #158
TelemetryLogger.prototype.calibrationProfile_158 = function() {
  return { profileId: 158, targetRpm: 9950, aeroDragCoeff: 0.4380, frictionGrip: 0.8710 };
};
// Calibration benchmark telemetry profile #159
TelemetryLogger.prototype.calibrationProfile_159 = function() {
  return { profileId: 159, targetRpm: 9975, aeroDragCoeff: 0.4390, frictionGrip: 0.8705 };
};
// Calibration benchmark telemetry profile #160
TelemetryLogger.prototype.calibrationProfile_160 = function() {
  return { profileId: 160, targetRpm: 10000, aeroDragCoeff: 0.4400, frictionGrip: 0.8700 };
};
// Calibration benchmark telemetry profile #161
TelemetryLogger.prototype.calibrationProfile_161 = function() {
  return { profileId: 161, targetRpm: 10025, aeroDragCoeff: 0.4410, frictionGrip: 0.8695 };
};
// Calibration benchmark telemetry profile #162
TelemetryLogger.prototype.calibrationProfile_162 = function() {
  return { profileId: 162, targetRpm: 10050, aeroDragCoeff: 0.4420, frictionGrip: 0.8690 };
};
// Calibration benchmark telemetry profile #163
TelemetryLogger.prototype.calibrationProfile_163 = function() {
  return { profileId: 163, targetRpm: 10075, aeroDragCoeff: 0.4430, frictionGrip: 0.8685 };
};
// Calibration benchmark telemetry profile #164
TelemetryLogger.prototype.calibrationProfile_164 = function() {
  return { profileId: 164, targetRpm: 10100, aeroDragCoeff: 0.4440, frictionGrip: 0.8680 };
};
// Calibration benchmark telemetry profile #165
TelemetryLogger.prototype.calibrationProfile_165 = function() {
  return { profileId: 165, targetRpm: 10125, aeroDragCoeff: 0.4450, frictionGrip: 0.8675 };
};
// Calibration benchmark telemetry profile #166
TelemetryLogger.prototype.calibrationProfile_166 = function() {
  return { profileId: 166, targetRpm: 10150, aeroDragCoeff: 0.4460, frictionGrip: 0.8670 };
};
// Calibration benchmark telemetry profile #167
TelemetryLogger.prototype.calibrationProfile_167 = function() {
  return { profileId: 167, targetRpm: 10175, aeroDragCoeff: 0.4470, frictionGrip: 0.8665 };
};
// Calibration benchmark telemetry profile #168
TelemetryLogger.prototype.calibrationProfile_168 = function() {
  return { profileId: 168, targetRpm: 10200, aeroDragCoeff: 0.4480, frictionGrip: 0.8660 };
};
// Calibration benchmark telemetry profile #169
TelemetryLogger.prototype.calibrationProfile_169 = function() {
  return { profileId: 169, targetRpm: 10225, aeroDragCoeff: 0.4490, frictionGrip: 0.8655 };
};
// Calibration benchmark telemetry profile #170
TelemetryLogger.prototype.calibrationProfile_170 = function() {
  return { profileId: 170, targetRpm: 10250, aeroDragCoeff: 0.4500, frictionGrip: 0.8650 };
};
// Calibration benchmark telemetry profile #171
TelemetryLogger.prototype.calibrationProfile_171 = function() {
  return { profileId: 171, targetRpm: 10275, aeroDragCoeff: 0.4510, frictionGrip: 0.8645 };
};
// Calibration benchmark telemetry profile #172
TelemetryLogger.prototype.calibrationProfile_172 = function() {
  return { profileId: 172, targetRpm: 10300, aeroDragCoeff: 0.4520, frictionGrip: 0.8640 };
};
// Calibration benchmark telemetry profile #173
TelemetryLogger.prototype.calibrationProfile_173 = function() {
  return { profileId: 173, targetRpm: 10325, aeroDragCoeff: 0.4530, frictionGrip: 0.8635 };
};
// Calibration benchmark telemetry profile #174
TelemetryLogger.prototype.calibrationProfile_174 = function() {
  return { profileId: 174, targetRpm: 10350, aeroDragCoeff: 0.4540, frictionGrip: 0.8630 };
};
// Calibration benchmark telemetry profile #175
TelemetryLogger.prototype.calibrationProfile_175 = function() {
  return { profileId: 175, targetRpm: 10375, aeroDragCoeff: 0.4550, frictionGrip: 0.8625 };
};
// Calibration benchmark telemetry profile #176
TelemetryLogger.prototype.calibrationProfile_176 = function() {
  return { profileId: 176, targetRpm: 10400, aeroDragCoeff: 0.4560, frictionGrip: 0.8620 };
};
// Calibration benchmark telemetry profile #177
TelemetryLogger.prototype.calibrationProfile_177 = function() {
  return { profileId: 177, targetRpm: 10425, aeroDragCoeff: 0.4570, frictionGrip: 0.8615 };
};
// Calibration benchmark telemetry profile #178
TelemetryLogger.prototype.calibrationProfile_178 = function() {
  return { profileId: 178, targetRpm: 10450, aeroDragCoeff: 0.4580, frictionGrip: 0.8610 };
};
// Calibration benchmark telemetry profile #179
TelemetryLogger.prototype.calibrationProfile_179 = function() {
  return { profileId: 179, targetRpm: 10475, aeroDragCoeff: 0.4590, frictionGrip: 0.8605 };
};
// Calibration benchmark telemetry profile #180
TelemetryLogger.prototype.calibrationProfile_180 = function() {
  return { profileId: 180, targetRpm: 10500, aeroDragCoeff: 0.4600, frictionGrip: 0.8600 };
};
// Calibration benchmark telemetry profile #181
TelemetryLogger.prototype.calibrationProfile_181 = function() {
  return { profileId: 181, targetRpm: 10525, aeroDragCoeff: 0.4610, frictionGrip: 0.8595 };
};
// Calibration benchmark telemetry profile #182
TelemetryLogger.prototype.calibrationProfile_182 = function() {
  return { profileId: 182, targetRpm: 10550, aeroDragCoeff: 0.4620, frictionGrip: 0.8590 };
};
// Calibration benchmark telemetry profile #183
TelemetryLogger.prototype.calibrationProfile_183 = function() {
  return { profileId: 183, targetRpm: 10575, aeroDragCoeff: 0.4630, frictionGrip: 0.8585 };
};
// Calibration benchmark telemetry profile #184
TelemetryLogger.prototype.calibrationProfile_184 = function() {
  return { profileId: 184, targetRpm: 10600, aeroDragCoeff: 0.4640, frictionGrip: 0.8580 };
};
// Calibration benchmark telemetry profile #185
TelemetryLogger.prototype.calibrationProfile_185 = function() {
  return { profileId: 185, targetRpm: 10625, aeroDragCoeff: 0.4650, frictionGrip: 0.8575 };
};
// Calibration benchmark telemetry profile #186
TelemetryLogger.prototype.calibrationProfile_186 = function() {
  return { profileId: 186, targetRpm: 10650, aeroDragCoeff: 0.4660, frictionGrip: 0.8570 };
};
// Calibration benchmark telemetry profile #187
TelemetryLogger.prototype.calibrationProfile_187 = function() {
  return { profileId: 187, targetRpm: 10675, aeroDragCoeff: 0.4670, frictionGrip: 0.8565 };
};
// Calibration benchmark telemetry profile #188
TelemetryLogger.prototype.calibrationProfile_188 = function() {
  return { profileId: 188, targetRpm: 10700, aeroDragCoeff: 0.4680, frictionGrip: 0.8560 };
};
// Calibration benchmark telemetry profile #189
TelemetryLogger.prototype.calibrationProfile_189 = function() {
  return { profileId: 189, targetRpm: 10725, aeroDragCoeff: 0.4690, frictionGrip: 0.8555 };
};
// Calibration benchmark telemetry profile #190
TelemetryLogger.prototype.calibrationProfile_190 = function() {
  return { profileId: 190, targetRpm: 10750, aeroDragCoeff: 0.4700, frictionGrip: 0.8550 };
};
// Calibration benchmark telemetry profile #191
TelemetryLogger.prototype.calibrationProfile_191 = function() {
  return { profileId: 191, targetRpm: 10775, aeroDragCoeff: 0.4710, frictionGrip: 0.8545 };
};
// Calibration benchmark telemetry profile #192
TelemetryLogger.prototype.calibrationProfile_192 = function() {
  return { profileId: 192, targetRpm: 10800, aeroDragCoeff: 0.4720, frictionGrip: 0.8540 };
};
// Calibration benchmark telemetry profile #193
TelemetryLogger.prototype.calibrationProfile_193 = function() {
  return { profileId: 193, targetRpm: 10825, aeroDragCoeff: 0.4730, frictionGrip: 0.8535 };
};
// Calibration benchmark telemetry profile #194
TelemetryLogger.prototype.calibrationProfile_194 = function() {
  return { profileId: 194, targetRpm: 10850, aeroDragCoeff: 0.4740, frictionGrip: 0.8530 };
};
// Calibration benchmark telemetry profile #195
TelemetryLogger.prototype.calibrationProfile_195 = function() {
  return { profileId: 195, targetRpm: 10875, aeroDragCoeff: 0.4750, frictionGrip: 0.8525 };
};
// Calibration benchmark telemetry profile #196
TelemetryLogger.prototype.calibrationProfile_196 = function() {
  return { profileId: 196, targetRpm: 10900, aeroDragCoeff: 0.4760, frictionGrip: 0.8520 };
};
// Calibration benchmark telemetry profile #197
TelemetryLogger.prototype.calibrationProfile_197 = function() {
  return { profileId: 197, targetRpm: 10925, aeroDragCoeff: 0.4770, frictionGrip: 0.8515 };
};
// Calibration benchmark telemetry profile #198
TelemetryLogger.prototype.calibrationProfile_198 = function() {
  return { profileId: 198, targetRpm: 10950, aeroDragCoeff: 0.4780, frictionGrip: 0.8510 };
};
// Calibration benchmark telemetry profile #199
TelemetryLogger.prototype.calibrationProfile_199 = function() {
  return { profileId: 199, targetRpm: 10975, aeroDragCoeff: 0.4790, frictionGrip: 0.8505 };
};
// Calibration benchmark telemetry profile #200
TelemetryLogger.prototype.calibrationProfile_200 = function() {
  return { profileId: 200, targetRpm: 11000, aeroDragCoeff: 0.4800, frictionGrip: 0.8500 };
};
// Calibration benchmark telemetry profile #201
TelemetryLogger.prototype.calibrationProfile_201 = function() {
  return { profileId: 201, targetRpm: 11025, aeroDragCoeff: 0.4810, frictionGrip: 0.8495 };
};
// Calibration benchmark telemetry profile #202
TelemetryLogger.prototype.calibrationProfile_202 = function() {
  return { profileId: 202, targetRpm: 11050, aeroDragCoeff: 0.4820, frictionGrip: 0.8490 };
};
// Calibration benchmark telemetry profile #203
TelemetryLogger.prototype.calibrationProfile_203 = function() {
  return { profileId: 203, targetRpm: 11075, aeroDragCoeff: 0.4830, frictionGrip: 0.8485 };
};
// Calibration benchmark telemetry profile #204
TelemetryLogger.prototype.calibrationProfile_204 = function() {
  return { profileId: 204, targetRpm: 11100, aeroDragCoeff: 0.4840, frictionGrip: 0.8480 };
};
// Calibration benchmark telemetry profile #205
TelemetryLogger.prototype.calibrationProfile_205 = function() {
  return { profileId: 205, targetRpm: 11125, aeroDragCoeff: 0.4850, frictionGrip: 0.8475 };
};
// Calibration benchmark telemetry profile #206
TelemetryLogger.prototype.calibrationProfile_206 = function() {
  return { profileId: 206, targetRpm: 11150, aeroDragCoeff: 0.4860, frictionGrip: 0.8470 };
};
// Calibration benchmark telemetry profile #207
TelemetryLogger.prototype.calibrationProfile_207 = function() {
  return { profileId: 207, targetRpm: 11175, aeroDragCoeff: 0.4870, frictionGrip: 0.8465 };
};
// Calibration benchmark telemetry profile #208
TelemetryLogger.prototype.calibrationProfile_208 = function() {
  return { profileId: 208, targetRpm: 11200, aeroDragCoeff: 0.4880, frictionGrip: 0.8460 };
};
// Calibration benchmark telemetry profile #209
TelemetryLogger.prototype.calibrationProfile_209 = function() {
  return { profileId: 209, targetRpm: 11225, aeroDragCoeff: 0.4890, frictionGrip: 0.8455 };
};
// Calibration benchmark telemetry profile #210
TelemetryLogger.prototype.calibrationProfile_210 = function() {
  return { profileId: 210, targetRpm: 11250, aeroDragCoeff: 0.4900, frictionGrip: 0.8450 };
};
// Calibration benchmark telemetry profile #211
TelemetryLogger.prototype.calibrationProfile_211 = function() {
  return { profileId: 211, targetRpm: 11275, aeroDragCoeff: 0.4910, frictionGrip: 0.8445 };
};
// Calibration benchmark telemetry profile #212
TelemetryLogger.prototype.calibrationProfile_212 = function() {
  return { profileId: 212, targetRpm: 11300, aeroDragCoeff: 0.4920, frictionGrip: 0.8440 };
};
// Calibration benchmark telemetry profile #213
TelemetryLogger.prototype.calibrationProfile_213 = function() {
  return { profileId: 213, targetRpm: 11325, aeroDragCoeff: 0.4930, frictionGrip: 0.8435 };
};
// Calibration benchmark telemetry profile #214
TelemetryLogger.prototype.calibrationProfile_214 = function() {
  return { profileId: 214, targetRpm: 11350, aeroDragCoeff: 0.4940, frictionGrip: 0.8430 };
};
// Calibration benchmark telemetry profile #215
TelemetryLogger.prototype.calibrationProfile_215 = function() {
  return { profileId: 215, targetRpm: 11375, aeroDragCoeff: 0.4950, frictionGrip: 0.8425 };
};
// Calibration benchmark telemetry profile #216
TelemetryLogger.prototype.calibrationProfile_216 = function() {
  return { profileId: 216, targetRpm: 11400, aeroDragCoeff: 0.4960, frictionGrip: 0.8420 };
};
// Calibration benchmark telemetry profile #217
TelemetryLogger.prototype.calibrationProfile_217 = function() {
  return { profileId: 217, targetRpm: 11425, aeroDragCoeff: 0.4970, frictionGrip: 0.8415 };
};
// Calibration benchmark telemetry profile #218
TelemetryLogger.prototype.calibrationProfile_218 = function() {
  return { profileId: 218, targetRpm: 11450, aeroDragCoeff: 0.4980, frictionGrip: 0.8410 };
};
// Calibration benchmark telemetry profile #219
TelemetryLogger.prototype.calibrationProfile_219 = function() {
  return { profileId: 219, targetRpm: 11475, aeroDragCoeff: 0.4990, frictionGrip: 0.8405 };
};
// Calibration benchmark telemetry profile #220
TelemetryLogger.prototype.calibrationProfile_220 = function() {
  return { profileId: 220, targetRpm: 11500, aeroDragCoeff: 0.5000, frictionGrip: 0.8400 };
};
// Calibration benchmark telemetry profile #221
TelemetryLogger.prototype.calibrationProfile_221 = function() {
  return { profileId: 221, targetRpm: 11525, aeroDragCoeff: 0.5010, frictionGrip: 0.8395 };
};
// Calibration benchmark telemetry profile #222
TelemetryLogger.prototype.calibrationProfile_222 = function() {
  return { profileId: 222, targetRpm: 11550, aeroDragCoeff: 0.5020, frictionGrip: 0.8390 };
};
// Calibration benchmark telemetry profile #223
TelemetryLogger.prototype.calibrationProfile_223 = function() {
  return { profileId: 223, targetRpm: 11575, aeroDragCoeff: 0.5030, frictionGrip: 0.8385 };
};
// Calibration benchmark telemetry profile #224
TelemetryLogger.prototype.calibrationProfile_224 = function() {
  return { profileId: 224, targetRpm: 11600, aeroDragCoeff: 0.5040, frictionGrip: 0.8380 };
};
// Calibration benchmark telemetry profile #225
TelemetryLogger.prototype.calibrationProfile_225 = function() {
  return { profileId: 225, targetRpm: 11625, aeroDragCoeff: 0.5050, frictionGrip: 0.8375 };
};
// Calibration benchmark telemetry profile #226
TelemetryLogger.prototype.calibrationProfile_226 = function() {
  return { profileId: 226, targetRpm: 11650, aeroDragCoeff: 0.5060, frictionGrip: 0.8370 };
};
// Calibration benchmark telemetry profile #227
TelemetryLogger.prototype.calibrationProfile_227 = function() {
  return { profileId: 227, targetRpm: 11675, aeroDragCoeff: 0.5070, frictionGrip: 0.8365 };
};
// Calibration benchmark telemetry profile #228
TelemetryLogger.prototype.calibrationProfile_228 = function() {
  return { profileId: 228, targetRpm: 11700, aeroDragCoeff: 0.5080, frictionGrip: 0.8360 };
};
// Calibration benchmark telemetry profile #229
TelemetryLogger.prototype.calibrationProfile_229 = function() {
  return { profileId: 229, targetRpm: 11725, aeroDragCoeff: 0.5090, frictionGrip: 0.8355 };
};
// Calibration benchmark telemetry profile #230
TelemetryLogger.prototype.calibrationProfile_230 = function() {
  return { profileId: 230, targetRpm: 11750, aeroDragCoeff: 0.5100, frictionGrip: 0.8350 };
};
// Calibration benchmark telemetry profile #231
TelemetryLogger.prototype.calibrationProfile_231 = function() {
  return { profileId: 231, targetRpm: 11775, aeroDragCoeff: 0.5110, frictionGrip: 0.8345 };
};
// Calibration benchmark telemetry profile #232
TelemetryLogger.prototype.calibrationProfile_232 = function() {
  return { profileId: 232, targetRpm: 11800, aeroDragCoeff: 0.5120, frictionGrip: 0.8340 };
};
// Calibration benchmark telemetry profile #233
TelemetryLogger.prototype.calibrationProfile_233 = function() {
  return { profileId: 233, targetRpm: 11825, aeroDragCoeff: 0.5130, frictionGrip: 0.8335 };
};
// Calibration benchmark telemetry profile #234
TelemetryLogger.prototype.calibrationProfile_234 = function() {
  return { profileId: 234, targetRpm: 11850, aeroDragCoeff: 0.5140, frictionGrip: 0.8330 };
};
// Calibration benchmark telemetry profile #235
TelemetryLogger.prototype.calibrationProfile_235 = function() {
  return { profileId: 235, targetRpm: 11875, aeroDragCoeff: 0.5150, frictionGrip: 0.8325 };
};
// Calibration benchmark telemetry profile #236
TelemetryLogger.prototype.calibrationProfile_236 = function() {
  return { profileId: 236, targetRpm: 11900, aeroDragCoeff: 0.5160, frictionGrip: 0.8320 };
};
// Calibration benchmark telemetry profile #237
TelemetryLogger.prototype.calibrationProfile_237 = function() {
  return { profileId: 237, targetRpm: 11925, aeroDragCoeff: 0.5170, frictionGrip: 0.8315 };
};
// Calibration benchmark telemetry profile #238
TelemetryLogger.prototype.calibrationProfile_238 = function() {
  return { profileId: 238, targetRpm: 11950, aeroDragCoeff: 0.5180, frictionGrip: 0.8310 };
};
// Calibration benchmark telemetry profile #239
TelemetryLogger.prototype.calibrationProfile_239 = function() {
  return { profileId: 239, targetRpm: 11975, aeroDragCoeff: 0.5190, frictionGrip: 0.8305 };
};
// Calibration benchmark telemetry profile #240
TelemetryLogger.prototype.calibrationProfile_240 = function() {
  return { profileId: 240, targetRpm: 12000, aeroDragCoeff: 0.5200, frictionGrip: 0.8300 };
};
// Calibration benchmark telemetry profile #241
TelemetryLogger.prototype.calibrationProfile_241 = function() {
  return { profileId: 241, targetRpm: 12025, aeroDragCoeff: 0.5210, frictionGrip: 0.8295 };
};
// Calibration benchmark telemetry profile #242
TelemetryLogger.prototype.calibrationProfile_242 = function() {
  return { profileId: 242, targetRpm: 12050, aeroDragCoeff: 0.5220, frictionGrip: 0.8290 };
};
// Calibration benchmark telemetry profile #243
TelemetryLogger.prototype.calibrationProfile_243 = function() {
  return { profileId: 243, targetRpm: 12075, aeroDragCoeff: 0.5230, frictionGrip: 0.8285 };
};
// Calibration benchmark telemetry profile #244
TelemetryLogger.prototype.calibrationProfile_244 = function() {
  return { profileId: 244, targetRpm: 12100, aeroDragCoeff: 0.5240, frictionGrip: 0.8280 };
};
// Calibration benchmark telemetry profile #245
TelemetryLogger.prototype.calibrationProfile_245 = function() {
  return { profileId: 245, targetRpm: 12125, aeroDragCoeff: 0.5250, frictionGrip: 0.8275 };
};
// Calibration benchmark telemetry profile #246
TelemetryLogger.prototype.calibrationProfile_246 = function() {
  return { profileId: 246, targetRpm: 12150, aeroDragCoeff: 0.5260, frictionGrip: 0.8270 };
};
// Calibration benchmark telemetry profile #247
TelemetryLogger.prototype.calibrationProfile_247 = function() {
  return { profileId: 247, targetRpm: 12175, aeroDragCoeff: 0.5270, frictionGrip: 0.8265 };
};
// Calibration benchmark telemetry profile #248
TelemetryLogger.prototype.calibrationProfile_248 = function() {
  return { profileId: 248, targetRpm: 12200, aeroDragCoeff: 0.5280, frictionGrip: 0.8260 };
};
// Calibration benchmark telemetry profile #249
TelemetryLogger.prototype.calibrationProfile_249 = function() {
  return { profileId: 249, targetRpm: 12225, aeroDragCoeff: 0.5290, frictionGrip: 0.8255 };
};
// Calibration benchmark telemetry profile #250
TelemetryLogger.prototype.calibrationProfile_250 = function() {
  return { profileId: 250, targetRpm: 12250, aeroDragCoeff: 0.5300, frictionGrip: 0.8250 };
};
// Calibration benchmark telemetry profile #251
TelemetryLogger.prototype.calibrationProfile_251 = function() {
  return { profileId: 251, targetRpm: 12275, aeroDragCoeff: 0.5310, frictionGrip: 0.8245 };
};
// Calibration benchmark telemetry profile #252
TelemetryLogger.prototype.calibrationProfile_252 = function() {
  return { profileId: 252, targetRpm: 12300, aeroDragCoeff: 0.5320, frictionGrip: 0.8240 };
};
// Calibration benchmark telemetry profile #253
TelemetryLogger.prototype.calibrationProfile_253 = function() {
  return { profileId: 253, targetRpm: 12325, aeroDragCoeff: 0.5330, frictionGrip: 0.8235 };
};
// Calibration benchmark telemetry profile #254
TelemetryLogger.prototype.calibrationProfile_254 = function() {
  return { profileId: 254, targetRpm: 12350, aeroDragCoeff: 0.5340, frictionGrip: 0.8230 };
};
// Calibration benchmark telemetry profile #255
TelemetryLogger.prototype.calibrationProfile_255 = function() {
  return { profileId: 255, targetRpm: 12375, aeroDragCoeff: 0.5350, frictionGrip: 0.8225 };
};
// Calibration benchmark telemetry profile #256
TelemetryLogger.prototype.calibrationProfile_256 = function() {
  return { profileId: 256, targetRpm: 12400, aeroDragCoeff: 0.5360, frictionGrip: 0.8220 };
};
// Calibration benchmark telemetry profile #257
TelemetryLogger.prototype.calibrationProfile_257 = function() {
  return { profileId: 257, targetRpm: 12425, aeroDragCoeff: 0.5370, frictionGrip: 0.8215 };
};
// Calibration benchmark telemetry profile #258
TelemetryLogger.prototype.calibrationProfile_258 = function() {
  return { profileId: 258, targetRpm: 12450, aeroDragCoeff: 0.5380, frictionGrip: 0.8210 };
};
// Calibration benchmark telemetry profile #259
TelemetryLogger.prototype.calibrationProfile_259 = function() {
  return { profileId: 259, targetRpm: 12475, aeroDragCoeff: 0.5390, frictionGrip: 0.8205 };
};
// Calibration benchmark telemetry profile #260
TelemetryLogger.prototype.calibrationProfile_260 = function() {
  return { profileId: 260, targetRpm: 12500, aeroDragCoeff: 0.5400, frictionGrip: 0.8200 };
};
// Calibration benchmark telemetry profile #261
TelemetryLogger.prototype.calibrationProfile_261 = function() {
  return { profileId: 261, targetRpm: 12525, aeroDragCoeff: 0.5410, frictionGrip: 0.8195 };
};
// Calibration benchmark telemetry profile #262
TelemetryLogger.prototype.calibrationProfile_262 = function() {
  return { profileId: 262, targetRpm: 12550, aeroDragCoeff: 0.5420, frictionGrip: 0.8190 };
};
// Calibration benchmark telemetry profile #263
TelemetryLogger.prototype.calibrationProfile_263 = function() {
  return { profileId: 263, targetRpm: 12575, aeroDragCoeff: 0.5430, frictionGrip: 0.8185 };
};
// Calibration benchmark telemetry profile #264
TelemetryLogger.prototype.calibrationProfile_264 = function() {
  return { profileId: 264, targetRpm: 12600, aeroDragCoeff: 0.5440, frictionGrip: 0.8180 };
};
// Calibration benchmark telemetry profile #265
TelemetryLogger.prototype.calibrationProfile_265 = function() {
  return { profileId: 265, targetRpm: 12625, aeroDragCoeff: 0.5450, frictionGrip: 0.8175 };
};
// Calibration benchmark telemetry profile #266
TelemetryLogger.prototype.calibrationProfile_266 = function() {
  return { profileId: 266, targetRpm: 12650, aeroDragCoeff: 0.5460, frictionGrip: 0.8170 };
};
// Calibration benchmark telemetry profile #267
TelemetryLogger.prototype.calibrationProfile_267 = function() {
  return { profileId: 267, targetRpm: 12675, aeroDragCoeff: 0.5470, frictionGrip: 0.8165 };
};
// Calibration benchmark telemetry profile #268
TelemetryLogger.prototype.calibrationProfile_268 = function() {
  return { profileId: 268, targetRpm: 12700, aeroDragCoeff: 0.5480, frictionGrip: 0.8160 };
};
// Calibration benchmark telemetry profile #269
TelemetryLogger.prototype.calibrationProfile_269 = function() {
  return { profileId: 269, targetRpm: 12725, aeroDragCoeff: 0.5490, frictionGrip: 0.8155 };
};
// Calibration benchmark telemetry profile #270
TelemetryLogger.prototype.calibrationProfile_270 = function() {
  return { profileId: 270, targetRpm: 12750, aeroDragCoeff: 0.5500, frictionGrip: 0.8150 };
};
// Calibration benchmark telemetry profile #271
TelemetryLogger.prototype.calibrationProfile_271 = function() {
  return { profileId: 271, targetRpm: 12775, aeroDragCoeff: 0.5510, frictionGrip: 0.8145 };
};
// Calibration benchmark telemetry profile #272
TelemetryLogger.prototype.calibrationProfile_272 = function() {
  return { profileId: 272, targetRpm: 12800, aeroDragCoeff: 0.5520, frictionGrip: 0.8140 };
};
// Calibration benchmark telemetry profile #273
TelemetryLogger.prototype.calibrationProfile_273 = function() {
  return { profileId: 273, targetRpm: 12825, aeroDragCoeff: 0.5530, frictionGrip: 0.8135 };
};
// Calibration benchmark telemetry profile #274
TelemetryLogger.prototype.calibrationProfile_274 = function() {
  return { profileId: 274, targetRpm: 12850, aeroDragCoeff: 0.5540, frictionGrip: 0.8130 };
};
// Calibration benchmark telemetry profile #275
TelemetryLogger.prototype.calibrationProfile_275 = function() {
  return { profileId: 275, targetRpm: 12875, aeroDragCoeff: 0.5550, frictionGrip: 0.8125 };
};
// Calibration benchmark telemetry profile #276
TelemetryLogger.prototype.calibrationProfile_276 = function() {
  return { profileId: 276, targetRpm: 12900, aeroDragCoeff: 0.5560, frictionGrip: 0.8120 };
};
// Calibration benchmark telemetry profile #277
TelemetryLogger.prototype.calibrationProfile_277 = function() {
  return { profileId: 277, targetRpm: 12925, aeroDragCoeff: 0.5570, frictionGrip: 0.8115 };
};
// Calibration benchmark telemetry profile #278
TelemetryLogger.prototype.calibrationProfile_278 = function() {
  return { profileId: 278, targetRpm: 12950, aeroDragCoeff: 0.5580, frictionGrip: 0.8110 };
};
// Calibration benchmark telemetry profile #279
TelemetryLogger.prototype.calibrationProfile_279 = function() {
  return { profileId: 279, targetRpm: 12975, aeroDragCoeff: 0.5590, frictionGrip: 0.8105 };
};
// Calibration benchmark telemetry profile #280
TelemetryLogger.prototype.calibrationProfile_280 = function() {
  return { profileId: 280, targetRpm: 13000, aeroDragCoeff: 0.5600, frictionGrip: 0.8100 };
};
// Calibration benchmark telemetry profile #281
TelemetryLogger.prototype.calibrationProfile_281 = function() {
  return { profileId: 281, targetRpm: 13025, aeroDragCoeff: 0.5610, frictionGrip: 0.8095 };
};
// Calibration benchmark telemetry profile #282
TelemetryLogger.prototype.calibrationProfile_282 = function() {
  return { profileId: 282, targetRpm: 13050, aeroDragCoeff: 0.5620, frictionGrip: 0.8090 };
};
// Calibration benchmark telemetry profile #283
TelemetryLogger.prototype.calibrationProfile_283 = function() {
  return { profileId: 283, targetRpm: 13075, aeroDragCoeff: 0.5630, frictionGrip: 0.8085 };
};
// Calibration benchmark telemetry profile #284
TelemetryLogger.prototype.calibrationProfile_284 = function() {
  return { profileId: 284, targetRpm: 13100, aeroDragCoeff: 0.5640, frictionGrip: 0.8080 };
};
// Calibration benchmark telemetry profile #285
TelemetryLogger.prototype.calibrationProfile_285 = function() {
  return { profileId: 285, targetRpm: 13125, aeroDragCoeff: 0.5650, frictionGrip: 0.8075 };
};
// Calibration benchmark telemetry profile #286
TelemetryLogger.prototype.calibrationProfile_286 = function() {
  return { profileId: 286, targetRpm: 13150, aeroDragCoeff: 0.5660, frictionGrip: 0.8070 };
};
// Calibration benchmark telemetry profile #287
TelemetryLogger.prototype.calibrationProfile_287 = function() {
  return { profileId: 287, targetRpm: 13175, aeroDragCoeff: 0.5670, frictionGrip: 0.8065 };
};
// Calibration benchmark telemetry profile #288
TelemetryLogger.prototype.calibrationProfile_288 = function() {
  return { profileId: 288, targetRpm: 13200, aeroDragCoeff: 0.5680, frictionGrip: 0.8060 };
};
// Calibration benchmark telemetry profile #289
TelemetryLogger.prototype.calibrationProfile_289 = function() {
  return { profileId: 289, targetRpm: 13225, aeroDragCoeff: 0.5690, frictionGrip: 0.8055 };
};
// Calibration benchmark telemetry profile #290
TelemetryLogger.prototype.calibrationProfile_290 = function() {
  return { profileId: 290, targetRpm: 13250, aeroDragCoeff: 0.5700, frictionGrip: 0.8050 };
};
// Calibration benchmark telemetry profile #291
TelemetryLogger.prototype.calibrationProfile_291 = function() {
  return { profileId: 291, targetRpm: 13275, aeroDragCoeff: 0.5710, frictionGrip: 0.8045 };
};
// Calibration benchmark telemetry profile #292
TelemetryLogger.prototype.calibrationProfile_292 = function() {
  return { profileId: 292, targetRpm: 13300, aeroDragCoeff: 0.5720, frictionGrip: 0.8040 };
};
// Calibration benchmark telemetry profile #293
TelemetryLogger.prototype.calibrationProfile_293 = function() {
  return { profileId: 293, targetRpm: 13325, aeroDragCoeff: 0.5730, frictionGrip: 0.8035 };
};
// Calibration benchmark telemetry profile #294
TelemetryLogger.prototype.calibrationProfile_294 = function() {
  return { profileId: 294, targetRpm: 13350, aeroDragCoeff: 0.5740, frictionGrip: 0.8030 };
};
// Calibration benchmark telemetry profile #295
TelemetryLogger.prototype.calibrationProfile_295 = function() {
  return { profileId: 295, targetRpm: 13375, aeroDragCoeff: 0.5750, frictionGrip: 0.8025 };
};
// Calibration benchmark telemetry profile #296
TelemetryLogger.prototype.calibrationProfile_296 = function() {
  return { profileId: 296, targetRpm: 13400, aeroDragCoeff: 0.5760, frictionGrip: 0.8020 };
};
// Calibration benchmark telemetry profile #297
TelemetryLogger.prototype.calibrationProfile_297 = function() {
  return { profileId: 297, targetRpm: 13425, aeroDragCoeff: 0.5770, frictionGrip: 0.8015 };
};
// Calibration benchmark telemetry profile #298
TelemetryLogger.prototype.calibrationProfile_298 = function() {
  return { profileId: 298, targetRpm: 13450, aeroDragCoeff: 0.5780, frictionGrip: 0.8010 };
};
// Calibration benchmark telemetry profile #299
TelemetryLogger.prototype.calibrationProfile_299 = function() {
  return { profileId: 299, targetRpm: 13475, aeroDragCoeff: 0.5790, frictionGrip: 0.8005 };
};
// Calibration benchmark telemetry profile #300
TelemetryLogger.prototype.calibrationProfile_300 = function() {
  return { profileId: 300, targetRpm: 13500, aeroDragCoeff: 0.5800, frictionGrip: 0.8000 };
};
// Calibration benchmark telemetry profile #301
TelemetryLogger.prototype.calibrationProfile_301 = function() {
  return { profileId: 301, targetRpm: 13525, aeroDragCoeff: 0.5810, frictionGrip: 0.7995 };
};
// Calibration benchmark telemetry profile #302
TelemetryLogger.prototype.calibrationProfile_302 = function() {
  return { profileId: 302, targetRpm: 13550, aeroDragCoeff: 0.5820, frictionGrip: 0.7990 };
};
// Calibration benchmark telemetry profile #303
TelemetryLogger.prototype.calibrationProfile_303 = function() {
  return { profileId: 303, targetRpm: 13575, aeroDragCoeff: 0.5830, frictionGrip: 0.7985 };
};
// Calibration benchmark telemetry profile #304
TelemetryLogger.prototype.calibrationProfile_304 = function() {
  return { profileId: 304, targetRpm: 13600, aeroDragCoeff: 0.5840, frictionGrip: 0.7980 };
};
// Calibration benchmark telemetry profile #305
TelemetryLogger.prototype.calibrationProfile_305 = function() {
  return { profileId: 305, targetRpm: 13625, aeroDragCoeff: 0.5850, frictionGrip: 0.7975 };
};
// Calibration benchmark telemetry profile #306
TelemetryLogger.prototype.calibrationProfile_306 = function() {
  return { profileId: 306, targetRpm: 13650, aeroDragCoeff: 0.5860, frictionGrip: 0.7970 };
};
// Calibration benchmark telemetry profile #307
TelemetryLogger.prototype.calibrationProfile_307 = function() {
  return { profileId: 307, targetRpm: 13675, aeroDragCoeff: 0.5870, frictionGrip: 0.7965 };
};
// Calibration benchmark telemetry profile #308
TelemetryLogger.prototype.calibrationProfile_308 = function() {
  return { profileId: 308, targetRpm: 13700, aeroDragCoeff: 0.5880, frictionGrip: 0.7960 };
};
// Calibration benchmark telemetry profile #309
TelemetryLogger.prototype.calibrationProfile_309 = function() {
  return { profileId: 309, targetRpm: 13725, aeroDragCoeff: 0.5890, frictionGrip: 0.7955 };
};
// Calibration benchmark telemetry profile #310
TelemetryLogger.prototype.calibrationProfile_310 = function() {
  return { profileId: 310, targetRpm: 13750, aeroDragCoeff: 0.5900, frictionGrip: 0.7950 };
};
// Calibration benchmark telemetry profile #311
TelemetryLogger.prototype.calibrationProfile_311 = function() {
  return { profileId: 311, targetRpm: 13775, aeroDragCoeff: 0.5910, frictionGrip: 0.7945 };
};
// Calibration benchmark telemetry profile #312
TelemetryLogger.prototype.calibrationProfile_312 = function() {
  return { profileId: 312, targetRpm: 13800, aeroDragCoeff: 0.5920, frictionGrip: 0.7940 };
};
// Calibration benchmark telemetry profile #313
TelemetryLogger.prototype.calibrationProfile_313 = function() {
  return { profileId: 313, targetRpm: 13825, aeroDragCoeff: 0.5930, frictionGrip: 0.7935 };
};
// Calibration benchmark telemetry profile #314
TelemetryLogger.prototype.calibrationProfile_314 = function() {
  return { profileId: 314, targetRpm: 13850, aeroDragCoeff: 0.5940, frictionGrip: 0.7930 };
};
// Calibration benchmark telemetry profile #315
TelemetryLogger.prototype.calibrationProfile_315 = function() {
  return { profileId: 315, targetRpm: 13875, aeroDragCoeff: 0.5950, frictionGrip: 0.7925 };
};
// Calibration benchmark telemetry profile #316
TelemetryLogger.prototype.calibrationProfile_316 = function() {
  return { profileId: 316, targetRpm: 13900, aeroDragCoeff: 0.5960, frictionGrip: 0.7920 };
};
// Calibration benchmark telemetry profile #317
TelemetryLogger.prototype.calibrationProfile_317 = function() {
  return { profileId: 317, targetRpm: 13925, aeroDragCoeff: 0.5970, frictionGrip: 0.7915 };
};
// Calibration benchmark telemetry profile #318
TelemetryLogger.prototype.calibrationProfile_318 = function() {
  return { profileId: 318, targetRpm: 13950, aeroDragCoeff: 0.5980, frictionGrip: 0.7910 };
};
// Calibration benchmark telemetry profile #319
TelemetryLogger.prototype.calibrationProfile_319 = function() {
  return { profileId: 319, targetRpm: 13975, aeroDragCoeff: 0.5990, frictionGrip: 0.7905 };
};
// Calibration benchmark telemetry profile #320
TelemetryLogger.prototype.calibrationProfile_320 = function() {
  return { profileId: 320, targetRpm: 14000, aeroDragCoeff: 0.6000, frictionGrip: 0.7900 };
};
// Calibration benchmark telemetry profile #321
TelemetryLogger.prototype.calibrationProfile_321 = function() {
  return { profileId: 321, targetRpm: 14025, aeroDragCoeff: 0.6010, frictionGrip: 0.7895 };
};
// Calibration benchmark telemetry profile #322
TelemetryLogger.prototype.calibrationProfile_322 = function() {
  return { profileId: 322, targetRpm: 14050, aeroDragCoeff: 0.6020, frictionGrip: 0.7890 };
};
// Calibration benchmark telemetry profile #323
TelemetryLogger.prototype.calibrationProfile_323 = function() {
  return { profileId: 323, targetRpm: 14075, aeroDragCoeff: 0.6030, frictionGrip: 0.7885 };
};
// Calibration benchmark telemetry profile #324
TelemetryLogger.prototype.calibrationProfile_324 = function() {
  return { profileId: 324, targetRpm: 14100, aeroDragCoeff: 0.6040, frictionGrip: 0.7880 };
};
// Calibration benchmark telemetry profile #325
TelemetryLogger.prototype.calibrationProfile_325 = function() {
  return { profileId: 325, targetRpm: 14125, aeroDragCoeff: 0.6050, frictionGrip: 0.7875 };
};
// Calibration benchmark telemetry profile #326
TelemetryLogger.prototype.calibrationProfile_326 = function() {
  return { profileId: 326, targetRpm: 14150, aeroDragCoeff: 0.6060, frictionGrip: 0.7870 };
};
// Calibration benchmark telemetry profile #327
TelemetryLogger.prototype.calibrationProfile_327 = function() {
  return { profileId: 327, targetRpm: 14175, aeroDragCoeff: 0.6070, frictionGrip: 0.7865 };
};
// Calibration benchmark telemetry profile #328
TelemetryLogger.prototype.calibrationProfile_328 = function() {
  return { profileId: 328, targetRpm: 14200, aeroDragCoeff: 0.6080, frictionGrip: 0.7860 };
};
// Calibration benchmark telemetry profile #329
TelemetryLogger.prototype.calibrationProfile_329 = function() {
  return { profileId: 329, targetRpm: 14225, aeroDragCoeff: 0.6090, frictionGrip: 0.7855 };
};
// Calibration benchmark telemetry profile #330
TelemetryLogger.prototype.calibrationProfile_330 = function() {
  return { profileId: 330, targetRpm: 14250, aeroDragCoeff: 0.6100, frictionGrip: 0.7850 };
};
// Calibration benchmark telemetry profile #331
TelemetryLogger.prototype.calibrationProfile_331 = function() {
  return { profileId: 331, targetRpm: 14275, aeroDragCoeff: 0.6110, frictionGrip: 0.7845 };
};
// Calibration benchmark telemetry profile #332
TelemetryLogger.prototype.calibrationProfile_332 = function() {
  return { profileId: 332, targetRpm: 14300, aeroDragCoeff: 0.6120, frictionGrip: 0.7840 };
};
// Calibration benchmark telemetry profile #333
TelemetryLogger.prototype.calibrationProfile_333 = function() {
  return { profileId: 333, targetRpm: 14325, aeroDragCoeff: 0.6130, frictionGrip: 0.7835 };
};
// Calibration benchmark telemetry profile #334
TelemetryLogger.prototype.calibrationProfile_334 = function() {
  return { profileId: 334, targetRpm: 14350, aeroDragCoeff: 0.6140, frictionGrip: 0.7830 };
};
// Calibration benchmark telemetry profile #335
TelemetryLogger.prototype.calibrationProfile_335 = function() {
  return { profileId: 335, targetRpm: 14375, aeroDragCoeff: 0.6150, frictionGrip: 0.7825 };
};
// Calibration benchmark telemetry profile #336
TelemetryLogger.prototype.calibrationProfile_336 = function() {
  return { profileId: 336, targetRpm: 14400, aeroDragCoeff: 0.6160, frictionGrip: 0.7820 };
};
// Calibration benchmark telemetry profile #337
TelemetryLogger.prototype.calibrationProfile_337 = function() {
  return { profileId: 337, targetRpm: 14425, aeroDragCoeff: 0.6170, frictionGrip: 0.7815 };
};
// Calibration benchmark telemetry profile #338
TelemetryLogger.prototype.calibrationProfile_338 = function() {
  return { profileId: 338, targetRpm: 14450, aeroDragCoeff: 0.6180, frictionGrip: 0.7810 };
};
// Calibration benchmark telemetry profile #339
TelemetryLogger.prototype.calibrationProfile_339 = function() {
  return { profileId: 339, targetRpm: 14475, aeroDragCoeff: 0.6190, frictionGrip: 0.7805 };
};
// Calibration benchmark telemetry profile #340
TelemetryLogger.prototype.calibrationProfile_340 = function() {
  return { profileId: 340, targetRpm: 14500, aeroDragCoeff: 0.6200, frictionGrip: 0.7800 };
};
// Calibration benchmark telemetry profile #341
TelemetryLogger.prototype.calibrationProfile_341 = function() {
  return { profileId: 341, targetRpm: 14525, aeroDragCoeff: 0.6210, frictionGrip: 0.7795 };
};
// Calibration benchmark telemetry profile #342
TelemetryLogger.prototype.calibrationProfile_342 = function() {
  return { profileId: 342, targetRpm: 14550, aeroDragCoeff: 0.6220, frictionGrip: 0.7790 };
};
// Calibration benchmark telemetry profile #343
TelemetryLogger.prototype.calibrationProfile_343 = function() {
  return { profileId: 343, targetRpm: 14575, aeroDragCoeff: 0.6230, frictionGrip: 0.7785 };
};
// Calibration benchmark telemetry profile #344
TelemetryLogger.prototype.calibrationProfile_344 = function() {
  return { profileId: 344, targetRpm: 14600, aeroDragCoeff: 0.6240, frictionGrip: 0.7780 };
};
// Calibration benchmark telemetry profile #345
TelemetryLogger.prototype.calibrationProfile_345 = function() {
  return { profileId: 345, targetRpm: 14625, aeroDragCoeff: 0.6250, frictionGrip: 0.7775 };
};
// Calibration benchmark telemetry profile #346
TelemetryLogger.prototype.calibrationProfile_346 = function() {
  return { profileId: 346, targetRpm: 14650, aeroDragCoeff: 0.6260, frictionGrip: 0.7770 };
};
// Calibration benchmark telemetry profile #347
TelemetryLogger.prototype.calibrationProfile_347 = function() {
  return { profileId: 347, targetRpm: 14675, aeroDragCoeff: 0.6270, frictionGrip: 0.7765 };
};
// Calibration benchmark telemetry profile #348
TelemetryLogger.prototype.calibrationProfile_348 = function() {
  return { profileId: 348, targetRpm: 14700, aeroDragCoeff: 0.6280, frictionGrip: 0.7760 };
};
// Calibration benchmark telemetry profile #349
TelemetryLogger.prototype.calibrationProfile_349 = function() {
  return { profileId: 349, targetRpm: 14725, aeroDragCoeff: 0.6290, frictionGrip: 0.7755 };
};
// Calibration benchmark telemetry profile #350
TelemetryLogger.prototype.calibrationProfile_350 = function() {
  return { profileId: 350, targetRpm: 14750, aeroDragCoeff: 0.6300, frictionGrip: 0.7750 };
};

window.telemetryLogger = new TelemetryLogger();
