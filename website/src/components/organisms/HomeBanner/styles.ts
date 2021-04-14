import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 60vh;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
  }
`;
