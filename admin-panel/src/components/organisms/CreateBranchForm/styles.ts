import styled from "styled-components";

export const Container = styled.form`
  display: grid;
  grid-template-columns: 420px 700px;
  grid-template-rows: repeat(2, min-content);
  column-gap: 3em;
  row-gap: 3em;
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  column-gap: 0.5em;
`;

export const LeftFormContainer = styled.div`
  display: grid;
  row-gap: 3em;
`;

export const RightFormContainer = styled.div`
  display: grid;
  row-gap: 3em;
`;

export const GroupFormContainer = styled.div`
  display: grid;
  row-gap: 2em;
  grid-auto-rows: min-content;
`;

export const FormControlsContainer = styled.div`
  display: grid;
  row-gap: 1.5em;
`;

export const GeographyContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GoogleMapsTittle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 0.5em;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

export const FormTwoControls = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1em;
`;
