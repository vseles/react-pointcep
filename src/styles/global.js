import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-size: 100%;
    font-family: 'Raleway Regular', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    background: #fff;
  }
`;

export default GlobalStyle;