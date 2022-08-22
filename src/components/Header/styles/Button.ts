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

  span {
    position: absolute;
    top: -1.2rem;
    right: -1.2rem;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ $color, theme }) => theme.colors[`${$color}-dark`]};
    color: ${({ theme }) => theme.colors["white"]};
    font-weight: bold;
  }
`;
