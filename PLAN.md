# D3: Rushing Around

## Game Design Vision

Insert Later

## Technologies

- TypeScript for most game code, little to no explicit HTML, and all CSS collected in common `style.css` file
- Deno and Vite for building
- GitHub Actions + GitHub Pages for deployment automation

## Assignments

## D3.a: Core mechanics (token collection and crafting)

Key technical challenge: Can you assemble a map-based user interface using the Leaflet mapping framework?
Key gameplay challenge: Can players collect and craft tokens from nearby locations to finally make one of sufficiently high value?

### Steps

#### Misc

- [x] Copy main.ts to reference.ts for future reference
- [x] Delete everything in main.ts

#### Map

- [x] Put a basic leaflet map on the screen
- [x] Draw the player's location on the map
- [x] Draw a rectangle representing one cell on the map
- [x] Use loops to draw a whole grid of cells on the map
- [x] Populate cells with same initial values on creation
- [ ] Displaying token values on cell
- [ ] Luck based spawning of token in cells

#### Inventory

- [x] Implement an inventory tab for the player
- [ ] Add a pickup of chached item and removal of cell
- [ ] Show values of tokens players hold

#### Crafting

- [ ] Implement a value checker between a map cell and player inventory
- [ ] Implement a place feature that removes a cell from a player and puts it in a cell
- [ ] Implement crafting new token

## D3.b
