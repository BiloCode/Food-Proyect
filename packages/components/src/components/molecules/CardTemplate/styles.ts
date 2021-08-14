import styled from "styled-components";

const radius = "10px";

export const MainContainer = styled.div`
  width: 100%;
  border-radius: ${radius};
  background-color: #fff;

  &.aero {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  }
`;

export const BranchOfficeDataContainer = styled.div`
  display: grid;
  row-gap: 1.6em;
  padding: 1.5em;
  box-sizing: border-box;
`;

export const DataContainer = styled.div`
  display: grid;
  row-gap: 1.3em;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 154px;
  border-radius: ${radius} ${radius} 0 0;

  &.big {
    height: 180px;
  }

  & > img {
    filter: brightness(80%);
  }
`;
