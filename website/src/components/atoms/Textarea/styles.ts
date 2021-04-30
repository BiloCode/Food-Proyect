import styled from "styled-components";

export const CustomTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
  background-color: inherit;
  font-family: var(--font);
  font-size: 1em;
  padding: 0;

  &::-webkit-scrollbar {
    display: none;
  }
`;
