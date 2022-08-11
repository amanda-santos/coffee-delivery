import { cloneElement, ReactElement, ReactNode } from "react";

import { IconTextItemContainer } from "components/IconTextItem/styles";

export type IconTextItemProps = {
  text: ReactNode;
  icon: ReactElement;
  color: "primary-base" | "secondary-base" | "primary-dark" | "base-text";
};

export const IconTextItem = ({
  text,
  icon,
  color,
}: IconTextItemProps): ReactElement => {
  return (
    <IconTextItemContainer $color={color}>
      {cloneElement(icon, { size: 40, weight: "fill" })}
      <p>{text}</p>
    </IconTextItemContainer>
  );
};
