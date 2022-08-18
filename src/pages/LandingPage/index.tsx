import { ReactElement } from "react";

import {
  CoffeeCard,
  LandingPageInformation,
} from "pages/LandingPage/components";
import { useCartContext } from "contexts/CartProvider";

import {
  CoffeesContainer,
  CoffeesGrid,
  LandingPageContainer,
} from "pages/LandingPage/styles";

export const LandingPage = (): ReactElement => {
  const { addToCart, getCoffeesData } = useCartContext();

  const coffeesData = getCoffeesData();

  return (
    <LandingPageContainer>
      <LandingPageInformation />

      <CoffeesContainer>
        <h3>Our coffees</h3>

        <CoffeesGrid>
          {coffeesData.map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              coffee={coffee}
              onAddToCart={addToCart}
            />
          ))}
        </CoffeesGrid>
      </CoffeesContainer>
    </LandingPageContainer>
  );
};
