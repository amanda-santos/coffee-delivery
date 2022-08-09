import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors["primary-base"]};
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: ${({ theme }) => theme.colors["background"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    line-height: 130%;
    font-size: 1.4rem;
    font-weight: 400;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    html {
      font-size: 72.5%;
    }
  }
`;
