import { createContext, useContext } from "react";

export type MapCoordsTypes = {
  text: string;
  stars: number;
  tittle: string;
  length: number;
  latitude: number;
};

export type MapContextType = {
  mapCoords?: MapCoordsTypes;
  setMapCoords?(mapCoords: MapCoordsTypes): void;
};

export const MapContext = createContext<MapContextType>({});

export const useMapContext = () => useContext(MapContext);
