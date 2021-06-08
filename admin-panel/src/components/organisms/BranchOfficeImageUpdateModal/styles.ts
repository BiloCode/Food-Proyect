import { NORMAL_WHITE } from "config/styles";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export const ModalContainer = styled.div`
  width: 600px;
  background-color: ${NORMAL_WHITE};
  padding: 3em 4em;
  box-sizing: border-box;
  border-radius: 20px;
  display: grid;
  row-gap: 2em;
`;

export const ButtonsContainer = styled.div`
  display: grid;
  row-gap: 0.5em;
`;

export const ImageDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImageName = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 0.5em;
`;
