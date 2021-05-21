import {
  BLACK,
  NORMAL_WHITE,
  FONT,
  NORMAL_GRAY,
  BLACK_SUPER_LIGHT,
} from "config/styles";
import styled from "styled-components";

export const Container = styled.span`
  margin: 0;
  font-size: 1.1em;
  font-family: ${FONT};
  color: ${BLACK};

  &.uppercase {
    text-transform: uppercase;
  }

  &.white {
    color: ${NORMAL_WHITE};
  }

  &.gray {
    color: ${NORMAL_GRAY};
  }

  &.black_light {
    color: ${BLACK_SUPER_LIGHT};
  }

  &.semi_bold {
    font-weight: 550;
  }

  &.bold {
    font-weight: bold;
  }

  &.right {
    text-align: right;
  }

  &.center {
    text-align: center;
  }

  &.extra_small {
    font-size: 0.7em;
  }

  &.small {
    font-size: 0.95em;
  }

  &.medium {
    font-size: 1.1em;
  }

  &.large {
    font-size: 1.5em;
  }
`;
