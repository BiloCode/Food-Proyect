import styled from "styled-components";

type ContainerProps = {
  clientsForPage: number;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: grid;
  grid-template-columns:
    minmax(75px, 90px) minmax(200px, 1fr) minmax(50px, 80px) minmax(
      160px,
      170px
    )
    95px minmax(150px, 170px);
  grid-template-rows: repeat(
    ${({ clientsForPage }) => clientsForPage + 1},
    45px
  );
  column-gap: 0.5em;
  row-gap: 0.5em;
  align-items: center;
`;
