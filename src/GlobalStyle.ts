import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1 {
    text-align: center;
    margin-top: 20px;
  }

  button {
    cursor: pointer;
    padding: 10px 20px;
    margin: 10px;
  }
`;

export default GlobalStyle;
