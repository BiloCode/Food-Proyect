import styled from "styled-components";
import { HOME_CONTAINER_SIZE } from "config/constans";

export const HomeSearch = styled.div`
  width: ${HOME_CONTAINER_SIZE};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8em 0;
`;

export const HomeSearchButtons = styled.div`
  margin-top: 50px;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
`;
