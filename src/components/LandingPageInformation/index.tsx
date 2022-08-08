import { ReactElement } from "react";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import { CalloutItem } from "components/LandingPageInformation/components/CalloutItem";
import {
  Callout,
  CalloutItemsContainer,
  LandingPageInformationContainer,
} from "components/LandingPageInformation/styles";

import landingPageImage from "assets/landing-page-image.svg";

export const LandingPageInformation = (): ReactElement => {
  return (
    <LandingPageInformationContainer>
      <Callout>
        <h1>Find the perfect coffee for any time of day</h1>
        <h6>
          With Coffee Delivery you get your coffee wherever you are, anytime
        </h6>

        <CalloutItemsContainer>
          <CalloutItem
            text="Simple and secure purchase"
            icon={<ShoppingCart />}
            color="primary-dark"
          />
          <CalloutItem
            text="Packaging keeps the coffee"
            icon={<Package />}
            color="base-text"
          />
          <CalloutItem
            text="Fast and tracked delivery"
            icon={<Timer />}
            color="primary-base"
          />
          <CalloutItem
            text="Coffee arrives fresh to you"
            icon={<Coffee />}
            color="secondary-base"
          />
        </CalloutItemsContainer>
      </Callout>

      <img src={landingPageImage} alt="" />
    </LandingPageInformationContainer>
  );
};
