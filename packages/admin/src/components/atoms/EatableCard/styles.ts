import { BACKGROUND_LIGHT } from "config/styles";
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
`;

export const TextContainer = styled.div`
  padding: 2em;
  box-sizing: border-box;
  background-color: ${BACKGROUND_LIGHT};
`;
