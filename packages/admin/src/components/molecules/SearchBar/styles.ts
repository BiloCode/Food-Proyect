import styled from "styled-components";

import { BACKGROUND_LIGHT } from "config/styles";

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 65px 1fr;
  overflow: hidden;
  border-radius: 25px;
`;

export const IconContainer = styled.div`
  display: flex;
  background-color: ${BACKGROUND_LIGHT};
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.div`
  width: 100%;

  & > input {
    background-color: #fff;
    padding-left: 0;
    font-size: 0.9em;
    background-color: ${BACKGROUND_LIGHT};
  }
`;
