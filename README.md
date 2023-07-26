# leaflet-challenge

# Earthquake Visualization

This project is a web-based visualization of daily earthquake data using Leaflet.js and D3.js. It plots earthquakes on a map based on their longitude and latitude, with the data being pulled from the USGS (United States Geological Survey) API in JSON format.

![Earthquake Map](MAP.jpg)


## Features

- The map displays earthquake markers, with the marker size reflecting the magnitude of the earthquake and the marker color indicating the depth of the earthquake.
- Earthquakes with higher magnitudes will appear larger, and earthquakes with greater depth will have darker colors.
- Clicking on a marker will display a popup with additional information about the earthquake, including its magnitude, location, depth, and date & time.
- A legend is provided on the map to provide context for the data, showing the depth ranges and their corresponding marker colors.

## Getting Started

To view the earthquake visualization, simply open the `index.html` file in your web browser. The map will load, and the earthquake data will be fetched from the USGS API using D3.js.

## Technologies Used

- Leaflet.js: A JavaScript library for interactive maps.
- D3.js: A JavaScript library for manipulating documents based on data.
- OpenStreetMap: The tile layer used as the background for the map.

## How It Works

1. The map is created using Leaflet.js, and a tile layer from OpenStreetMap is added as the background.
2. The earthquake data is fetched from the USGS API using D3.js and represented in GeoJSON format.
3. Each earthquake is represented by a circle marker on the map, with the marker size and color determined by the earthquake's magnitude and depth, respectively.
4. Popups are added to each marker to display additional information about the earthquake.
5. A legend is included on the map to provide a visual guide for interpreting the marker colors.

## Customize the Code

- You can change the URL in the `d3.json` function call to fetch earthquake data for different time periods or regions.
- To modify the appearance of the legend, you can adjust the CSS styles for the `.legend` class.

## Credits

- The earthquake data is provided by the United States Geological Survey (USGS) through their API.



---

By following the steps in this project, you can create an interactive map visualization of earthquake data using Leaflet.js and D3.js. The README provides an overview of the project, its features, technologies used, and customization options. Remember to include any additional details or instructions specific to your implementation in your actual README file.