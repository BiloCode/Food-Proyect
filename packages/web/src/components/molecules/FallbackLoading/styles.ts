import { colors } from "config/colors";
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${colors.dark_blue};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenterContainer = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 1.5em;
`;

export const SVGContainer = styled.div`
  width: 200px;
  height: 70px;
`;
