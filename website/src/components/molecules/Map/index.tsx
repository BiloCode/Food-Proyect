import * as S from "./styles";

import Spinner from "components/atoms/Spinner";
import BurguerIcon from "assets/images/BurguerIcon.png";

import { credentials } from "config/googleMapsCredentials";
import { useMapContext } from "context/MapContext/context";
import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { useState } from "react";
import Title from "components/atoms/Title";

type MapProps = {
  latitude: number;
  length: number;
};

const Map = ({ latitude, length }: MapProps) => {
  const { mapCoords } = useMapContext();

  const [stateMarker, setStateMarker] = useState<boolean>(false);

  const onClickMarker = () => setStateMarker(!stateMarker);

  if (latitude === 0 || length === 0)
    return (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{
          lat: -11.992700403536038,
          lng: -77.05174180025324,
        }}
      ></GoogleMap>
    );
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{
        lat: -11.992700403536038,
        lng: -77.05174180025324,
      }}
      center={{
        lat: latitude,
        lng: length,
      }}
    >
      <Marker
        icon={{ url: BurguerIcon }}
        position={{ lat: latitude, lng: length }}
        title={mapCoords.text}
        onClick={onClickMarker}
      >
        {stateMarker && (
          <InfoWindow onCloseClick={onClickMarker}>
            <Title color="black" size="small">
              {mapCoords.text}
            </Title>
          </InfoWindow>
        )}
      </Marker>
    </GoogleMap>
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
