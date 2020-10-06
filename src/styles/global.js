import { createGlobalStyle } from 'styled-components';
import { Colors } from './constants';

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

  html, body, #__next {
    width: 100%;
    height: 100%;
    background: #fff;
  }

  button, label, a {
    opacity: 1;
    transition: all 150ms ease-in;
    &:hover {
      opacity: .8;
    }
  }

  .swal-button {
    background-color: ${ Colors.SUB_COLOR } !important;
  }
`;

export default GlobalStyle;