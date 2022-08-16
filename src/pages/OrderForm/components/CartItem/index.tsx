import { ReactElement } from "react";

import { CounterButtons } from "components";
import { formatPrice } from "utils/formatPrice";

import {
  ActionButtons,
  Container,
  MainContent,
  Price,
  RemoveButton,
  TitleButtonsContainer,
} from "pages/OrderForm/components/CartItem/styles";
import { CartItem as CartItemType } from "types";
import { Trash } from "phosphor-react";
import { Button } from "../Button";

type CartItemProps = {
  cartItem: CartItemType;
};

export const CartItem = ({ cartItem }: CartItemProps): ReactElement => {
  const { image, name, price, quantity, onRemove } = cartItem;

  return (
    <Container>
      <MainContent>
        <img src={image} alt={name} />

        <TitleButtonsContainer>
          <h6>{name}</h6>
          <ActionButtons>
            <CounterButtons />
            <Button icon={<Trash size={18} />} title="Remove" size="sm" />
          </ActionButtons>
        </TitleButtonsContainer>
      </MainContent>

      <Price>${formatPrice(price)}</Price>
    </Container>
  );
};
