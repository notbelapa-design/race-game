# Race Game

This repository contains a simple web-based racing game where players can earn tokens by winning races. It is inspired by [Vibe Shooter](https://vibeshooter.thirdweb.com/) but uses a straightforward progress-bar race instead of a shooting game.

## How it works

- Press **Start Race** to begin a race. You have 10 seconds to reach the finish line.
- Rapidly press the **space bar** to move your car (progress bar). Each press increases your progress by 2%.
- If you reach the finish line before the timer runs out, you win and earn **0.01 tokens**.
- Otherwise, you lose and earn nothing for that race.
- Your total number of wins and tokens is displayed on the page.

This implementation stores the token balance in the browser for demonstration purposes. To integrate real tokens on an EVM chain, you can connect this front end to the [thirdweb](https://thirdweb.com/) API or your own smart contract. See the original [Vibe Shooter](https://github.com/thirdweb-example/vibe-shooter) project for an example of how to handle wallet creation, authentication, and on-chain token transfers.

## Deploying to Vercel

1. Fork this repository to your own GitHub account (if not already there).
2. Sign in to [Vercel](https://vercel.com/) and import the repository.
3. Choose a framework preset of **Static Site** (the project is plain HTML, CSS, and JS).
4. Deploy! Your race game will be live.

## License

This project is released under the MIT License. Feel free to modify and adapt it for your own use.
