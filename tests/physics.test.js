/**
 * Unit Tests: Collision Geometry & Vector Bounds
 */

const test = require('node:test');
const assert = require('node:assert');

test('Physics - AABB Bounding Box Collision Math', () => {
  const boxA = { x: 100, y: 100, width: 40, height: 60 };
  const boxB = { x: 120, y: 120, width: 40, height: 60 };
  const boxC = { x: 300, y: 300, width: 40, height: 60 };

  const checkAABB = (a, b) => {
    return Math.abs(a.x - b.x) < (a.width + b.width) / 2 &&
           Math.abs(a.y - b.y) < (a.height + b.height) / 2;
  };

  assert.strictEqual(checkAABB(boxA, boxB), true, 'Overlapping boxes must register collision');
  assert.strictEqual(checkAABB(boxA, boxC), false, 'Disjoint boxes must not register collision');
});

test('Physics - Radial Distance Calculation', () => {
  const p1 = { x: 0, y: 0, radius: 15 };
  const p2 = { x: 20, y: 0, radius: 10 };
  const p3 = { x: 50, y: 50, radius: 10 };

  const checkCircleCollision = (a, b) => {
    return Math.hypot(a.x - b.x, a.y - b.y) < (a.radius + b.radius);
  };

  assert.strictEqual(checkCircleCollision(p1, p2), true, 'Intersecting circles must collide');
  assert.strictEqual(checkCircleCollision(p1, p3), false, 'Separated circles must not collide');
});
