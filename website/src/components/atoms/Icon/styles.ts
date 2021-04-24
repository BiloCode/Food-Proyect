import { colors } from "config/colors";
import styled from "styled-components";

export const Container = styled.span`
  display: inline-block;
  line-height: 0;
  font-size: 22px;

  &.white {
    color: #fff;
  }

  &.black {
    color: ${colors.light_black};
  }

  &.blue {
    color: ${colors.dark_blue};
  }

  &.yellow {
    color: ${colors.normal_yellow};
  }

  &.gray {
    color: ${colors.gray};
  }

  &.small {
    font-size: 18px;
  }

  &.medium {
    font-size: 40px;
  }
`;
