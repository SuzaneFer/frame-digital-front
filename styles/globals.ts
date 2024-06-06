import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: Montserrat, sans-serif;

    #__next {
      width: 100%;
      height: 100%;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background: none;
    outline: none;
    border: none;
    cursor: pointer;

    > p {
      margin: 0
    }
  }

  p {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
