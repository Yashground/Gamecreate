let raindrops = [];

export function spawnRain() {
    for (let i = 0; i < 20; i++) {
        raindrops.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height / 2 });
    }
}

export function drawRain(ctx) {
    raindrops.forEach(drop => {
        ctx.fillStyle = '#00f';
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, 2, 0, Math.PI * 2);
        ctx.fill();
        drop.y += 4;
        if (drop.y > canvas.height) {
            drop.y = 0;
        }
    });
}
