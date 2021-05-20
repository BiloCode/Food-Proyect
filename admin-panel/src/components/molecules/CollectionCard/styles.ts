import styled from "styled-components";

import {
  DARK_BLUE,
  DARK_BLUE_LIGHT,
  FONT,
  NORMAL_RED,
  NORMAL_RED_LIGHT,
  NORMAL_YELLOW,
  NORMAL_YELLOW_LIGHT,
} from "config/styles";

const hPadding = "2em";
const vPadding = "1.4em";

export const MainContainer = styled.div`
  --bg: ${DARK_BLUE};
  --bg-hover: ${DARK_BLUE_LIGHT};

  width: 100%;
  position: relative;
  padding: ${vPadding} ${hPadding};
  box-sizing: border-box;
  background-color: var(--bg);
  border-radius: 10px;
  display: grid;
  row-gap: 12px;
  cursor: pointer;

  &.red {
    --bg: ${NORMAL_RED};
    --bg-hover: ${NORMAL_RED_LIGHT};
  }

  &.yellow {
    --bg: ${NORMAL_YELLOW};
    --bg-hover: ${NORMAL_YELLOW_LIGHT};
  }

  &:hover {
    background-color: var(--bg-hover);
  }
`;

export const SpinnerContainer = styled.div`
  position: absolute;
  top: ${vPadding};
  left: ${hPadding};
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const TextElement = styled.span`
  color: #fff;
  font-family: ${FONT};
  font-weight: bold;
  font-size: 1.2em;
`;
