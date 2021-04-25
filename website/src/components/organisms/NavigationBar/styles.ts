import styled from "styled-components";

import { colors } from "config/colors";
import { navBarHeight } from "config/constans";

export const ContainerNav = styled.nav`
  width: 100%;
  height: ${navBarHeight}px;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: ${colors.dark_blue};
  padding: 0 3.5em;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

type ContainerOptionsType = {
  gridFluid?: boolean;
};

export const ContainerOptions = styled.div<ContainerOptionsType>`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr ${({ gridFluid }) =>
      gridFluid ? "max-content" : "250px"};
  column-gap: ${({ gridFluid }) => (gridFluid ? "6em" : "4em")};
`;

export const ListOption = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, max-content);
  column-gap: 3em;
`;
