import { colors } from "config/colors";
import styled from "styled-components";

export const TextProvisional = styled.span`
  color: #fff;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 900;
  font-family: var(--font);
`;

export const Container = styled.li`
  display: grid;
  grid-template-columns: max-content max-content;
  column-gap: 6px;
  align-items: flex-end;
  cursor: pointer;
  user-select: none;

  &:hover {
    ${TextProvisional}, svg {
      color: ${colors.normal_yellow};
    }
  }
`;
