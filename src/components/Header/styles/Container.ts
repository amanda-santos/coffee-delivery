import styled from "styled-components";

export const Container = styled.header`
  height: 10.4rem;
  width: 100vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 3.2rem 2rem;

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.2rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 3.2rem 8rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 3.2rem 16rem;
  }
`;
