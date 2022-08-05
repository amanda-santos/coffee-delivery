import { ReactElement } from "react";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "styles/themes/default";

export const App = (): ReactElement => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Coffee Shop</h1>
    </ThemeProvider>
  );
};
