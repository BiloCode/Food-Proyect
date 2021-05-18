import * as S from "./styles";

import Spinner from "components/atoms/Spinner";

import { credentials } from "config/googleMapsCredentials";
import { useMapContext } from "context/MapContext/context";
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";

type MapProps = {
  latitude: number;
  length: number;
};

const Map = ({ latitude, length }: MapProps) => {
  if (latitude === 0 || length === 0)
    return (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{
          lat: -11.992700403536038,
          lng: -77.05174180025324,
        }}
      />
    );
  return (
    <GoogleMap
      defaultZoom={15}
      center={{
        lat: latitude,
        lng: length,
      }}
    />
  );
};

const MapWhitScripts = withScriptjs(withGoogleMap(Map));

const MapCredentials = () => {
  const { mapCoords } = useMapContext();

  return (
    <MapWhitScripts
      latitude={mapCoords.latitude}
      length={mapCoords.length}
      googleMapURL={
        "https://maps.googleapis.com/maps/api/js?v=3.exp&key=" + credentials.key
      }
      containerElement={<S.Container />}
      mapElement={<S.ContainerMap />}
      loadingElement={
        <S.SpinnerContainer>
          <Spinner size="big" color="blue" />
        </S.SpinnerContainer>
      }
    />
  );
};

export default MapCredentials;
