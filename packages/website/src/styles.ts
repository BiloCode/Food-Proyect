import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --font: 'Raleway', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default GlobalStyles;
