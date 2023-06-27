# Monster Killer

This project is a simple game called Monster Killer implemented with HTML, CSS, and JavaScript. The game allows the player to fight against a monster by attacking, using strong attacks, and healing.

## Files

- `index.html`: The main HTML file that contains the structure and layout of the game interface.
- `assets/styles/app.css`: The CSS file that defines the styles for the game elements.
- `assets/scripts/vendor.js`: The JavaScript file that includes external libraries or dependencies (not provided).
- `assets/scripts/app.js`: The main JavaScript file that implements the game logic.

## Usage

To play the game, open the `index.html` file in a web browser that supports JavaScript. The game interface will be displayed, showing the monster's health bar, the player's health bar, and control buttons.

### Controls

- **ATTACK**: Clicking this button performs a regular attack on the monster.
- **STRONG ATTACK**: Clicking this button performs a stronger attack on the monster.
- **HEAL**: Clicking this button allows the player to heal themselves.
- **SHOW LOG**: Clicking this button prints the battle log to the console.

### Gameplay

- The player and the monster start with a maximum health level of 100.
- Each attack or heal action will result in a change in the respective health bars.
- The game will end when either the player or the monster reaches 0 health.
- The battle log records the events of the game, including attacks, heals, and the game outcome.

## JavaScript Files

### app.js

The `app.js` file contains the main game logic implemented with JavaScript. It includes functions for attacking, healing, calculating damage, and handling game events. It also defines constants and variables to track the game state.

### vendor.js

The `vendor.js` file is not provided and should include any external libraries or dependencies required by the game. If you have any dependencies, make sure to include them in this file.

## CSS File

### app.css

The `app.css` file contains the styles for the game elements, including the health bars, buttons, and overall layout. You can modify this file to customize the game's appearance according to your preferences.

## Acknowledgments

The Monster Killer game is a simple project created for learning purposes and based on a tutorial or personal project. If you used any external resources or followed a tutorial, provide the appropriate credits and acknowledgments here.

## License
This project is licensed under the MIT License. You can find the full text of the license in the [LICENSE.md](LICENSE.md) file.
