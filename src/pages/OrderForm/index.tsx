import { ReactElement } from "react";

import { Container, Form, FormTitle } from "pages/OrderForm/styles";
import { MapPin } from "phosphor-react";

export const OrderForm = (): ReactElement => {
  return (
    <Container>
      <h5>Complete your order</h5>

      <Form>
        <FormTitle>
          <MapPin size={24} />
          <span>
            <h6>Delivery address</h6>
            <p>Inform the address where you want to receive your order</p>
          </span>
        </FormTitle>
      </Form>
    </Container>
  );
};
