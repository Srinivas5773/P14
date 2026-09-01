/**
 * Unit Tests: Player Car Physics & Lifecycle
 */

const test = require('node:test');
const assert = require('node:assert');

// Mock browser globals for Node test environment
global.window = {};
require('../js/particles.js');
require('../js/car.js');

test('PlayerCar - Initial State Verification', () => {
  const car = new window.PlayerCar(480, 500);
  assert.strictEqual(car.x, 480);
  assert.strictEqual(car.y, 500);
  assert.strictEqual(car.speed, 0);
  assert.strictEqual(car.health, 100);
  assert.strictEqual(car.nitro, 100);
  assert.strictEqual(car.isWrecked, false);
});

test('PlayerCar - Acceleration Mechanics', () => {
  const car = new window.PlayerCar(480, 500);
  const input = { up: true, down: false, left: false, right: false, nitro: false };
  const roadBounds = { left: 200, right: 760 };

  car.update(input, roadBounds);
  assert.ok(car.speed > 0, 'Speed must increase under positive throttle');
});

test('PlayerCar - Braking and Reverse Mechanics', () => {
  const car = new window.PlayerCar(480, 500);
  car.speed = 5.0;
  const input = { up: false, down: true, left: false, right: false, nitro: false };
  const roadBounds = { left: 200, right: 760 };

  car.update(input, roadBounds);
  assert.ok(car.speed < 5.0, 'Speed must decrease when braking');
});

test('PlayerCar - Nitro Boost Activation', () => {
  const car = new window.PlayerCar(480, 500);
  car.speed = 8.0;
  const input = { up: true, down: false, left: false, right: false, nitro: true };
  const roadBounds = { left: 200, right: 760 };

  car.update(input, roadBounds);
  assert.strictEqual(car.isNitroActive, true, 'Nitro must activate when speed > 3');
  assert.ok(car.nitro < 100, 'Nitro fuel must deplete while active');
});

test('PlayerCar - Damage and Wreck Lifecycle', () => {
  const car = new window.PlayerCar(480, 500);
  car.takeDamage(40);
  assert.strictEqual(car.health, 60);
  assert.strictEqual(car.isWrecked, false);

  car.invulnerableTimer = 0; // Clear grace timer for test
  car.takeDamage(70);
  assert.strictEqual(car.health, 0);
  assert.strictEqual(car.isWrecked, true);
});

test('PlayerCar - Repair and Nitro Refill Items', () => {
  const car = new window.PlayerCar(480, 500);
  car.health = 40;
  car.nitro = 20;

  car.repair(35);
  assert.strictEqual(car.health, 75);

  car.refillNitro(40);
  assert.strictEqual(car.nitro, 60);
});
