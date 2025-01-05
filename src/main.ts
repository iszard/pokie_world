import { MarioGame } from "./scenes/MarioGame";

import { Game, Types } from "phaser";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800, // Canvas width in pixels
  height: 600, // Canvas height in pixels
  parent: "game-container",
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 0 }, // Top down game, so no gravity
    },
  },
  scene: [MarioGame],
};

export default new Game(config);
