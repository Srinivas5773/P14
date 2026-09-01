/**
 * Cyberpunk Racer - Production Build & Verification Script
 */

const fs = require('fs');
const path = require('path');

console.log('=== Cyberpunk Racer Build & Asset Verification ===');

const requiredFiles = [
  'index.html',
  'styles.css',
  'js/game.js',
  'js/car.js',
  'js/track.js',
  'js/traffic.js',
  'js/collectibles.js',
  'js/particles.js',
  'js/audio.js',
  'js/input.js',
  'js/telemetry.js',
  'js/replay.js',
  'js/testing_suite.js',
  'js/data/tracks_data.js',
  'js/data/cyberpunk_lore_db.js',
  'js/data/drivers_db.js',
  'js/data/achievements_db.js',
  'js/data/customization_db.js',
  'js/data/sound_wavetables.js',
  'js/data/radio_dialogues.js'
];

let totalBytes = 0;
let missingFiles = 0;

requiredFiles.forEach((relPath) => {
  const fullPath = path.join(__dirname, relPath);
  if (fs.existsSync(fullPath)) {
    const stat = fs.statSync(fullPath);
    totalBytes += stat.size;
    console.log(`  [OK] ${relPath} (${(stat.size / 1024).toFixed(1)} KB)`);
  } else {
    console.error(`  [MISSING] ${relPath}`);
    missingFiles++;
  }
});

if (missingFiles > 0) {
  console.error(`\nBuild FAILED: ${missingFiles} missing files.`);
  process.exit(1);
} else {
  console.log(`\nBuild SUCCESS: All ${requiredFiles.length} files verified. Total payload: ${(totalBytes / 1024).toFixed(1)} KB.`);
}
