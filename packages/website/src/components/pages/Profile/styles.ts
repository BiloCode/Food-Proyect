import styled from "styled-components";

import {
  PROFILE_LEFT_COLUMN_SIZE,
  PROFILE_MARGIN_CONTENT,
} from "config/constans";

export const ColumnContainer = styled.div`
  width: 80%;
  margin: ${PROFILE_MARGIN_CONTENT} auto;
  display: grid;
  grid-template-columns: ${PROFILE_LEFT_COLUMN_SIZE}px 1fr;
  align-items: flex-start;
  column-gap: 4.5em;
`;

export const SpinnerContainer = styled.div`
  width: 100%;
  margin: 4em 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
