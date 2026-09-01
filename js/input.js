/**
 * ============================================================================
 * CYBERPUNK RACER // INPUT MANAGER
 * Handles keyboard state, single-press triggers, and event listeners.
 * ============================================================================
 */

class InputManager {
  constructor() {
    this.keys = {};
    this.justPressed = {};

    // Standardized actions
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.nitro = false;
    this.pause = false;
    this.restart = false;
    this.enter = false;

    this.bindEvents();
  }

  bindEvents() {
    window.addEventListener('keydown', (e) => {
      // Unlock audio on first user keydown
      if (window.soundEngine && !window.soundEngine.initialized) {
        window.soundEngine.init();
      } else if (window.soundEngine) {
        window.soundEngine.resumeContext();
      }

      // Prevent default page scroll on arrow keys and space
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space', 'Tab'].includes(e.code)) {
        e.preventDefault();
      }

      if (!this.keys[e.code]) {
        this.justPressed[e.code] = true;
      }
      this.keys[e.code] = true;
      this.updateActions();
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
      this.updateActions();
    });

    // Also resume audio on pointer down
    window.addEventListener('pointerdown', () => {
      if (window.soundEngine && !window.soundEngine.initialized) {
        window.soundEngine.init();
      } else if (window.soundEngine) {
        window.soundEngine.resumeContext();
      }
    }, { once: true });
  }

  updateActions() {
    this.up = !!(this.keys['KeyW'] || this.keys['ArrowUp']);
    this.down = !!(this.keys['KeyS'] || this.keys['ArrowDown']);
    this.left = !!(this.keys['KeyA'] || this.keys['ArrowLeft']);
    this.right = !!(this.keys['KeyD'] || this.keys['ArrowRight']);
    this.nitro = !!(this.keys['Space'] || this.keys['ShiftLeft'] || this.keys['ShiftRight']);
    this.pause = !!(this.keys['KeyP'] || this.keys['Escape']);
    this.restart = !!this.keys['KeyR'];
    this.enter = !!this.keys['Enter'];
  }

  /**
   * Check if key was pressed down this frame
   */
  isJustPressed(code) {
    return !!this.justPressed[code];
  }

  /**
   * Clears single-frame press triggers at end of game tick
   */
  clearFrame() {
    this.justPressed = {};
  }
}

window.inputManager = new InputManager();
