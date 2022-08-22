import { ReactElement, useEffect, useState } from "react";
import { Trash } from "phosphor-react";

import { CounterButtons } from "components";
import { CartItem as CartItemType, StoredCartItem } from "types";
import { formatPrice } from "utils/formatPrice";
import { Button } from "pages/OrderForm/components/Button";

import {
  ActionButtons,
  Container,
  MainContent,
  Price,
  TitleButtonsContainer,
} from "pages/OrderForm/components/CartItem/styles";

type CartItemProps = {
  cartItem: CartItemType;
  onAddToCart: (coffee: StoredCartItem) => void;
};

export const CartItem = ({
  cartItem,
  onAddToCart,
}: CartItemProps): ReactElement => {
  const { image, name, price, amount } = cartItem;

  const [selectedAmount, setSelectedAmount] = useState(amount);

  const addToCart = (
    id: CartItemType["id"],
    amount: CartItemType["amount"]
  ): void => {
    const cartItem: StoredCartItem = {
      id,
      amount,
    };

    onAddToCart(cartItem);
  };

  const handleRemoveItem = (): void => {
    addToCart(cartItem.id, 0);
  };

  useEffect(() => {
    addToCart(cartItem.id, selectedAmount);
  }, [cartItem.id, selectedAmount]);

  return (
    <Container>
      <MainContent>
        <img src={image} alt={name} />

        <TitleButtonsContainer>
          <h6>{name}</h6>
          <ActionButtons>
            <CounterButtons
              amount={selectedAmount}
              onChange={(value) => setSelectedAmount(value)}
            />
            <Button
              type="button"
              icon={<Trash size={18} />}
              title="Remove"
              size="sm"
              onClick={handleRemoveItem}
            />
          </ActionButtons>
        </TitleButtonsContainer>
      </MainContent>

      <Price>${formatPrice(price)}</Price>
    </Container>
  );
};
