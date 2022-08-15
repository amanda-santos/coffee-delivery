import { ReactElement } from "react";
import {
  Coins,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from "phosphor-react";

import { Input } from "components";
import { OrderFormSection } from "pages/OrderForm/components/OrderFormSection";

import {
  Container,
  FormFields,
  FormTitle,
  PaymentButton,
  PaymentButtonsContainer,
} from "pages/OrderForm/styles";

export const OrderForm = (): ReactElement => {
  return (
    <Container>
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

      <OrderFormSection title="Complete your order">
        <FormTitle $color="secondary-base">
          <CurrencyDollar size={24} />
          <span>
            <h6>Payment</h6>
            <p>Payment is made on delivery. Choose the way you want to pay</p>
          </span>
        </FormTitle>

        <PaymentButtonsContainer>
          <PaymentButton type="button" $isSelected={false}>
            <CreditCard size={18} />
            Credit card
          </PaymentButton>

          <PaymentButton type="button" $isSelected={false}>
            <Money size={18} />
            Debit card
          </PaymentButton>

          <PaymentButton type="button" $isSelected>
            <Coins size={18} />
            Money
          </PaymentButton>
        </PaymentButtonsContainer>
      </OrderFormSection>

      <OrderFormSection title="Selected coffees">Hi</OrderFormSection>
    </Container>
  );
};
