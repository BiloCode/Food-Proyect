import { colors } from "config/colors";
import styled from "styled-components";

export const ReturnMenuContainer = styled.div`
  align-self: center;
`;

export const ReturnMenu = styled.div`
  cursor: pointer;
  width: 100%;
  display: grid;
  grid-template-columns: min-content max-content;
  column-gap: 1em;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const IconContainer = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 100%;
  background-color: ${colors.dark_blue};
  display: flex;
  justify-content: center;
  align-items: center;
`;
