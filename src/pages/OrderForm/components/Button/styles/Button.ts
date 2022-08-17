import styled, { css } from "styled-components";

type ButtonProps = {
  $isSelected: boolean;
  $size: "sm" | "md" | "lg";
};

enum ButtonPadding {
  sm = "0.8rem",
  md = "1.6rem",
  lg = "2.4rem",
}

export const Button = styled.button<ButtonProps>`
  background-color: ${({ theme }) => theme.colors["base-button"]};
  border: none;
  border-radius: 0.6rem;
  padding: ${({ $size }) => ButtonPadding[$size]};
  width: 100%;

  ${({ $size }) =>
    $size === "md" &&
    css`
      min-width: 14.4rem;
    `}

  display: flex;
  align-items: center;
  justify-content: flex-start;
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
