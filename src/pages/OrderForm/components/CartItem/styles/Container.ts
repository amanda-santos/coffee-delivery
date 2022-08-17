import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;

  width: 100%;

  padding: 2.4rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors["base-button"]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;
