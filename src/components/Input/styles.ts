import styled from "styled-components";

export const Input = styled.input`
  color: ${({ theme }) => theme.colors["base-text"]};
  background-color: ${({ theme }) => theme.colors["base-input"]};
  border: 1px solid ${({ theme }) => theme.colors["base-button"]};
  border-radius: 0.4rem;
  padding: 1.2rem;
  width: 100%;
`;
