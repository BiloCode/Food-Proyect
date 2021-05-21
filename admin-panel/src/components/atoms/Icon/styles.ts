import { NORMAL_GRAY_MEDIUM, NORMAL_YELLOW } from "config/styles";
import styled from "styled-components";

export const Container = styled.span`
  display: inline-block;
  line-height: 0;
  font-size: 1.4em;

  &.white {
    color: #fff;
  }

  &.yellow {
    color: ${NORMAL_YELLOW};
  }

  &.gray {
    color: ${NORMAL_GRAY_MEDIUM};
  }

  &.small {
    font-size: 1.2em;
  }

  &.medium {
    font-size: 1.8em;
  }

  &.big {
    font-size: 2.4em;
  }
`;
