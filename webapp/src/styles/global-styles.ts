import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  html {
    font-size: 62.5%;
  }

  button {
    cursor: pointer;

    :disabled {
      cursor: default;
    }
  }
`