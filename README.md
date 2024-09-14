Shape Shift Runner
Shape Shift Runner is a fast-paced and visually stunning HTML5-based game where players shift between shapes to pass through matching tunnels. The game features neon glowing colors, exciting mechanics like jump power-ups, and creative visual effects such as clouds showering raindrops and breaking shapes when the game ends.

How to Play
You start as a shape (either circle, triangle, or square) moving forward automatically.
Your objective is to toggle your shape using the E key to match the shape of the tunnel ahead of you.
If you successfully match the shape with the tunnel, you earn a point.
After every 4 successful passes, you can jump to avoid the next tunnel. Use the Up arrow or the W key to jump.
The game’s speed increases after every 5 successful tunnel passes, making the game progressively harder.
Game Features
1. Neon Glowing Colors:
Shapes and tunnels have a glowing, neon-colored effect for an exciting visual experience.
The neon glow is applied using shadow effects to give a retro-futuristic aesthetic.
2. Breaking Shapes and Tunnels on Game Over:
When the player’s shape doesn’t match the tunnel, both the player’s shape and the tunnel break into smaller pieces, adding a satisfying conclusion to the game.
The pieces fly apart, creating a visually appealing end-game animation.
3. Cloud Shower with Raindrops:
Clouds float across the top of the screen, and they shower raindrops periodically.
The raindrops add a dynamic element to the background, providing movement and enhancing the visual appeal.
4. Jump Power-Up:
After every 4 successful passes, the player earns a power-up allowing them to jump and dodge the next obstacle.
Use the Up arrow key or W key to jump over the next tunnel.
The jump adds a layer of strategy, allowing players to plan their moves.
5. Increasing Difficulty:
The game speeds up after every 5 successful tunnel passes, making it progressively more difficult to toggle shapes in time.
As the game becomes faster, you’ll need to be more precise with your shape toggles and jump timing.
Rules
Shape Matching:

Press the E key to toggle between circle, triangle, and square.
Match your shape with the approaching tunnel to pass through it safely.
Score:

Every time you successfully pass through a tunnel, you score 1 point.
Keep track of your high score and aim to beat it with each playthrough!
Jump Power-Up:

After every 4 successful tunnels, you gain a jump power-up.
Use the Up arrow or W key to jump and avoid the next obstacle.
Game Over:

If your shape doesn’t match the tunnel, the game ends.
The player’s shape and the tunnel will break into pieces, followed by an automatic restart after a few seconds or by clicking the screen.
Game Controls
E key: Toggle between circle, triangle, and square.
Up arrow or W key: Jump to dodge a tunnel when the power-up is active.
Mouse Click: Restart the game after a game over.
How It Works (Detailed Prompt)
This game was created using the HTML5 Canvas API and JavaScript. Here's the step-by-step breakdown of the game’s mechanics:

1. Neon Glowing Shapes:
The game uses shadowBlur and shadowColor from the Canvas API to create the neon glow effect on both player shapes and tunnels.
2. Breaking Animation on Game Over:
When the player fails to match the shape with the tunnel, both the player’s shape and the first tunnel break into smaller fragments.
The fragments are animated to scatter in different directions, providing a more dynamic game over experience.
3. Clouds and Raindrops:
The clouds move continuously across the top of the screen. Raindrops periodically fall from the clouds as small circles, adding movement to the background.
4. Jump Power-Up:
After 4 successful tunnel passes, the player gains a power-up, allowing them to jump over the next tunnel.
The jump mechanic uses a simple gravity-based system, where the player temporarily moves up the screen and returns to the ground afterward.
5. Increasing Speed:
Every 5 successful tunnel passes, the speed of the game increases, making it more challenging for the player to toggle shapes and jump in time.
Installation and Setup
Clone the Repository:

bash
Copy code
git clone https://github.com/yashground/gamecreate.git
Open the Game:

Simply open the index.html file in any modern web browser, and the game will load.
Play and Enjoy:

Start the game and see how high you can score!
Contributing
We welcome contributions! Feel free to fork the repository, make changes, and submit a pull request. You can also suggest new features, report bugs, or provide feedback.
