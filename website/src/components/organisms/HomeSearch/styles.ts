import styled from "styled-components";
import { HomeContentLimiter } from "config/constans";

export const HomeSearch = styled.div`
  width: ${HomeContentLimiter};
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
