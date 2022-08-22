import styled from "styled-components";

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  h5 {
    font-weight: bold;
  }

  p {
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors["primary-dark"]};
    }

    a:hover {
      color: ${({ theme }) => theme.colors["primary-base"]};
    }
  }

  img {
    width: 32rem;
    margin-top: 3.2rem;
  }
`;
