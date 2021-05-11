import { FC, useState } from "react";

import { MapContext, MapCoordsTypes } from "./context";

const MapProvider: FC = ({ children }) => {
  const [mapCoords, setMapCoords] = useState<MapCoordsTypes>({
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
