import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif,black 900;
  }

  body {
    background-color: #FFF;
    scroll-behavior: smooth;

  }
`;

export default GlobalStyle;
