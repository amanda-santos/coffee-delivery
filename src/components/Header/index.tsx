import { ReactElement } from "react";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";

import { useCartContext } from "contexts/CartProvider";
import { Button, ButtonBadge, Container } from "components/Header/styles";
import logoImg from "assets/logo.svg";

export const Header = (): ReactElement => {
  const { getCoffeesData } = useCartContext();
  const cartItemsAmount = getCoffeesData(true).reduce(
    (total, item) => total + item.amount,
    0
  );

  const navigate = useNavigate();

  const handleCartClick = (): void => {
    navigate("/confirm-your-order");
  };

  return (
    <Container>
      <Link to="/">
        <img src={logoImg} alt="" />
      </Link>

      <div>
        <Button type="button" aria-label="Ouro Branco, MG" $color="secondary">
          <MapPin size={24} weight="fill" style={{ marginRight: "0.4rem" }} />
          Ouro Branco, MG
        </Button>
        <Button
          type="button"
          aria-label="Cart"
          $color="primary"
          onClick={handleCartClick}
        >
          <ShoppingCart size={24} weight="fill" />
          {cartItemsAmount > 0 && (
            <ButtonBadge $color="primary">{cartItemsAmount}</ButtonBadge>
          )}
        </Button>
      </div>
    </Container>
  );
};
