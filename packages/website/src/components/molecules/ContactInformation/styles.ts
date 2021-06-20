import { colors } from "config/colors";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 200px;
  margin: 2em 0 4em 0;
  display: grid;
  grid-template-rows: 200px;
  grid-template-columns: 200px 1fr;
  column-gap: 2em;
  background-color: ${colors.light_gray};
  border-radius: 10px;
`;

export const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin: auto;

  & img {
    height: 50%;
  }
`;

export const ContactData = styled.div`
  width: 100%;
  display: grid;
  grid-auto-rows: min-content;
  margin: auto;
  row-gap: 0.5em;
`;

export const Data = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, max-content);
  column-gap: 0.5em;
`;
