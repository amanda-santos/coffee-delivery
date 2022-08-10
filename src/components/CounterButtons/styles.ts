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
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem;
    color: ${({ theme }) => theme.colors["base-title"]};
  }
`;
