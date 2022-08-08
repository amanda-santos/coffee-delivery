import { cloneElement, ReactElement } from "react";

import { CalloutItemContainer } from "components/LandingPageInformation/components/CalloutItem/styles";

export type CalloutItemProps = {
  text: string;
  icon: ReactElement;
  color: "primary-base" | "secondary-base" | "primary-dark" | "base-text";
};

export const CalloutItem = ({
  text,
  icon,
  color,
}: CalloutItemProps): ReactElement => {
  return (
    <CalloutItemContainer $color={color}>
      {cloneElement(icon, { size: 40, weight: "fill" })}
      <p>{text}</p>
    </CalloutItemContainer>
  );
};
