import styled from "styled-components";

export const Callout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2.4rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    align-items: center;
    text-align: center;
  }
`;
