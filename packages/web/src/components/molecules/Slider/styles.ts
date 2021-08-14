import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 370px;
  overflow: hidden;
  position: relative;
`;

type TSlider = {
  currentIndex: number;
};

export const SliderImages = styled.div<TSlider>`
  width: 100%;
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.currentIndex * -100}%);
  transition: 0.3s;

  & > img {
    width: 100%;
    flex: none;
    filter: brightness(60%);
  }
`;

export const ArrowsContainer = styled.div`
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

export const Arrow = styled.div`
  cursor: pointer;
`;
