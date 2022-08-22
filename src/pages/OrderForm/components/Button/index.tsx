import { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";

import { Button as ButtonComponent } from "pages/OrderForm/components/Button/styles";

type ButtonProps = {
  title: string;
  icon: ReactNode;
  size: "sm" | "md" | "lg";
  isSelected?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  title,
  icon,
  size,
  isSelected = false,
  ...props
}: ButtonProps): ReactElement => {
  return (
    <ButtonComponent
      type="button"
      aria-label={title}
      $isSelected={isSelected}
      $size={size}
      {...props}
    >
      {icon}
      {title}
    </ButtonComponent>
  );
};
