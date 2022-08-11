import styled from "styled-components";

type FormTitleProps = {
  $color: "primary-dark" | "secondary-base";
};

export const FormTitle = styled.div<FormTitleProps>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0.8rem;
  margin-bottom: 3.2rem;

  h6 {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    margin-bottom: 0.2rem;
  }

  svg {
    color: ${({ theme, $color }) => theme.colors[$color]};
  }
`;
