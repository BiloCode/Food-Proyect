import styled from "styled-components";

export const SucursalSliderContainer = styled.div`
  width: 100%;
  height: 370px;
  overflow: hidden;
  position: relative;
`;

export const SucursalSliderImages = styled.div`
  width: 100%;
  display: flex;
  transition-duration: 1s;
`;

export const Image = styled.div`
  width: 100%;
  flex: none;
`;

export const SucursalSliderArrows = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0 2em;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const SucursalArrow = styled.div`
  cursor: pointer;
`;
