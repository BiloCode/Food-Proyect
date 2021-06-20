import {
  FONT,
  NORMAL_BLUE,
  NORMAL_BLUE_LIGHT,
  NORMAL_YELLOW,
} from "config/styles";
import styled from "styled-components";

export const Container = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: ${NORMAL_BLUE};
  font-family: ${FONT};
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  margin-right: 0.5em;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: ${NORMAL_BLUE_LIGHT};
  }

  &.active {
    background-color: ${NORMAL_YELLOW};
    color: ${NORMAL_BLUE};
  }
`;
