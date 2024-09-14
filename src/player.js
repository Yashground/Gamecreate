const shapes = ['circle', 'triangle', 'square'];
let playerShape = 'circle';
let playerY = canvas.height / 2;
let isJumping = false;
let jumpHeight = 0;

export function drawPlayer(ctx) {
    const size = 50;
    ctx.fillStyle = '#00ffcc';
    ctx.beginPath();
    if (playerShape === 'circle') {
        ctx.arc(canvas.width / 4, playerY, size, 0, Math.PI * 2);
    } else if (playerShape === 'triangle') {
        ctx.moveTo(canvas.width / 4, playerY - size);
        ctx.lineTo(canvas.width / 4 + size, playerY + size);
        ctx.lineTo(canvas.width / 4 - size, playerY + size);
    } else {
        ctx.rect(canvas.width / 4 - size, playerY - size, size * 2, size * 2);
    }
    ctx.fill();
}

export function toggleShape() {
    const currentIndex = shapes.indexOf(playerShape);
    playerShape = shapes[(currentIndex + 1) % shapes.length];
}

export function applyJump() {
    if (isJumping) {
        playerY += jumpHeight;
        jumpHeight += 10;
        if (jumpHeight > 0 && playerY >= canvas.height / 2) {
            playerY = canvas.height / 2;
            isJumping = false;
        }
    }
}
