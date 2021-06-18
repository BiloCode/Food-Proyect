import styled from "styled-components";

export const Container = styled.form`
  display: grid;
  grid-template-columns: 420px 1fr;
  column-gap: 3em;
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 0.5em;
`;
