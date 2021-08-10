import styled from "styled-components";

import {
  BACKGROUND_LIGHT,
  BLACK_LIGHT,
  BLACK_LIGHT_B,
  FONT,
} from "../../../config/styles";

const cardRadius = "10px";

export const MainContainer = styled.div`
  width: 100%;
  border-radius: ${cardRadius};
  background-color: ${BACKGROUND_LIGHT};
`;

export const BranchOfficeDataContainer = styled.div`
  display: grid;
  row-gap: 1.6em;
  padding: 1.5em;
  box-sizing: border-box;
`;

export const DataContainer = styled.div`
  display: grid;
  row-gap: 1.3em;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 154px;
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

export const AsideContainer = styled.aside`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommentsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: flex-start;
  column-gap: 8px;
`;

export const CommentText = styled.span`
  font-family: ${FONT};
  color: ${BLACK_LIGHT_B};
  font-size: 0.85em;
`;
