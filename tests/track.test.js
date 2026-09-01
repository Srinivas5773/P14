/**
 * Unit Tests: Track Manager & Lap Calculations
 */

const test = require('node:test');
const assert = require('node:assert');

global.window = {};
require('../js/track.js');

test('TrackManager - Dimensions & Lane Generation', () => {
  const track = new window.TrackManager(960, 640);
  assert.strictEqual(track.numLanes, 4);
  assert.strictEqual(track.laneCenters.length, 4);
  assert.strictEqual(track.roadWidth, 520);
});

test('TrackManager - Lap Completion Detection', () => {
  const track = new window.TrackManager(960, 640);
  track.reset('circuit');

  const initialLap = track.currentLap;
  assert.strictEqual(initialLap, 1);

  // Advance past lapLength
  track.totalDistance = 12500;
  const completed = track.checkLapCompletion(11900);
  assert.strictEqual(completed, true, 'Lap completion must trigger when crossing lap boundary');
  assert.strictEqual(track.currentLap, 2);
});
