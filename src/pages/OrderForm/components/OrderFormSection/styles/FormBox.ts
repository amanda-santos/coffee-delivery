import styled, { css } from "styled-components";

type FormBoxProps = {
  $isSelectedCoffeesBox?: boolean;
};

export const FormBox = styled.div<FormBoxProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;

  padding: 2rem;

  background-color: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 0.6rem;

  ${({ $isSelectedCoffeesBox }) =>
    $isSelectedCoffeesBox &&
    css`
      border-top-left-radius: 0.6rem;
      border-top-right-radius: 3.6rem;
      border-bottom-left-radius: 3.6rem;
      border-bottom-right-radius: 0.6rem;

      align-items: center;

      @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
        max-width: 44.8rem;
      }
    `}

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 4rem;
  }
`;
