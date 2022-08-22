import { ReactElement } from "react";
import {
  Coins,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from "phosphor-react";
import { Link } from "react-router-dom";

import { Input } from "components";
import { Button, CartItem, OrderFormSection } from "pages/OrderForm/components";
import { useCartContext } from "contexts/CartProvider";

import {
  ConfirmOrderButton,
  Container,
  EmptyState,
  FormFields,
  FormTitle,
  OrderFormSectionGroup,
  PaymentButtonsContainer,
  TotalPriceContainer,
} from "pages/OrderForm/styles";
import { formatPrice } from "utils/formatPrice";

import emptyStateImg from "assets/undraw-coffee-with-friends.svg";

export const OrderForm = (): ReactElement => {
  const DELIVERY_PRICE = 3.5;

  const { getCoffeesData, addToCart } = useCartContext();

  const cartItems = getCoffeesData(true);
  const totalPrice = cartItems.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.amount,
    0
  );

  return (
    <Container>
      <OrderFormSectionGroup>
        <OrderFormSection title="Complete your order">
          <FormTitle $color="primary-dark">
            <MapPin size={24} />
            <span>
              <h6>Delivery address</h6>
              <p>Inform the address where you want to receive your order</p>
            </span>
          </FormTitle>

          <FormFields>
            <Input placeholder="CEP" />
            <Input placeholder="Street" />
            <Input placeholder="Number" type="number" />
            <Input placeholder="Complement" />
            <Input placeholder="Neighborhood" />
            <Input placeholder="City" />
            <Input placeholder="State" />
          </FormFields>
        </OrderFormSection>

        <OrderFormSection>
          <FormTitle $color="secondary-base">
            <CurrencyDollar size={24} />
            <span>
              <h6>Payment</h6>
              <p>Payment is made on delivery. Choose the way you want to pay</p>
            </span>
          </FormTitle>

          <PaymentButtonsContainer>
            <Button
              title="Credit card"
              icon={<CreditCard size={18} />}
              size="md"
            />

            <Button title="Debit card" icon={<Money size={18} />} size="md" />

            <Button
              title="Money"
              icon={<Coins size={18} />}
              size="md"
              isSelected
            />
          </PaymentButtonsContainer>
        </OrderFormSection>
      </OrderFormSectionGroup>

      <OrderFormSection title="Selected coffees" isSelectedCoffeesBox>
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item) => (
              <CartItem key={item.id} cartItem={item} onAddToCart={addToCart} />
            ))}

            <TotalPriceContainer>
              <div>
                <span>Items total</span>
                <h6>{formatPrice(totalPrice)}</h6>
              </div>
              <div>
                <span>Delivery</span>
                <h6>{formatPrice(DELIVERY_PRICE)}</h6>
              </div>
              <div>
                <h4>Total</h4>
                <h4>{formatPrice(totalPrice + DELIVERY_PRICE)}</h4>
              </div>
            </TotalPriceContainer>

            <ConfirmOrderButton type="submit">Confirm order</ConfirmOrderButton>
          </>
        ) : (
          <EmptyState>
            <h5>No coffees selected yet 😞</h5>
            <p>
              Click <Link to="/">here</Link> and let's add some coffees
            </p>
            <img src={emptyStateImg} alt="" />
          </EmptyState>
        )}
      </OrderFormSection>
    </Container>
  );
};
