import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h3 {
    color: ${({ theme }) => theme.colors["primary-dark"]};
  }
`;
