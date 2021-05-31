import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.form`
  width: 420px;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
`;

export const FormControlContainer = styled.fieldset`
  border: none;
  padding: 2em 2.5em;
  box-sizing: border-box;
  display: grid;
  row-gap: 2em;
`;

export const FormControls = styled.div`
  display: grid;
  row-gap: 1em;
`;

export const GridButtons = styled.div`
  display: grid;
  row-gap: 5px;
`;
