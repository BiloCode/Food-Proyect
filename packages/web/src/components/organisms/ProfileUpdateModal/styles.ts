import styled from "styled-components";

export const ContainerModal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.form`
  width: 450px;
  padding: 3em;
  position: relative;
  border-radius: 10px;
  background-color: #fff;
  display: grid;
  row-gap: 3em;
  box-sizing: border-box;
`;

export const InputContainer = styled.div`
  display: grid;
  row-gap: 1.5em;
`;

export const ButtonContainer = styled.div`
  display: grid;
  row-gap: 6px;
`;

export const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;
