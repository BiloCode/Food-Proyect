import styled, { keyframes } from "styled-components";

import { DARK_BLUE } from "config/styles";

const animationRotate = keyframes`
  to{ transform: rotate(1turn); }
`;

export const SpinnerElement = styled.div`
  --size: 32px;
  --border-width: 4px;

  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  border: var(--border-width) solid;
  animation: ${animationRotate} 0.5s infinite linear;

  &.small {
    --size: 12px;
    --border-width: 2px;
    animation-duration: 0.6s;
  }

  &.big {
    --size: 48px;
    --border-width: 6px;
  }

  &.blue {
    border-color: rgb(245, 245, 245);
    border-left-color: ${DARK_BLUE};
  }

  &.white {
    border-left-color: #fff;
    border-color: rgba(255, 255, 255, 0.4);
  }
`;
