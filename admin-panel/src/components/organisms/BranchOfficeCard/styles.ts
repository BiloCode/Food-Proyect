import styled from "styled-components";

import { BACKGROUND_LIGHT, BLACK_LIGHT_B, FONT } from "config/styles";

const cardRadius = "10px";

export const MainContainer = styled.div`
  width: 100%;
  border-radius: ${cardRadius};
  background-color: ${BACKGROUND_LIGHT};
`;

export const BranchOfficeDataContainer = styled.div`
  display: grid;
  row-gap: 1.2em;
  padding: 1.5em 2em;
  box-sizing: border-box;
`;

export const DataContainer = styled.div`
  display: grid;
  row-gap: 10px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 180px;
  border-radius: ${cardRadius} ${cardRadius} 0 0;

  & > img {
    filter: brightness(80%);
  }
`;

export const TextContainer = styled.div`
  display: grid;
  row-gap: 4px;
`;

export const Description = styled.p`
  height: 60px;
  font-weight: 300;
  margin: 0;
  text-overflow: ellipsis;
  white-space: normal;
  overflow: hidden;
  color: ${BLACK_LIGHT_B};
  font-family: ${FONT};
  font-size: 0.9em;
`;

export const StarsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
