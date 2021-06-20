import { FONT } from "config/styles";
import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .swal2-container * {
    font-family: ${FONT};
  }
`;

export default globalStyles;
