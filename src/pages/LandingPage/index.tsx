import { ReactElement } from "react";

import { Header, LandingPageInformation } from "components";
import { LandingPageContainer } from "pages/LandingPage/styles";

import { coffeeData } from "data/coffeeData";

export const LandingPage = (): ReactElement => {
  return (
    <LandingPageContainer>
      <LandingPageInformation />

      {coffeeData.map((coffee) => (
        <div>
          {coffee.name}
          {coffee.description}
          <img src={coffee.image} alt="" />
        </div>
      ))}
    </LandingPageContainer>
  );
};
