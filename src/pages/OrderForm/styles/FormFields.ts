import styled from "styled-components";

export const FormFields = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1.6rem;
  align-items: flex-start;

  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
