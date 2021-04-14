import { colors } from "config/colors";
import styled from "styled-components";

export const Container = styled.p`
  font-size: 20px;
  color: ${colors.light_black};
  margin: 0;

  &.white {
    color: #fff;
  }
`;
