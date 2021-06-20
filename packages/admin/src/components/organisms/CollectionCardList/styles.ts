import styled from "styled-components";

import { HOME_SECTIONS_ROW_GAP } from "config/styles";

export const MainContainer = styled.div`
  display: grid;
  row-gap: ${HOME_SECTIONS_ROW_GAP};
`;

export const CollectionList = styled.div`
  width: 100%;
  overflow-x: auto;
  display: grid;
  grid-template-columns: repeat(3, 320px);
  column-gap: 10px;
`;
