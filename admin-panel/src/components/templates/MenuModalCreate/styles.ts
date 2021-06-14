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
  min-width: 700px;
  padding: 3em;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #fff;
  display: grid;
  row-gap: 3em;
`;

const Spacing = "1em";

export const FormContainer = styled.form`
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
