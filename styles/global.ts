import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --black-900: #0A080F;
    
    --purple-900: #120F1A;
    --purple-800: #15121E;
    --purple-700: #211A32;
    --purple-500: #411E8F;
    --purple-300: #B292FF;
    --green-500: #5FB9B0;
    --white: #ffffff;

    --purple-light-glow: conic-gradient(
      from 180deg at 50% 50%,
      #1E092E 0deg,
      #1E092E 55deg,
      #1E092E 120deg,
      #1E092E 160deg,
      transparent 360deg
    );

    --purple-dark-glow: conic-gradient(
      from 180deg at 50% 50%,
      #1A0338 0deg,
      #1A0338 55deg,
      #1A0338 120deg,
      #1A0338 160deg,
      transparent 360deg
    );
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
    background: var(--black-900);
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
`
