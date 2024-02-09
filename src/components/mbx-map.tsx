import mapboxgl, { StyleFunction } from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import jeniZipCodes from "../data/jeni-zip-codes.json";
import laBoundary from "../data/LA_County_Boundary_Feature_Layer.json";
import { useEffect, useRef, useState } from "react";
import { colorMaps, indexTypeToPropertyMap } from "@/constants/categories";
import { JeniZip } from "@/types/jeni";
import { IndexType } from "@/types/categories";

/**
 * Util to generate an alternating array of the data value and its color to use in a style object
 * @param colorMaps Object that maps a value in the data to the color it should be
 * @returns array that alternates between the data value and the color it should be
 */
export function generateStyles(selectedIndex: IndexType) {
  const styles: Array<string[] | string> = ["match"];
  const colorMap = colorMaps[selectedIndex];
  const categoryProperty = indexTypeToPropertyMap[selectedIndex];
  styles.push(["get", categoryProperty]);
  for (const [category, color] of Object.entries(colorMap)) {
    styles.push(category);
    styles.push(color);
  }
  // Add a default
  styles.push("#acabaa");
  return styles;
}

export interface MbxMapProps {
  setSelectedZip: React.Dispatch<React.SetStateAction<JeniZip | undefined>>;
  selectedIndex: IndexType;
}
export default function MbxMap({ setSelectedZip, selectedIndex }: MbxMapProps) {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [hasLoaded, setHasLoaded] = useState(false);
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
      center: [-118.659356, 34.263881],
      zoom: 8.5,
    });

    mapRef.current.on("load", () => {
      // This would never be the case, but TS isn't recognizing that
      if (!mapRef.current) return;
      mapRef.current.addSource("la-boundary", {
        type: "geojson",
        data: laBoundary as GeoJSON.FeatureCollection,
      });
      mapRef.current.addSource("jeni", {
        type: "geojson",
        data: jeniZipCodes as GeoJSON.FeatureCollection,
      });

      mapRef.current.addLayer({
        id: "la-boundary",
        type: "fill",
        source: "la-boundary",
        layout: {},
        paint: {
          "fill-opacity": 0.9,
          "fill-color": "#acabaa",
        },
      });
      mapRef.current.addLayer({
        id: "jeni",
        type: "fill",
        source: "jeni",
        layout: {},
        paint: {
          "fill-opacity": 0.9,
          "fill-color": [...generateStyles(selectedIndex)] as StyleFunction,
        },
        // TODO: add before first symbol layer
      });
      setHasLoaded(true);
    });

    mapRef.current.on("click", (e) => {
      const features = mapRef.current?.queryRenderedFeatures(e.point, {
        layers: ["jeni"],
      });
      if (features?.length && features.length > 0) {
        const zipcode = features[0].properties as JeniZip;
        setSelectedZip(zipcode);
      }
    });
  });

  useEffect(() => {
    if (hasLoaded) {
      mapRef.current?.setPaintProperty(
        "jeni",
        "fill-color",
        generateStyles(selectedIndex)
      );
    }
  }, [selectedIndex, hasLoaded]);

  return <div ref={mapContainer} className="absolute w-screen h-screen"></div>;
}
