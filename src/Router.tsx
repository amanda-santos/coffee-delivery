import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "layouts/DefaultLayout";
import { LandingPage } from "pages/LandingPage";

export const Router = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>
    </Routes>
  );
};
