import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;

  background-color: ${({ theme }) => theme.colors["base-button"]};
  border-radius: 0.6rem;

  button {
    background: none;
    border: none;
    padding: 0.8rem;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.colors["secondary-base"]};

    transition: all 0.125s ease-in-out;

    &:focus {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors["secondary-base"]};
    }

    &:hover:enabled {
      background-color: ${({ theme }) => theme.colors["base-hover"]};
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem;
    color: ${({ theme }) => theme.colors["base-title"]};
  }
`;
