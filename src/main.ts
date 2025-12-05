// @deno-types="npm:@types/leaflet"
import leaflet from "leaflet";

// Style sheets
import "leaflet/dist/leaflet.css"; // supporting style for Leaflet
import "./style.css"; // student-controlled page style

// Fix missing marker images
import "./_leafletWorkaround.ts"; // fixes for missing Leaflet images

// Import our luck function
import _luck from "./_luck.ts";

// Create UI elements
const controlPanelDiv = document.createElement("div");
controlPanelDiv.id = "controlPanel";
document.body.append(controlPanelDiv);

const mapDiv = document.createElement("div");
mapDiv.id = "map";
document.body.append(mapDiv);

const statusPanelDiv = document.createElement("div");
statusPanelDiv.id = "statusPanel";
document.body.append(statusPanelDiv);

//Variables for the map
const CLASSROOM_LATLNG = leaflet.latLng(
  36.997936938057016,
  -122.05703507501151,
);

const GAMEPLAY_ZOOM_LEVEL = 19;
const _TILE_DEGREES = 1e-4;
const MAX_CELL_CREATION_X = 23;
const MAX_CELL_CREATION_Y = 9;
const _MAP_RANDOMIZE_NUMBER = 1912125; //It's "slay" converted to numbers

//Basic Leaflet Map
const map = leaflet.map(mapDiv, {
  center: CLASSROOM_LATLNG,
  zoom: GAMEPLAY_ZOOM_LEVEL,
  minZoom: GAMEPLAY_ZOOM_LEVEL,
  maxZoom: GAMEPLAY_ZOOM_LEVEL,
  zoomControl: false,
  scrollWheelZoom: false,
});

// Populate the map with a background tile layer
leaflet
  .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  })
  .addTo(map);

// Player Marker
// Add a marker to represent the player
const playerMarker = leaflet.marker(CLASSROOM_LATLNG);
playerMarker.bindTooltip("HERE YOU ARE!");
playerMarker.addTo(map);

// Inventory Data
interface Inventory {
  haveToken: boolean;
  value?: number;
}

const playerInventory: Inventory = {
  haveToken: false,
  value: 0,
};

// Token Data
interface Token {
  tokenI: number;
  tokenJ: number;
  tokenBounds: leaflet.LatLngBounds;
  tokenValue: number;
}

updateInventoryScreen(playerInventory);
//Function to update inventory screen
function updateInventoryScreen(player: Inventory) {
  statusPanelDiv.innerHTML = "INVENTORY<p>";
  if (player.haveToken == true) {
    statusPanelDiv.innerHTML += "NO TOKEN";
  } else {
    statusPanelDiv.innerHTML += `${player.value}`;
  }
}

//Loop to call function from x -20 to 20 and y-10 to 10
for (let i = -MAX_CELL_CREATION_Y; i < MAX_CELL_CREATION_Y; i++) {
  for (let j = -MAX_CELL_CREATION_X; j < MAX_CELL_CREATION_X; j++) {
    console.log("test");
  }
}
