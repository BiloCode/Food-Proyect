import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";

type MapProps = {
  latitude: number;
  length: number;
};

const Map = ({ latitude, length }: MapProps) => {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{
        lat: latitude,
        lng: length,
      }}
    />
  );
};

/* lat: -12.008734979054598,
lng: -76.82457079149549, */

export default withScriptjs(withGoogleMap(Map));
