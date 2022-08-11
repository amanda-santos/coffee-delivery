import styled from "styled-components";

export const FormTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0.8rem;

  h6 {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    margin-bottom: 0.2rem;
  }

  svg {
    color: ${({ theme }) => theme.colors["primary-dark"]};
  }
`;
