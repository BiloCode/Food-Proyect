import styled from "styled-components";

import { profileLeftColumnSize } from "config/constans";

export const ColumnContainer = styled.div`
  width: 80%;
  margin: 2em auto;
  display: grid;
  grid-template-columns: ${profileLeftColumnSize}px 1fr;
  column-gap: 4.5em;
`;

export const SpinnerContainer = styled.div`
  width: 100%;
  margin: 4em 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
