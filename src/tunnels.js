let tunnelQueue = [];
const shapes = ['circle', 'triangle', 'square'];

export function spawnTunnel() {
    const tunnelShape = shapes[Math.floor(Math.random() * shapes.length)];
    tunnelQueue.push({ shape: tunnelShape, x: canvas.width, y: canvas.height / 2 });
}

export function drawTunnels(ctx) {
    tunnelQueue.forEach(tunnel => {
        ctx.fillStyle = '#ff0066';
        ctx.beginPath();
        if (tunnel.shape === 'circle') {
            ctx.arc(tunnel.x, tunnel.y, 60, 0, Math.PI * 2);
        } else if (tunnel.shape === 'triangle') {
            ctx.moveTo(tunnel.x, tunnel.y - 60);
            ctx.lineTo(tunnel.x + 60, tunnel.y + 60);
            ctx.lineTo(tunnel.x - 60, tunnel.y + 60);
        } else {
            ctx.rect(tunnel.x - 60, tunnel.y - 60, 120, 120);
        }
        ctx.fill();
    });
}

export function updateTunnels() {
    tunnelQueue.forEach(tunnel => {
        tunnel.x -= 5;
    });
    tunnelQueue = tunnelQueue.filter(tunnel => tunnel.x > -100);  // Remove tunnels that are off screen
}
