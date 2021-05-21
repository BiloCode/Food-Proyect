import { NORMAL_GRAY, NORMAL_GRAY_LIGHT, NORMAL_WHITE } from "config/styles";
import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  border: 1px solid ${NORMAL_GRAY};
  border-radius: 100px;
  cursor: pointer;

  &.uppercase {
    text-transform: uppercase;
  }

  &.white {
    background-color: ${NORMAL_WHITE};
  }

  &:hover {
    background-color: ${NORMAL_GRAY_LIGHT};
  }
`;
