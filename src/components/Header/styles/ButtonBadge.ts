import styled from "styled-components";

type ButtonBadgeProps = {
  $color: "primary" | "secondary";
};

export const ButtonBadge = styled.span<ButtonBadgeProps>`
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
`;
