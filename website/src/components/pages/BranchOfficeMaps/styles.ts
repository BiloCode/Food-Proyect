import styled from "styled-components";
import { colors } from "config/colors";
import { NAVBAR_HEIGHT } from "config/constans";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: grid;
  grid-template-columns: 430px 1fr;
  box-sizing: border-box;
`;

export const Image = styled.div`
  height: ${NAVBAR_HEIGHT}px;
  background-color: ${colors.dark_blue};
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    height: 60%;
  }
`;

export const InformationContainer = styled.div`
  height: calc(100vh - ${NAVBAR_HEIGHT}px);
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-rows: 135px 1fr 200px;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;
