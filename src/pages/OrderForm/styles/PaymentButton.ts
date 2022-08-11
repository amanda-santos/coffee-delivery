import styled, { css } from "styled-components";

type PaymentButtonProps = {
  $isSelected: boolean;
};

export const PaymentButton = styled.button<PaymentButtonProps>`
  background-color: ${({ theme }) => theme.colors["base-button"]};
  border: none;
  border-radius: 0.6rem;
  padding: 1.6rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  font-size: 1.2rem;
  line-height: 160%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors["base-text"]};

  svg {
    color: ${({ theme }) => theme.colors["secondary-base"]};
  }

  cursor: pointer;
  transition: all 0.125s ease-in-out;

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors["secondary-base"]};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors["base-hover"]};
  }

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      background-color: ${({ theme }) => theme.colors["secondary-light"]};
      border: 1px solid ${({ theme }) => theme.colors["secondary-base"]};
    `}
`;
