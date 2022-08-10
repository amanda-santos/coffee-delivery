import { ReactElement } from "react";

import {
  CoffeeCard,
  LandingPageInformation,
} from "pages/LandingPage/components";
import { coffeeData } from "data/coffeeData";

import {
  CoffeesContainer,
  CoffeesGrid,
  LandingPageContainer,
} from "pages/LandingPage/styles";

export const LandingPage = (): ReactElement => {
  return (
    <LandingPageContainer>
      <LandingPageInformation />

      <CoffeesContainer>
        <h3>Our coffees</h3>

        <CoffeesGrid>
          {coffeeData.map((coffee) => (
            <CoffeeCard coffee={coffee} />
          ))}
        </CoffeesGrid>
      </CoffeesContainer>
    </LandingPageContainer>
  );
};
