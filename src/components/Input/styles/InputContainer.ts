import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.8rem;

  span {
    color: ${({ theme }) => theme.colors["danger-base"]};
  }
`;
