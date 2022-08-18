import styled from "styled-components";

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors["secondary-dark"]};
  color: ${({ theme }) => theme.colors["base-card"]};

  border-radius: 0.6rem;
  border-color: transparent;
  padding: 0.4rem;

  cursor: pointer;

  transition: all 0.125s ease-in-out;

  &:hover:enabled {
    background-color: ${({ theme }) => theme.colors["secondary-base"]};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
