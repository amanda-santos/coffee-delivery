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
    overflow-x: hidden;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    line-height: 130%;
    font-size: 1.4rem;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, p {
    line-height: 130%;
  }

  h1, h2, h3, h4 {
    font-family: "Baloo 2", cursive;
    font-weight: 800;
    color: ${({ theme }) => theme.colors["base-title"]};
  }

  h1 {
    font-size: 4.8rem;
  }

  h3 {
    font-size: 3.2rem;
  }

  h4 {
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }

  h5, h6 {
    font-weight: 500;
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }

  h5 {
    font-size: 2rem;
  }

  h6 {
    font-size: 1.8rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    html {
      font-size: 72.5%;
    }
  }
`;
