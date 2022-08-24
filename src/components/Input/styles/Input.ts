import styled, { css } from "styled-components";

type InputProps = {
  $hasError?: boolean;
};

export const Input = styled.input<InputProps>`
  color: ${({ theme }) => theme.colors["base-text"]};
  background-color: ${({ theme }) => theme.colors["base-input"]};
  border: 2px solid
    ${({ theme, $hasError }) =>
      theme.colors[$hasError ? "danger-base" : "base-input"]};
  border-radius: 0.4rem;
  padding: 1.2rem;
  width: 100%;

  ${({ $hasError }) =>
    $hasError &&
    css`
      &:focus {
        outline: none;
        box-shadow: none;
      }
    `}
`;
