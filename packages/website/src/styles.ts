import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --font: 'Noto Sans', sans-serif;
    --extra-font: 'Open Sans', sans-serif;
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
