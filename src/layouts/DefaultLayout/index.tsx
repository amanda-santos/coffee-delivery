import { ReactElement } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "components";
import { LayoutContainer, OutletContainer } from "layouts/DefaultLayout/styles";

export const DefaultLayout = (): ReactElement => {
  return (
    <LayoutContainer>
      <Header />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </LayoutContainer>
  );
};
