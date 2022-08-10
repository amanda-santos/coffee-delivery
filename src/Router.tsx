import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "layouts/DefaultLayout";
import { ConfirmedOrder, LandingPage } from "pages";

export const Router = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/confirmed-order" element={<ConfirmedOrder />} />
      </Route>
    </Routes>
  );
};
