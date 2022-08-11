import styled from "styled-components";

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;

  width: 100%;
  margin-top: 4rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    flex-direction: row;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints["4xl"]}) {
    max-width: 50%;
  }
`;
