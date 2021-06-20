import { colors } from "config/colors";
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalMenuContainer = styled.div`
  width: 90%;
  background-color: #fff;
  min-width: 1200px;
  max-width: 1200px;
  padding: 4em 2em;
  border-radius: 10px;
  box-sizing: border-box;
  user-select: none;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${colors.light_gray};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:active {
    background-color: ${colors.super_light_black};
  }
`;

export const LimiterContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  row-gap: 3em;
`;
