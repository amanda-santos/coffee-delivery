import { ReactElement, useState } from "react";
import { ShoppingCart } from "phosphor-react";

import { CounterButtons } from "components";
import { formatPrice } from "utils/formatPrice";
import { CartItem, Coffee, StoredCartItem } from "types";

import {
  CartButton,
  Container,
  Footer,
  Label,
  LabelsContainer,
  Price,
  FooterButtons,
} from "pages/LandingPage/components/CoffeeCard/styles";

type CoffeeCardProps = {
  coffee: Coffee;
  onAddToCart: (coffee: StoredCartItem) => void;
};

export const CoffeeCard = ({
  coffee,
  onAddToCart,
}: CoffeeCardProps): ReactElement => {
  const [selectedAmount, setSelectedAmount] = useState(coffee.amount);

  const addToCart = (id: CartItem["id"], amount: CartItem["amount"]): void => {
    const cartItem: StoredCartItem = {
      id,
      amount,
    };

    onAddToCart(cartItem);
  };

  return (
    <Container>
      <img src={coffee.image} alt={coffee.name} />

      <LabelsContainer>
        {coffee.labels.map((label) => (
          <Label key={label}>{label}</Label>
        ))}
      </LabelsContainer>

      <h4>{coffee.name}</h4>
      <p>{coffee.description}</p>

      <Footer>
        <Price>
          <span>$</span>
          <span>{formatPrice(coffee.price)}</span>
        </Price>

        <FooterButtons>
          <CounterButtons
            amount={selectedAmount}
            onChange={(value) => setSelectedAmount(value)}
          />
          <CartButton
            type="button"
            onClick={() => addToCart(coffee.id, selectedAmount)}
            disabled={!selectedAmount}
          >
            <ShoppingCart size={24} weight="fill" />
          </CartButton>
        </FooterButtons>
      </Footer>
    </Container>
  );
};
