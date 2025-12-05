# D3: Rushing Around

# Game Design Vision
Insert Later

# Technologies
- TypeScript for most game code, little to no explicit HTML, and all CSS collected in common `style.css` file
- Deno and Vite for building
- GitHub Actions + GitHub Pages for deployment automation

# Assignments

## D3.a: Core mechanics (token collection and crafting)
Key technical challenge: Can you assemble a map-based user interface using the Leaflet mapping framework?
Key gameplay challenge: Can players collect and craft tokens from nearby locations to finally make one of sufficiently high value?

### Software Requirements
- [ ] Leaflet is used to render an interactive map centered on the player's location (which is fixed to the location of the classroom).
- [ ] Grid cells of some fixed size (e.g. about the size of a house, 0.0001 degrees on a side) are rendered on the map.
- [ ] The contents of a cell (e.g. whether it contains a token, and if so a token of what value) are visible without needing to click the cell. This may be done with text or graphics (e.g. a sprite image or procedural graphics using a canvas tag).
- [ ] Cells can be clicked to exercise the game mechanics.
- [ ] Token spawning consistency is implemented using a deterministic hashing mechanism (likely using the luck function provided in the starter code)

### Gameplay requirements

- [ ] Map:
  - [ ] The player can see cells all the way to the edge of the map (i.e. if the player doesn’t scroll the map, they could believe that cells covered the entire world).
  - [ ] The player can only interact with cells near them (e.g. about three cells away from their current location).
  - [ ] The initial state of cells is consistent across page loads.
- [ ] Inventory:
  - [ ] They can pick up at most one token, and picking it up removes it from the cell that contained it.
  - [ ] Whether the player holds a token and if so, what value it has is clearly visible on the screen.
- [ ] Crafting:
  - [ ] If they have a token, they can place it onto a cell containing a token of equal value to produce a new token of double the value.
  - [ ] The game detects when the player has a token of sufficient value in hand (e.g. 8 or 16).


### Steps

- [ ] copy main.ts to reference.ts for future reference
- [ ] delete everything in main.ts
- [ ] put a basic leaflet map on the screen
- [ ] draw the player's location on the map
- [ ] draw a rectangle representing one cell on the map
- [ ] use loops to draw a whole grid of cells on the map
- ...

## D3.b: ...

