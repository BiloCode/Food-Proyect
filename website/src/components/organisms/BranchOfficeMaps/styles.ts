import { colors } from "config/colors";
import { NAVBAR_HEIGHT } from "config/constans";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
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

export const SearchContainer = styled.div`
  align-self: center;
`;

export const ReturnMenuContainer = styled.div`
  align-self: center;
`;

export const ReturnMenu = styled.div`
  cursor: pointer;
  width: 100%;
  display: grid;
  grid-template-columns: min-content max-content;
  column-gap: 1em;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const IconContainer = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 100%;
  background-color: ${colors.dark_blue};
  display: flex;
  justify-content: center;
  align-items: center;
`;
