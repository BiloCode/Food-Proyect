import styled from "styled-components";

export const ImageContainer = styled.div`
  width: 100%;
  height: 180px;
  position: relative;

  & > img {
    filter: brightness(40%);
  }
`;

export const FloatingContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  box-sizing: border-box;
`;

export const BackIcon = styled.a`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
