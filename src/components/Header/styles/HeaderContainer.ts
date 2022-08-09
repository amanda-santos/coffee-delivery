import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 10.4rem;
  width: 100vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 3.2rem 16rem;

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.2rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 3.2rem 2rem;
  }
`;
