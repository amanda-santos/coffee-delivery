import { createGlobalStyle } from "styled-components";

import { ThemeType } from "styles/themes/default";

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
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
    font-family: 'Inter', sans-serif;
    line-height: 140%;
    font-size: 1.4rem;
    font-weight: 400;
  }
`;
