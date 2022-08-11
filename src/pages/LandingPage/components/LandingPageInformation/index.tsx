import { ReactElement } from "react";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import { IconTextItem } from "components";

import {
  Callout,
  CalloutItemsContainer,
  Container,
} from "pages/LandingPage/components/LandingPageInformation/styles";

import landingPageImage from "assets/landing-page-image.svg";

export const LandingPageInformation = (): ReactElement => {
  return (
    <Container>
      <Callout>
        <h1>Find the perfect coffee for any time of day</h1>
        <h5>
          With Coffee Delivery you get your coffee wherever you are, anytime
        </h5>

        <CalloutItemsContainer>
          <IconTextItem
            text="Simple and secure purchase"
            icon={<ShoppingCart />}
            color="primary-dark"
          />
          <IconTextItem
            text="Packaging keeps the coffee"
            icon={<Package />}
            color="base-text"
          />
          <IconTextItem
            text="Fast and tracked delivery"
            icon={<Timer />}
            color="primary-base"
          />
          <IconTextItem
            text="Coffee arrives fresh to you"
            icon={<Coffee />}
            color="secondary-base"
          />
        </CalloutItemsContainer>
      </Callout>

      <img src={landingPageImage} alt="" />
    </Container>
  );
};
