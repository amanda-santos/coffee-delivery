import styled from "styled-components";

export const OrderInformation = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 3.2rem;

  border: 1px solid ${({ theme }) => theme.colors["base-label"]};
  border-top-left-radius: 0.6rem;
  border-top-right-radius: 3.6rem;
  border-bottom-left-radius: 3.6rem;
  border-bottom-right-radius: 0.6rem;

  padding: 4rem;
`;
