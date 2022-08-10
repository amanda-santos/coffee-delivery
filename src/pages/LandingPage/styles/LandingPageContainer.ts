import styled from "styled-components";

export const LandingPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding: 9.6rem 16.8rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 2.4rem 7.2rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 2.4rem 3.2rem;
  }
`;
