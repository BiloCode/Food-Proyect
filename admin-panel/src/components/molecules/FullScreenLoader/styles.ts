import { FONT } from "config/styles";
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerElements = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 1.5em;
`;

export const Message = styled.span`
  color: #fff;
  font-family: ${FONT};
  font-size: 17px;
  font-weight: 400;
`;
