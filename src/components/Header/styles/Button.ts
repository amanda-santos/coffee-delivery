import styled from "styled-components";

type ButtonProps = {
  $color: "primary" | "secondary";
};

export const Button = styled.button<ButtonProps>`
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 0.8rem;
  padding: 0.8rem;

  background-color: ${({ $color, theme }) => theme.colors[`${$color}-light`]};
  color: ${({ $color, theme }) => theme.colors[`${$color}-dark`]};

  cursor: pointer;

  transition: all 0.125s ease-in-out;

  &:hover {
    background-color: ${({ $color, theme }) => theme.colors[`${$color}-base`]};
    color: ${({ theme }) => theme.colors["white"]};
  }

  position: relative;
`;
