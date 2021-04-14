import { colors } from "config/colors";
import styled from "styled-components";

export const HomeCharacteristContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${colors.super_light_black};
  padding-top: 70px;
  padding-bottom: 70px;
`;

export const HomeCharacterist = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;
