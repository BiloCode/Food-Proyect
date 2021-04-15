import { HomeContentLimiter } from "config/constans";
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 70vh;

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

export const FloatContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BannerFloatContainer = styled.div`
  width: ${HomeContentLimiter};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
