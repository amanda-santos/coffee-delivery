import { ReactElement } from "react";

import { Header, LandingPageInformation } from "components";
import { LandingPageContainer } from "pages/LandingPage/styles";

export const LandingPage = (): ReactElement => {
  return (
    <LandingPageContainer>
      <LandingPageInformation />
    </LandingPageContainer>
  );
};
