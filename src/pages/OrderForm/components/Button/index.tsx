import { ReactElement, ReactNode } from "react";

import { Button as ButtonComponent } from "pages/OrderForm/components/Button/styles";

type ButtonProps = {
  title: string;
  icon: ReactNode;
  size: "sm" | "md" | "lg";
  isSelected?: boolean;
};

export const Button = ({
  title,
  icon,
  size,
  isSelected = false,
}: ButtonProps): ReactElement => {
  return (
    <ButtonComponent type="button" $isSelected={isSelected} $size={size}>
      {icon}
      {title}
    </ButtonComponent>
  );
};
