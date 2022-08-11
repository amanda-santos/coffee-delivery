import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "layouts/DefaultLayout";
import { ConfirmedOrder, LandingPage, OrderForm } from "pages";

export const Router = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/confirm-your-order" element={<OrderForm />} />
        <Route path="/your-order-was-confirmed" element={<ConfirmedOrder />} />
      </Route>
    </Routes>
  );
};
