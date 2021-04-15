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
  grid-template-columns: repeat(2, max-content);
  column-gap: 8px;
  align-items: flex-end;
  cursor: pointer;
  user-select: none;

  &:hover {
    transform: scale(1.1);
  }
`;
