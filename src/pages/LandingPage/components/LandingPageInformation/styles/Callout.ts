import styled from "styled-components";

export const Callout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2.4rem;

  h1 {
    font-size: 4.8rem;
    font-family: "Baloo 2", cursive;
    font-weight: 800;
    color: ${({ theme }) => theme.colors["base-title"]};
    line-height: 130%;
  }

  h6 {
    font-size: 2rem;
    font-weight: 500;
    line-height: 130%;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    align-items: center;
    text-align: center;
  }
`;
