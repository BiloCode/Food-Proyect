import { colors } from "config/colors";
import styled, { keyframes } from "styled-components";

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
  animation: ${animationRotate} 0.4s infinite linear;

  &.small {
    --size: 16px;
    --border-width: 3px;
  }

  &.big {
    --size: 48px;
    --border-width: 6px;
  }

  &.blue {
    border-color: ${colors.dark_blue};
    border-bottom-color: ${colors.super_light_black};
  }

  &.white {
    border-color: #fff;
    border-bottom-color: rgba(255, 255, 255, 0.4);
  }
`;
