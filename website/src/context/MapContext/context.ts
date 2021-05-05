import { createContext, useContext } from "react";

type startType = 0 | 1 | 2 | 3 | 4 | 5;

type MapCoordsTypes = {
  latitude: number;
  length: number;
  tittle: string;
  text: string;
  stars: startType;
};

type MapCoordsContext = {
  mapCoords?: MapCoordsTypes;
  setMapCoords?(mapCoords: MapCoordsTypes): void;
};

export const MapContext = createContext<MapCoordsContext>({});

export const useMapContext = () => useContext(MapContext);
