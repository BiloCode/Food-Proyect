import {
  FONT,
  NORMAL_BLUE,
  NORMAL_GRAY,
  NORMAL_GRAY_LIGHT,
  NORMAL_WHITE,
} from "config/styles";
import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  border: 1px solid ${NORMAL_GRAY};
  border-radius: 100px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  font-family: ${FONT};
  color: ${NORMAL_GRAY};
  text-transform: uppercase;
  background-color: ${NORMAL_WHITE};
  padding: 5px 0;

  &:hover {
    background-color: ${NORMAL_GRAY_LIGHT};
  }

  &.blue {
    color: ${NORMAL_BLUE};
    border: 1px solid ${NORMAL_BLUE};
  }
`;
