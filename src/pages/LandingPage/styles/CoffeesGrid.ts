import styled from "styled-components";

export const CoffeesGrid = styled.div`
  margin-top: 8rem;
  display: grid;
  grid-gap: 8rem 4rem;

  grid-template-columns: repeat(1, 1fr);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints["2xl"]}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
