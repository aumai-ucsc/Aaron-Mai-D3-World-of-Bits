// @deno-types="npm:@types/leaflet"
import leaflet from "leaflet";

// Style sheets
import "leaflet/dist/leaflet.css"; // supporting style for Leaflet
import "./style.css"; // student-controlled page style

// Fix missing marker images
import "./_leafletWorkaround.ts"; // fixes for missing Leaflet images

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
const TILE_DEGREES = 1e-4;
const MAX_CELL_CREATION_X = 23;
const MAX_CELL_CREATION_Y = 9;
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

//Function to create a cell based on a position relative to the player
function createCell(i: number, j: number) {
  // Create an origin point based on player loction
  const origin = CLASSROOM_LATLNG;
  // Convert index from player to LatLang bounds for leaflet map
  const bounds = leaflet.latLngBounds([
    [origin.lat + i * TILE_DEGREES, origin.lng + j * TILE_DEGREES],
    [origin.lat + (i + 1) * TILE_DEGREES, origin.lng + (j + 1) * TILE_DEGREES],
  ]);

  // Add new rectangle to map
  const rect = leaflet.rectangle(bounds);
  rect.addTo(map);

  //Each cell gets a popup
  rect.bindPopup(() => {
    //Give each rect a value (All starter cells begin with 2)
    const pointValue: number = 2;

    // Add popup to cell containing information and value
    const popupDiv = document.createElement("div");
    popupDiv.innerHTML =
      `<div>LOCATION (${i},${j}) | <span id="value">${pointValue}</span>`;

    return popupDiv;
  });
}

//Loop to call function from x -20 to 20 and y-10 to 10
for (let i = -MAX_CELL_CREATION_Y; i < MAX_CELL_CREATION_Y; i++) {
  for (let j = -MAX_CELL_CREATION_X; j < MAX_CELL_CREATION_X; j++) {
    createCell(i, j);
  }
}
