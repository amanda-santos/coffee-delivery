import styled from "styled-components";

export const TotalPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.2rem;

  margin: 2.4rem 0;

  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  h4 {
    font-family: "Roboto", sans-serif;
  }

  h6 {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors["base-text"]};
  }
`;
