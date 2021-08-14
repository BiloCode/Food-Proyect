import { createContext, useContext } from "react";

export type MapCoordsTypes = {
  name: string;
  stars: number;
  description: string;
  length: number;
  latitude: number;
};

export type MapContextType = {
  mapCoords?: MapCoordsTypes;
  setMapCoords?(mapCoords: MapCoordsTypes): void;
};

export const MapContext = createContext<MapContextType>({});

export const useMapContext = () => useContext(MapContext);
