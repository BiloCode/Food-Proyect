import styled from "styled-components";

import { SIDEBAR_WIDTH } from "config/styles";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: ${SIDEBAR_WIDTH} 1fr;
  align-items: flex-start;
`;

export const RightContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
