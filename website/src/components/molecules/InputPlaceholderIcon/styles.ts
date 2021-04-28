import { colors } from "config/colors";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 50px 1fr;
  overflow: hidden;
  border-radius: 10px;
`;

export const IconContainer = styled.div`
  background-color: ${colors.super_light_black};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.div`
  width: 100%;

  & input {
    padding-left: 0;
    border-radius: 0;
  }
`;
