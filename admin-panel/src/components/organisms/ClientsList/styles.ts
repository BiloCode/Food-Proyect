import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 150px 1fr 80px 200px 150px 200px;
  align-items: center;

  & p {
    text-align: center;
  }
`;

export const Tittle = styled.div`
  width: 100%;
`;
