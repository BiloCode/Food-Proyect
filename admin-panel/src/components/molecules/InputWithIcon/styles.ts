import { NORMAL_WHITE, NORMAL_GRAY, NORMAL_GRAY_LIGHT } from "config/styles";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 65px 1fr;
  overflow: hidden;
  border: 3px solid ${NORMAL_GRAY_LIGHT};
  border-radius: 25px;
`;

export const IconContainer = styled.div`
  background-color: ${NORMAL_WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.div`
  width: 100%;

  & input {
    padding: 0;
    height: 35px;
    background-color: ${NORMAL_WHITE};
  }
`;