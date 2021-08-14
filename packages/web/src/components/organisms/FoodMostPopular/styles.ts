import { colors } from "config/colors";

import styled from "styled-components";

export const MostPopular = styled.div`
  padding: 4em 0;
  background-color: ${colors.blue};
`;

export const Content = styled.div`
  display: grid;
  row-gap: 3em;
`;

export const HeadContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > button {
    width: 280px;
  }
`;

export const TextContent = styled.div`
  display: grid;
  row-gap: 6px;
`;

export const FoodList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 284px);
  column-gap: 1em;
`;
