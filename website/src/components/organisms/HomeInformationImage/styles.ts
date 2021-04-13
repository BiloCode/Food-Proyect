import styled from "styled-components";

export const MainContainer = styled.div`
  width: 75%;
  display: grid;
  grid-template-columns: 360px 1fr;
  align-items: flex-start; /*** Faltaba indicarle esta linea  */
  padding-top: 70px;
  padding-bottom: 70px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 240px;
`;
