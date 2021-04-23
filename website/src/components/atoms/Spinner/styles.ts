import { colors } from "config/colors";
import styled, { keyframes } from "styled-components";

const animationRotate = keyframes`
  to{ transform: rotate(1turn); }
`;

export const SpinnerElement = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 5px solid ${colors.dark_blue};
  border-bottom-color: ${colors.super_light_black};
  animation: ${animationRotate} 0.4s infinite linear;
`;
