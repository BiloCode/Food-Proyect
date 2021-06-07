import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default globalStyles;
