import { ReactElement, ReactNode } from "react";

import {
  FormBox,
  Title,
} from "pages/OrderForm/components/OrderFormSection/styles";

type OrderFormSectionProps = {
  title?: string;
  children: ReactNode;
};

export const OrderFormSection = ({
  title,
  children,
}: OrderFormSectionProps): ReactElement => {
  return (
    <div>
      <Title>{title}</Title>
      <FormBox>{children}</FormBox>
    </div>
  );
};
