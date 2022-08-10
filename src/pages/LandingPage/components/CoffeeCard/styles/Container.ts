import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 25.6rem;
  height: 28rem;

  background-color: ${({ theme }) => theme.colors["base-card"]};

  border-top-left-radius: 0.6rem;
  border-top-right-radius: 3.6rem;
  border-bottom-left-radius: 3.6rem;
  border-bottom-right-radius: 0.6rem;

  padding: 0 2.4rem;

  img {
    margin-top: -8rem;
  }

  p {
    margin: 1.2rem 0 3.2rem 0;
    color: ${({ theme }) => theme.colors["base-label"]};
    text-align: center;
  }
`;
