import { ReactElement } from "react";
import {
  Container,
  MainContent,
  OrderInformation,
} from "pages/ConfirmedOrder/styles";

import confirmedOrderImg from "assets/confirmed-order-illustration.svg";

export const ConfirmedOrder = (): ReactElement => {
  return (
    <Container>
      <h3>Yay! Your order is confirmed.</h3>
      <h5>Now you just need to wait and the coffee will come to you soon.</h5>

      <MainContent>
        <OrderInformation>
          <h4>Order Information</h4>
        </OrderInformation>

        <img src={confirmedOrderImg} alt="" />
      </MainContent>
    </Container>
  );
};
