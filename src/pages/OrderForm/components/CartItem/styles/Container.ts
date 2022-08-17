import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 4rem;
  width: inherit;

  padding: 2.4rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors["base-button"]};
`;
