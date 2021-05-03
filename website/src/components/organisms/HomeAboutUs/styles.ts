import styled from "styled-components";
import { HOME_CONTAINER_SIZE } from "config/constans";

export const MainContainer = styled.div`
  width: ${HOME_CONTAINER_SIZE};
  display: grid;
  grid-template-columns: 380px 1fr;
  column-gap: 40px;
  align-items: center;
  padding: 5em 0;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 260px;
  border-radius: 10px;
`;
