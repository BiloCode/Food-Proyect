import { FC, useMemo, useState } from "react";
import { MapContext } from "./context";

type startType = 0 | 1 | 2 | 3 | 4 | 5;

type MapCoordsContext = {
  latitude: number;
  length: number;
  tittle: string;
  text: string;
  stars: startType;
};

const MapProvider: FC = ({ children }) => {
  const [mapCoords, setMapCoords] = useState<MapCoordsContext>({
    latitude: 0,
    length: 0,
    text: "",
    tittle: "",
    stars: 0,
  });

  return (
    <MapContext.Provider value={{ mapCoords, setMapCoords }}>
      {children}
    </MapContext.Provider>
  );
};

export default MapProvider;
