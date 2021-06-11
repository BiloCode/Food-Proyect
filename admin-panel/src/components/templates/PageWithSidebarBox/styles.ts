import styled from "styled-components";

import { SIDEBAR_WIDTH } from "config/styles";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: ${SIDEBAR_WIDTH} 1fr;
  align-items: flex-start;
`;

export const ChildrenContainer = styled.div`
  width: 100%;
  height: auto;
`;
