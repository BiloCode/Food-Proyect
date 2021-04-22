import styled from "styled-components";

import { profileLeftColumnSize } from "config/constans";

export const ColumnContainer = styled.div`
  width: 80%;
  margin: 2em auto;
  display: grid;
  grid-template-columns: ${profileLeftColumnSize}px 1fr;
`;
