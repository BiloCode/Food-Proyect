import styled from "styled-components";

import { DARK_BLUE, SIDEBAR_WIDTH } from "config/styles";

const HeaderHeight = "180px";

export const MainContainer = styled.div`
  width: ${SIDEBAR_WIDTH};
  height: 100vh;
  background-color: ${DARK_BLUE};
  display: grid;
  grid-template-rows: ${HeaderHeight} 1fr;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ListItems = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;
