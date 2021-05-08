import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Open+Sans:wght@300;400;600;700;800&display=swap');

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
