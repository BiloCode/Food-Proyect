import { homeContentLimiter } from "config/constans";
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  position: relative;
`;

type ImageContainerProps = {
  backgroundUrl: string;
};

export const ImageContainer = styled.div<ImageContainerProps>`
  width: 100%;
  height: 70vh;
  background-image: url(${({ backgroundUrl }) => backgroundUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;
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
  width: ${homeContentLimiter};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FormLoginContainer = styled.div`
  width: 400px;
  border-radius: 20px;
  padding: 3.5em 2.5em;
  box-sizing: border-box;
  background-color: #fff;
  flex: none;
`;
