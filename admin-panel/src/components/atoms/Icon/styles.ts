import {
  BLACK_SUPER_LIGHT,
  NORMAL_BLUE,
  NORMAL_GRAY_MEDIUM,
  NORMAL_YELLOW,
} from "config/styles";
import styled from "styled-components";

export const Container = styled.span`
  display: inline-block;
  line-height: 0;
  font-size: 1.4em;
  color: ${BLACK_SUPER_LIGHT};

  &.white {
    color: #fff;
  }

  &.yellow {
    color: ${NORMAL_YELLOW};
  }

  &.gray {
    color: ${NORMAL_GRAY_MEDIUM};
  }

  &.blue {
    color: ${NORMAL_BLUE};
  }

  &.small {
    font-size: 1.2em;
  }

  &.small_medium {
    font-size: 1.5em;
  }

  &.medium {
    font-size: 1.8em;
  }

  &.big {
    font-size: 2.4em;
  }
`;
