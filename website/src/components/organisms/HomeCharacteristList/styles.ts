import { colors } from "config/colors";
import { HOME_CONTAINER_SIZE } from "config/constans";
import styled from "styled-components";

export const HomeCharacteristContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${colors.super_light_black};
  padding: 5em 0;
`;

export const CharacteristList = styled.div`
  width: ${HOME_CONTAINER_SIZE};
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(5, max-content);
  column-gap: 4em;
`;
