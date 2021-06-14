import styled, { keyframes } from "styled-components";

const FadeInAnimation = keyframes`
  from {
    opacity:0;
  }

  to{
    opacity:1;
  }
`;

export const DarkScreenContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
  animation: ${FadeInAnimation} 0.2s linear forwards;
`;
