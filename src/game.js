import { drawPlayer, toggleShape, applyJump } from './player.js';
import { spawnTunnel, drawTunnels, updateTunnels } from './tunnels.js';
import { spawnPikachu, drawPikachu, fallPikachus } from './pikachu.js';
import { spawnRain, drawRain } from './rain.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let gameOver = false;
let score = 0;
let frameCount = 0;
let successfulPasses = 0;
const tunnelSpawnInterval = 150;

function gameLoop() {
    if (gameOver) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer(ctx);
    drawTunnels(ctx);
    drawPikachu(ctx);
    drawRain(ctx);
    applyJump();

    frameCount++;
    if (frameCount % tunnelSpawnInterval === 0) {
        spawnTunnel();
    }

    updateTunnels();
    requestAnimationFrame(gameLoop);
}

function resetGame() {
    score = 0;
    frameCount = 0;
    gameOver = false;
    successfulPasses = 0;
    spawnRain();
    gameLoop();
}

// Initial Game Start
resetGame();
