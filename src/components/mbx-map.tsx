import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import jeniZipCodes from "../data/jeni-zip-codes.json";
import { useEffect, useRef } from "react";

const colors = {
  Lowest: "#fef0d9",
  Low: "#fdcc8a",
  Moderate: "#fc8d59",
  High: "#e34a33",
  Highest: "#b30000",
};
/**
 * Util to generate an alternating array of the data value and its color to use in a style object
 * @param colors Object that maps a value in the data to the color it should be
 * @returns array that alternates between the data value and the color it should be
 */
export function generateStyles(colors: Record<string, string>) {
  const styles = [];
  for (const [value, color] of Object.entries(colors)) {
    styles.push(value), styles.push(color);
  }
  return styles;
}
export default function MbxMap() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";
  useEffect(() => {
    // Only instantiate the map once
    if (mapRef.current) return;
    // Only instantiate the map if the container ref exists
    if (!mapContainer.current) return;

    mapRef.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      // TODO: fit map to bounds of la
      center: [-118.274518, 34.065375],
      // TODO: make interactive
      dragPan: false,
      scrollZoom: false,
      zoom: 8,
    });

    mapRef.current.on("load", () => {
      // This would never be the case, but TS isn't recognizing that
      if (!mapRef.current) return;
      mapRef.current.addSource("jeni", {
        type: "geojson",
        data: jeniZipCodes as GeoJSON.FeatureCollection,
      });

      mapRef.current.addLayer({
        id: "jeni",
        type: "fill",
        source: "jeni",
        layout: {},
        paint: {
          "fill-opacity": 0.9,
          "fill-color": [
            "match",
            ["get", "jenicategory"],
            ...generateStyles(colors),
            "#acabaa",
          ],
        },
        // TODO: add before first symbol layer
      });
    });

    mapRef.current.on("click", (e) => {
      const features = mapRef.current?.queryRenderedFeatures(e.point, {
        layers: ["jeni"],
      });
      if (features?.length && features.length > 0) {
        // TODO: type
        console.log(features[0].properties);

      }
    });
  });
  return <div ref={mapContainer} className="absolute w-screen h-screen"></div>;
}
