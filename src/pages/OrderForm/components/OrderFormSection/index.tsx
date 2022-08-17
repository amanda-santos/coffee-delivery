import { ReactElement, ReactNode } from "react";

import {
  Container,
  FormBox,
  Title,
} from "pages/OrderForm/components/OrderFormSection/styles";

type OrderFormSectionProps = {
  children: ReactNode;
  title?: string;
  isSelectedCoffeesBox?: boolean;
};

export const OrderFormSection = ({
  title,
  children,
  isSelectedCoffeesBox = false,
}: OrderFormSectionProps): ReactElement => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <FormBox $isSelectedCoffeesBox={isSelectedCoffeesBox}>{children}</FormBox>
    </Container>
  );
};
