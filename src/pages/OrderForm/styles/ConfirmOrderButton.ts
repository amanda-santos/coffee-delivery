import styled, { css } from "styled-components";

export const ConfirmOrderButton = styled.button`
  background-color: ${({ theme }) => theme.colors["primary-base"]};
  border: none;
  border-radius: 0.6rem;
  width: 100%;
  padding: 1.2rem 0;

  font-size: 1.4rem;
  line-height: 160%;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme.colors["white"]};

  cursor: pointer;
  transition: all 0.125s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors["primary-dark"]};
  }
`;
