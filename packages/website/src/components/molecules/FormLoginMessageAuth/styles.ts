import styled from "styled-components";

import { colors } from "config/colors";

export const BottomMessage = styled.p`
  width: 100%;
  user-select: none;
  text-align: center;
  font-family: var(--font);

  span {
    font-weight: bold;
    cursor: pointer;
    color: ${colors.dark_blue};
  }
`;
