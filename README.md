# Sorting Visualizer

## Summary

An battleship game playable versus an AI opponent.

## Features

- Setup screen that allows user to shuffle through different sip placements.
- An easy AI that shoots randomly and a advanced AI that tries to sink a ship after the first hit.
- Clickable gameboard to attack the opponents gameboard.

## Live-Demo

Live-Demo here:
'<https://gitonmylvl.github.io/battleship/>'

## Installation

1. **Clone repository**

   ```bash
   git clone https://github.com/GitOnMyLvl/battleship.git
   cd sorting
   ```

2. **Install dependencies**

  ```bash
   npm install
   ```

3. **Start server**

  ```bash
   npm start
   ```

## Usage

1. If the browser does not open, navigate to '<http://localhost:9000>'.
2. Click the start button to go to the setup screen.
3. Shuffle through different ship placements by clicking the Place Ships button.
4. Click Easy or Advanced to choose the opponent AI and start the game.
5. Click on a empty cell to attack it and the opponent will also attack.
6. Repeat till the "Game Over" message appears. Click the reset button and go back to the setup screen.

## Tests

To start tests:

```bash
npm test
```

