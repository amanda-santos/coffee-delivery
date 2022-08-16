import styled from "styled-components";

export const RemoveButton = styled.button`
  background-color: ${({ theme }) => theme.colors["base-button"]};
  border-radius: 0.6rem;

  border: none;
  padding: 0.8rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${({ theme }) => theme.colors["secondary-base"]};
  }
`;
