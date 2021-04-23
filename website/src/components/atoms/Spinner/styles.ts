import { colors } from "config/colors";
import styled, { keyframes } from "styled-components";

const animationRotate = keyframes`
  to{ transform: rotate(1turn); }
`;

export const SpinnerElement = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 4px solid ${colors.dark_blue};
  border-bottom-color: ${colors.super_light_black};
  animation: ${animationRotate} 0.6s infinite linear;
`;
