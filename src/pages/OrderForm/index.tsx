import { ReactElement } from "react";

import { Container, Form, FormFields, FormTitle } from "pages/OrderForm/styles";
import { MapPin } from "phosphor-react";
import { Input } from "components";

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

        <FormFields>
          <Input placeholder="CEP" />
          <Input placeholder="Street" />
          <Input placeholder="Number" type="number" />
          <Input placeholder="Complement" />
          <Input placeholder="Neighborhood" />
          <Input placeholder="City" />
          <Input placeholder="State" />
        </FormFields>
      </Form>
    </Container>
  );
};
