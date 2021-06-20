import styled from "styled-components";
import { colors } from "config/colors";

export const DropdownListElement = styled.li`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 8px;
  align-items: flex-end;
  padding: 0.8em 1em;
  cursor: pointer;
  font-size: 0.9em;
  font-family: var(--font);

  &:hover {
    background-color: ${colors.super_light_black};
  }
`;
