import { ReactElement } from "react";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import { IconTextItem } from "components";

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
          <IconTextItem
            text={
              <>
                Delivery at <b>Rua João Daniel Martinelli, 102</b>
                <br />
                Farrapos - Porto Alegre, RS
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
                <b>Credit card</b>
              </>
            }
            icon={<CurrencyDollar />}
            color="primary-dark"
          />
        </OrderInformation>

        <img src={confirmedOrderImg} alt="" />
      </MainContent>
    </Container>
  );
};
