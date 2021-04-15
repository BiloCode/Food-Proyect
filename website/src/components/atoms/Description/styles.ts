import { colors } from "config/colors";
import styled from "styled-components";

export const Container = styled.p`
  margin: 0;
  font-size: 1.1em;
  font-weight: 400;
  font-family: var(--font);
  line-height: 1.4em;
  color: ${colors.light_black};

  &.white {
    color: #fff;
  }
`;
