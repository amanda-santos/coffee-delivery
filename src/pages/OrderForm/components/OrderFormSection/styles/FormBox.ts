import styled from "styled-components";

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding: 2rem;

  background-color: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 0.6rem;
`;
