import { colors } from "config/colors";
import styled from "styled-components";

export const ContainerNav = styled.nav`
  width: 100%;
  height: 90px;
  position: sticky;
  top: 0;
  background-color: ${colors.dark_blue};
  padding: 0 3.5em;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerOptions = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 250px;
  column-gap: 4em;
`;

export const ListOption = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: max-content max-content;
  column-gap: 2em;
`;
