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
import { useBranchOfficeContext } from "context/BranchOfficeContext/context";

type MapProps = {
  latitude: number;
  length: number;
  name: string;
};

const Markers = () => {
  const { branchOffices } = useBranchOfficeContext();

  const [stateMarker, setStateMarker] = useState<boolean>(true);

  const onClickMarker = () => setStateMarker(!stateMarker);

  return (
    <>
      {branchOffices.map((v, i) => {
        return (
          <Marker
            key={i}
            icon={{ url: BurguerIcon }}
            position={{ lat: v.location.latitude, lng: v.location.longitude }}
            title={v.name}
            onClick={() => setStateMarker(!stateMarker)}
          >
            {stateMarker && (
              <InfoWindow
                onCloseClick={onClickMarker}
                options={{ disableAutoPan: true }}
              >
                <Title color="black" size="small">
                  {v.name}
                </Title>
              </InfoWindow>
            )}
          </Marker>
        );
      })}
    </>
  );
};

const Map = ({ latitude, length }: MapProps) => {
  const { branchOffices } = useBranchOfficeContext();

  if (latitude === 0 && length === 0) {
    return (
      <>
        <GoogleMap
          defaultZoom={15}
          center={{
            lat: branchOffices[0]?.location.latitude,
            lng: branchOffices[0]?.location.longitude,
          }}
        >
          <Markers />
        </GoogleMap>
      </>
    );
  }

  return (
    <>
      <GoogleMap
        defaultZoom={15}
        center={{
          lat: latitude,
          lng: length,
        }}
      >
        <Markers />
      </GoogleMap>
    </>
  );
};

const MapWhitScripts = withScriptjs(withGoogleMap(Map));

const MapCredentials = () => {
  const { mapCoords } = useMapContext();

  return (
    <MapWhitScripts
      latitude={mapCoords.latitude}
      length={mapCoords.length}
      name={mapCoords.name}
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
