import { ReactElement } from "react";
import { MapPin, ShoppingCart } from "phosphor-react";

import { HeaderButton, HeaderContainer } from "components/Header/styles";
import logoImg from "assets/logo.svg";

export const Header = (): ReactElement => {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />

      <span>
        <HeaderButton
          type="button"
          aria-label="Ouro Branco, MG"
          $color="secondary"
        >
          <MapPin size={24} weight="fill" style={{ marginRight: "0.4rem" }} />
          Ouro Branco, MG
        </HeaderButton>
        <HeaderButton type="button" aria-label="Cart" $color="primary">
          <ShoppingCart size={24} weight="fill" />
        </HeaderButton>
      </span>
    </HeaderContainer>
  );
};
