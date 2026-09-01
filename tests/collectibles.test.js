/**
 * Unit Tests: Collectibles & Road Hazards
 */

const test = require('node:test');
const assert = require('node:assert');

global.window = {};
require('../js/collectibles.js');

test('CollectibleManager - Spawning and Collision', () => {
  const manager = new window.CollectibleManager();
  manager.reset();

  const laneCenters = [300, 420, 540, 660];
  const roadBounds = { left: 200, right: 760 };

  manager.spawnRandomEntity(laneCenters, roadBounds);
  assert.strictEqual(manager.items.length, 1);

  const item = manager.items[0];
  assert.ok(['coin', 'nitro', 'repair', 'oil', 'emp'].includes(item.type));

  // Place item on top of player car
  item.x = 480;
  item.y = 500;

  const playerCar = { x: 480, y: 500 };
  const hits = manager.checkCollisions(playerCar);

  assert.strictEqual(hits.length, 1);
  assert.strictEqual(hits[0].type, item.type);
});
