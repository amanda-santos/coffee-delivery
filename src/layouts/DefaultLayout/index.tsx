import { ReactElement } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "components";
import { LayoutContainer } from "layouts/DefaultLayout/styles";

export const DefaultLayout = (): ReactElement => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
};
