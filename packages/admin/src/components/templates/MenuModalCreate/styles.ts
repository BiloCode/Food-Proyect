import { FONT, NORMAL_BLUE } from "config/styles";
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 70%;
  max-width: 1200px;
  min-width: 800px;
  padding: 3em 4em;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #fff;
  display: grid;
  row-gap: 3em;
`;

const Spacing = "1em";

export const FormContainer = styled.form`
  display: grid;
  row-gap: 3em;
`;

export const FormInputsContainer = styled.div`
  display: grid;
  row-gap: 1.5em;
`;

export const FormControlText = styled.fieldset`
  border: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: ${Spacing};
  padding: 0;
`;

export const PriceMessageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  padding: 0 1em;
`;

export const PriceMessage = styled.div`
  font-family: ${FONT};
  font-size: 14px;
  font-weight: 600;

  & > span {
    font-weight: 800;
    color: ${NORMAL_BLUE};
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 280px);
  column-gap: 6px;
`;
