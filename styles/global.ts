import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --purple-900: #120F1A;
    --purple-800: #15121E;
    --purple-700: #211A32;
    --purple-500: #411E8F;
    --purple-300: #B292FF;
    --green-500: #5FB9B0;
    --white: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {    
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background: var(--purple-900);
    height: 100%;
  }

  ul {
    list-style-type: none;
  }

  button, a {
    cursor: pointer;
  }

  button {
    border: none;
    background: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    cursor: pointer;
  }
`;
