import styled from "styled-components";

import { BACKGROUND_LIGHT, BLACK_LIGHT, FONT } from "config/styles";

const cardRadius = "10px";

export const MainContainer = styled.div`
  width: 100%;
  border-radius: ${cardRadius};
  background-color: ${BACKGROUND_LIGHT};
`;

export const BranchOfficeDataContainer = styled.div`
  display: grid;
  row-gap: 1.6em;
  padding: 1.5em 2em;
  box-sizing: border-box;
`;

export const DataContainer = styled.div`
  display: grid;
  row-gap: 1em;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  border-radius: ${cardRadius} ${cardRadius} 0 0;

  & > img {
    filter: brightness(80%);
  }
`;

export const TextContainer = styled.div`
  display: grid;
  row-gap: 8px;
`;

export const Description = styled.p`
  height: 60px;
  font-weight: 400;
  margin: 0;
  text-overflow: ellipsis;
  white-space: normal;
  overflow: hidden;
  color: ${BLACK_LIGHT};
  font-family: ${FONT};
  font-size: 0.95em;
`;

export const StarsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
