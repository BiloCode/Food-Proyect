import Spinner from "components/atoms/Spinner";
import { credentials } from "config/googleMapsCredentials";
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

const MapCredentials = ({ latitude, length }: MapProps) => {
  return (
    <MapWhitScripts
      latitude={latitude}
      length={length}
      googleMapURL={
        "https://maps.googleapis.com/maps/api/js?v=3.exp" + credentials.mapsKey
      }
      containerElement={<div style={{ height: "100%" }} />}
      mapElement={<div style={{ height: "100%" }} />}
      loadingElement={<Spinner size="big" color="blue" />}
    />
  );
};

export default MapCredentials;
