import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap');

  :root {
    --font: 'Raleway', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
