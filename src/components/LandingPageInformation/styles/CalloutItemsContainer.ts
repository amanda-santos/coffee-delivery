import styled from "styled-components";

export const CalloutItemsContainer = styled.div`
  margin-top: 3.2rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem 4rem;
  align-items: center;
  justify-items: flex-start;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;
