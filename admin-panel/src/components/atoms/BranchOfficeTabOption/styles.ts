import { FONT, NORMAL_BLUE, NORMAL_GRAY } from "config/styles";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  border: 0;
  align-items: center;
  text-transform: uppercase;
  font-weight: 1000;
  color: ${NORMAL_GRAY};
  font-family: ${FONT};
  font-size: 0.95em;
  cursor: pointer;

  user-select: none; //HACK NOT SELECTION

  &.active {
    z-index: 100;
    color: ${NORMAL_BLUE};

    &::before {
      content: "";
      width: 3fr;
      position: absolute;
      height: 5px;
      width: 100%;
      bottom: 0;
      background-color: ${NORMAL_BLUE};
    }
  }
`;
