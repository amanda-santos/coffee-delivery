import styled from "styled-components";

import { CalloutItemProps } from "components/LandingPageInformation/components/CalloutItem";

export type CalloutItemContainerProps = {
  $color: CalloutItemProps["color"];
};

export const CalloutItemContainer = styled.span<CalloutItemContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  font-size: 1.6rem;

  svg {
    background-color: ${({ $color, theme }) => theme.colors[$color]};
    color: ${({ theme }) => theme.colors["white"]};

    padding: 0.6rem;

    border-radius: 100%;
  }
`;
