let pikachuList = [];
const pikachuImage = new Image();
pikachuImage.src = '../public/pikachu.png';  // Ensure the path is correct

export function spawnPikachu() {
    // Spawn a new Pikachu or increase the size of the last Pikachu
    pikachuList.push({
        x: canvas.width,     // Spawn from the right side of the canvas
        y: 120,              // Y-position in the air
        size: 80,            // Default size
        isFalling: false     // Initially not falling
    });
}

export function drawPikachu(ctx) {
    pikachuList.forEach(pikachu => {
        ctx.drawImage(pikachuImage, pikachu.x, pikachu.y, pikachu.size, pikachu.size);
        pikachu.x -= 2; // Pikachu moves left
    });

    // Remove Pikachus that go off screen (to avoid memory leaks)
    pikachuList = pikachuList.filter(pikachu => pikachu.x + pikachu.size > 0);
}

export function fallPikachus() {
    // Make all Pikachus fall by updating their `y` position
    pikachuList.forEach(pikachu => {
        pikachu.isFalling = true;   // Set falling to true after game ends
    });
}

export function updatePikachus() {
    pikachuList.forEach(pikachu => {
        if (pikachu.isFalling) {
            pikachu.y += 5;  // Gravity effect, Pikachu falls down
            if (pikachu.y + pikachu.size > canvas.height) {
                pikachu.y = canvas.height - pikachu.size; // Stop at the bottom of the screen
            }
        }
    });
}
