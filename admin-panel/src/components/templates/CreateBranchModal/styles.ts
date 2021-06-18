import { NORMAL_GRAY_MEDIUM, NORMAL_WHITE } from "config/styles";
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
  background-color: ${NORMAL_WHITE};
  padding: 3em 4em;
  box-sizing: border-box;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, min-content);
`;

const tittleSpace = 2;

export const TitleContainer = styled.div`
  position: relative;
  padding-bottom: ${tittleSpace}em;
  margin-bottom: ${tittleSpace}em;
  border-bottom: 1px solid ${NORMAL_GRAY_MEDIUM};
`;
