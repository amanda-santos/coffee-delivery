import { ReactElement } from "react";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import { IconTextItem } from "components";
import { useCartContext } from "contexts/CartProvider";

import {
  Container,
  MainContent,
  OrderInformation,
} from "pages/ConfirmedOrder/styles";

import confirmedOrderImg from "assets/confirmed-order-illustration.svg";

enum PaymentMethod {
  "creditCard" = "Credit card",
  "debitCard" = "Debit card",
  "money" = "Money",
}

export const ConfirmedOrder = (): ReactElement | null => {
  const { getLatestOrder } = useCartContext();
  const order = getLatestOrder();
  const { street, number, neighborhood, city, state } = order?.address || {};

  if (!order) return null;

  return (
    <Container>
      <h3>Yay! Your order is confirmed.</h3>
      <h5>Now you just need to wait and the coffee will come to you soon.</h5>

      <MainContent>
        <OrderInformation>
          <IconTextItem
            text={
              <>
                Delivery at <b>{`${street} street, ${number}`}</b>
                <br />
                {`${neighborhood}, ${city} - ${state}`}
              </>
            }
            icon={<MapPin />}
            color="secondary-base"
          />

          <IconTextItem
            text={
              <>
                Expected delivery
                <br />
                <b>20 min - 30 min</b>
              </>
            }
            icon={<Timer />}
            color="primary-base"
          />

          <IconTextItem
            text={
              <>
                Payment on delivery
                <br />
                <b>{PaymentMethod[order.paymentMethod]}</b>
              </>
            }
            icon={<CurrencyDollar />}
            color="primary-dark"
          />
        </OrderInformation>

        <img
          src={confirmedOrderImg}
          alt="Man driving a purple motorcycle with a box with coffees"
        />
      </MainContent>
    </Container>
  );
};
