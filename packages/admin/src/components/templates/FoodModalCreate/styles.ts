import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 440px;
  display: grid;
  row-gap: 2em;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  padding: 2.5em;
  box-sizing: border-box;
  text-align: center;
`;

export const FormContainer = styled.form`
  display: grid;
  row-gap: 3em;
`;

export const FormControlContainer = styled.fieldset`
  border: none;
  padding: 0;
  display: grid;
  row-gap: 3em;
`;

export const FormControls = styled.div`
  display: grid;
  row-gap: 1em;
`;

export const GridButtons = styled.div`
  display: grid;
  row-gap: 5px;
`;
