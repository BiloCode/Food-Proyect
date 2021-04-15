import { colors } from "config/colors";
import styled from "styled-components";

export const ContainerBody = styled.div`
  width: 400px;
  margin: 4em auto;
  display: grid;
  row-gap: 4em;
`;

export const TitleContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  text-align: center;
`;

export const FormContainer = styled.div`
  width: 100%;
`;

export const BottomMessage = styled.p`
  width: 100%;
  user-select: none;
  text-align: center;
  font-family: var(--font);

  span {
    font-weight: bold;
    cursor: pointer;
    color: ${colors.dark_blue};
  }
`;
