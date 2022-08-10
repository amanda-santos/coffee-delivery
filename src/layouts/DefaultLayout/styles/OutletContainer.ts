import styled from "styled-components";

export const OutletContainer = styled.main`
  padding: 9.6rem 16.8rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 2.4rem 7.2rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 2.4rem 3.2rem;
  }
`;
