import { colors } from "config/colors";
import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: space-between;
  padding: 0 4em;
  align-items: center;
  background-color: ${colors.dark_blue};
  box-sizing: border-box;
`;

export const TextContainer = styled.div`
  display: grid;
  row-gap: 0.5em;
`;

export const IconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  column-gap: 1em;
`;
