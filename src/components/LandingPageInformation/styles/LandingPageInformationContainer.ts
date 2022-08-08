import styled from "styled-components";

export const LandingPageInformationContainer = styled.div`
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 9.6rem 16.8rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    flex-direction: column-reverse;
    gap: 3.2rem;
    padding: 2.4rem 7.2rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 2.4rem 3.2rem;
  }
`;
