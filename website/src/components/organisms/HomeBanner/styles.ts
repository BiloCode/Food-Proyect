import { HOME_CONTAINER_SIZE } from "config/constans";
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  position: relative;
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
  width: ${HOME_CONTAINER_SIZE};
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
