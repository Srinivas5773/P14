/**
 * Unit Tests: Traffic AI Vehicles & Overtakes
 */

const test = require('node:test');
const assert = require('node:assert');

global.window = {};
require('../js/traffic.js');

test('TrafficManager - Vehicle Spawning and Despawning', () => {
  const traffic = new window.TrafficManager();
  traffic.reset();

  const laneCenters = [300, 420, 540, 660];
  traffic.spawnTrafficVehicle(laneCenters);
  assert.strictEqual(traffic.vehicles.length, 1);

  const v = traffic.vehicles[0];
  assert.ok(['sedan', 'truck', 'tuner', 'patrol'].includes(v.archetype));

  // Move vehicle offscreen
  v.y = 900;
  traffic.update(5.0, laneCenters);
  assert.strictEqual(traffic.vehicles.length, 0, 'Offscreen traffic must despawn');
});

test('TrafficManager - Overtake Count Detection', () => {
  const traffic = new window.TrafficManager();
  traffic.reset();

  const laneCenters = [300, 420, 540, 660];
  traffic.spawnTrafficVehicle(laneCenters);
  traffic.vehicles[0].y = 470; // Ahead of player
  traffic.vehicles[0].speed = 2.0;

  const overtakes = traffic.update(20.0, laneCenters);
  assert.ok(overtakes >= 1, 'Passing traffic vehicle must increment overtakes');
  assert.strictEqual(traffic.overtakeCount, 1);
});
