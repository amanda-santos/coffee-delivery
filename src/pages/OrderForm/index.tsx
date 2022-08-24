import { ReactElement, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Coins,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { Input } from "components";
import { Button, CartItem, OrderFormSection } from "pages/OrderForm/components";
import { useCartContext } from "contexts/CartProvider";
import { formatPrice } from "utils/formatPrice";

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

import emptyStateImg from "assets/undraw-coffee-with-friends.svg";

const addressFormValidationSchema = zod.object({
  cep: zod
    .string()
    .max(8, "Please inform a valid CEP")
    .min(8, "Please inform a valid CEP"),
  street: zod.string().min(3, "Please inform a valid street name"),
  number: zod
    .number({ invalid_type_error: "Please inform a valid number" })
    .min(0, "Please inform a valid number"),
  complement: zod.string(),
  neighborhood: zod.string().min(3, "Please inform a valid neighborhood"),
  city: zod.string().min(3, "Please inform a valid city"),
  state: zod.string().min(2, "Please inform a valid state"),
});

type AddressFormData = zod.infer<typeof addressFormValidationSchema>;

type PaymentMethod = "creditCard" | "debitCard" | "money";

export const OrderForm = (): ReactElement => {
  const navigate = useNavigate();

  const DELIVERY_PRICE = 3.5;
  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("creditCard");

  const newOrderForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
  });
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = newOrderForm;

  const { getCoffeesData, addToCart, createOrder } = useCartContext();
  const cartItems = getCoffeesData(true);
  const totalPrice = cartItems.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.amount,
    0
  );

  console.log(errors);

  const handleCreateNewOrder = (addressData: AddressFormData): void => {
    createOrder({
      id: Math.floor(Math.random() * 1000000),
      items: cartItems,
      totalPrice: totalPrice + DELIVERY_PRICE,
      deliveryPrice: DELIVERY_PRICE,
      paymentMethod,
      address: addressData,
    });

    navigate("/your-order-is-confirmed");
  };

  return (
    <Container onSubmit={handleSubmit(handleCreateNewOrder)}>
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
            <Input
              type="text"
              placeholder="CEP"
              error={errors.cep}
              {...register("cep")}
            />
            <Input
              type="text"
              placeholder="Street"
              error={errors.street}
              {...register("street")}
            />
            <Input
              type="number"
              placeholder="Number"
              error={errors.number}
              {...register("number", { valueAsNumber: true })}
            />
            <Input
              type="text"
              placeholder="Complement"
              error={errors.complement}
              {...register("complement")}
            />
            <Input
              type="text"
              placeholder="Neighborhood"
              error={errors.neighborhood}
              {...register("neighborhood")}
            />
            <Input
              type="text"
              placeholder="City"
              error={errors.city}
              {...register("city")}
            />
            <Input
              type="text"
              placeholder="State"
              error={errors.state}
              {...register("state")}
            />
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
              onClick={() => setPaymentMethod("creditCard")}
              isSelected={paymentMethod === "creditCard"}
            />

            <Button
              title="Debit card"
              icon={<Money size={18} />}
              size="md"
              onClick={() => setPaymentMethod("debitCard")}
              isSelected={paymentMethod === "debitCard"}
            />

            <Button
              title="Money"
              icon={<Coins size={18} />}
              size="md"
              onClick={() => setPaymentMethod("money")}
              isSelected={paymentMethod === "money"}
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
            <img
              src={emptyStateImg}
              alt="Three people drinking coffee together"
            />
          </EmptyState>
        )}
      </OrderFormSection>
    </Container>
  );
};
