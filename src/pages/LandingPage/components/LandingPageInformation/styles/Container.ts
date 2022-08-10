import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    flex-direction: column-reverse;
    gap: 3.2rem;
  }
`;
