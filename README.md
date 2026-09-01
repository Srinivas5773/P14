# Cyberpunk Racer // 2D Arcade Racing Game

A lightweight, top-down 2D cyberpunk arcade racing game built with pure HTML5 Canvas and vanilla JavaScript. Features authentic top-down driving physics, procedural Web Audio sound synthesis, multiple game modes, varied traffic AI archetypes, nitro boosts, road hazards, collectibles, and local score persistence.

---

## Features

- **Physics & Vehicle Handling**: Acceleration, braking, reverse, dynamic steering sensitivity, lateral drift sliding, and dual-thruster nitro boost.
- **Game Modes**:
  - **Circuit Race (Mode 01)**: 3 fast laps against time with checkpoints and lap splits.
  - **Highway Rush (Mode 02)**: Endless high-density cyber-traffic run with escalating difficulty.
- **Traffic AI & Hazards**: Cyber Sedans, Heavy Armored Haulers, Tuner Coupes with turn signals, Sector Enforcer patrol cruisers, oil slicks, and EMP jammers.
- **Procedural Web Audio API**: Procedural engine rumble, nitro roar, drift screech, crash thumps, and chime fanfares without external audio assets.
- **Telemetry & Radar**: Real-time HUD speedometer, health bar, nitro level, gear indicator, and mini-map sector radar.
- **Extensive Lore & Content**: Over 58,000 lines of modular game code, sector maps, track profiles, rival AI rosters, and tuning catalogs.

---

## Prerequisites & Dependencies

- **Node.js**: `v18.0.0` or later (for running the optional local server and test runner).
- **Modern Web Browser**: Chrome, Firefox, Safari, Edge, or any standard HTML5 Canvas compatible browser.

---

## Installation

Clone or extract the repository and install the dev dependencies:

```bash
npm install
```

---

## Build

Run the automated asset and payload verification script:

```bash
npm run build
```

---

## Running the Application

### Option A: Node.js Server (Recommended)
Start the built-in HTTP server:

```bash
npm start
```
Then open your browser and navigate to: `http://localhost:3000`

### Option B: Standalone Browser
Open `index.html` directly in any web browser without needing any server or internet connection.

### Option C: Docker Container
```bash
docker build -t cyberpunk-racer:latest .
docker run -p 3000:3000 cyberpunk-racer:latest
```

---

## Testing & Verification

Run the automated unit test suite:

```bash
npm test
```

To run with coverage tracking:
```bash
npm run test:coverage
```

---

## Project Structure

```
cyberpunk_racer/
├── index.html                 # Main HTML5 entrypoint & HUD layout
├── styles.css                 # Dark cyberpunk retro-arcade stylesheet
├── server.js                  # Production Node.js HTTP server
├── build.js                   # Asset and integrity verification script
├── Dockerfile                 # Container deployment specification
├── Makefile                   # Build and test task automation
├── package.json               # Package manifest and run scripts
├── package-lock.json          # Dependency lockfile
├── README.md                  # Project documentation
├── js/
│   ├── game.js                # Main game loop, state machine, scoring
│   ├── car.js                 # Player vehicle physics & handling
│   ├── track.js               # Road rendering, curbs, and finish lines
│   ├── traffic.js             # Traffic AI vehicles & lane behaviors
│   ├── collectibles.js        # Data chips, repair kits, nitro tanks, hazards
│   ├── particles.js           # Sparks, exhaust flames, skid marks
│   ├── audio.js               # Web Audio API procedural sound engine
│   ├── input.js               # Keyboard input handling & audio unlocking
│   ├── telemetry.js           # 60hz vehicle telemetry logger
│   ├── replay.js              # Ghost replay recorder & trajectory
│   ├── testing_suite.js       # In-browser test runner
│   └── data/
│       ├── tracks_data.js     # Track blueprints & waypoint matrices
│       ├── cyberpunk_lore_db.js# Sector encyclopedia & chronicles
│       ├── drivers_db.js      # 350+ Rival AI personality profiles
│       ├── achievements_db.js # Career milestones & badge criteria
│       ├── customization_db.js# Vehicle tuning parts catalog
│       ├── sound_wavetables.js# FM synth patches & harmonic tables
│       └── radio_dialogues.js # Scanner chatter & dispatch broadcasts
└── tests/
    ├── car.test.js            # Vehicle physics unit tests
    ├── physics.test.js        # Collision & velocity tests
    ├── track.test.js          # Track & lap computation tests
    ├── traffic.test.js        # Traffic AI & overtakes tests
    └── collectibles.test.js   # Pickups & hazard collision tests
```

---

## Controls

| Key / Action | Function |
| :--- | :--- |
| `W` / `Up Arrow` | Accelerate / Forward Torque |
| `S` / `Down Arrow` | Brake / Reverse |
| `A`, `D` / `Left`, `Right` | Steering & Lateral Drift |
| `SPACE` / `SHIFT` | Nitro Injection Boost |
| `P` / `ESC` | Pause / Resume Race |
| `R` | Quick Restart |
| `M` | Toggle Sound Audio |
