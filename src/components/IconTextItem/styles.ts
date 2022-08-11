import styled from "styled-components";

import { IconTextItemProps } from "components/IconTextItem";

export type IconTextItemContainerProps = {
  $color: IconTextItemProps["color"];
};

export const IconTextItemContainer = styled.span<IconTextItemContainerProps>`
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
