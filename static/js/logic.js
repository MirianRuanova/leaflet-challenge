// Create the map
let myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 3,
  });
  
  // Add the tile layer
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "Map data &copy; <a href='https://openstreetmap.org'>OpenStreetMap</a> contributors",
  }).addTo(myMap);
  
  // Function to determine the size of the marker based on magnitude
  function getMarkerSize(magnitude) {
    return magnitude * 5;
  }
  
// Function to determine the color of the marker based on depth
function getMarkerColor(depth) {
    if (depth < 10) {
      return "#1a9850"; // Green
    } else if (depth < 30) {
      return "#fee08b"; // Yellow
    } else if (depth < 50) {
      return "#fd8d3c"; // Orange
    } else {
      return "#e31a1c"; // Red
    }
  }
  
  // Create a legend control
  let legend = L.control({ position: "bottomright" });
  
  // Function to generate the legend content
  legend.onAdd = function () {
    let div = L.DomUtil.create("div", "info legend");
    let depths = [-10, 10, 30, 50, 70];
    let labels = [
      "Depth: < 10 km",
      "Depth: 10 - 30 km",
      "Depth: 30 - 50 km",
      "Depth: 50 - 70 km",
      "Depth: > 70 km",
    ];
  
    div.innerHTML += "<h4>Earthquake Depth</h4>";
    for (let i = 0; i < depths.length; i++) {
      div.innerHTML +=
        '<i style="background:' +
        getMarkerColor(depths[i] + 1) +
        '"></i> ' +
        labels[i] +
        "<br>";
    }
  
    return div;
  };
  
  // Add the legend to the map
  legend.addTo(myMap);
  
  
  // Load the data from the API using D3
  let dataURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";
  d3.json(dataURL).then(function (data) {
    // Loop through the earthquake data and create markers
    data.features.forEach(function (feature) {
      let coordinates = feature.geometry.coordinates;
      let magnitude = feature.properties.mag;
      let depth = coordinates[2];
      let place = feature.properties.place;
      let time = new Date(feature.properties.time);
  
      // Create a marker with size and color based on magnitude and depth
      let marker = L.circleMarker([coordinates[1], coordinates[0]], {
        radius: getMarkerSize(magnitude),
        fillColor: getMarkerColor(depth),
        fillOpacity: 0.7,
        color: "#000",
        weight: 0.5,
      }).addTo(myMap);
  
      // Create a tooltip for the marker
      marker.bindTooltip(
        "Magnitude: " +
        magnitude +
        "<br>Location: " +
        place +
        "<br>Depth: " +
        depth +
        " km" +
        "<br>Date & Time: " +
        time
      );
    });
  }).catch(function (error) {
    console.error("Error fetching earthquake data:", error);
  });