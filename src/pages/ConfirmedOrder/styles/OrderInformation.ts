import styled from "styled-components";

export const OrderInformation = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 3.2rem;

  background: linear-gradient(
        ${({ theme }) => theme.colors["background"]},
        ${({ theme }) => theme.colors["background"]}
      )
      padding-box,
    linear-gradient(
        to right,
        ${({ theme }) => theme.colors["primary-base"]},
        ${({ theme }) => theme.colors["secondary-base"]}
      )
      border-box;

  border: 2px solid transparent;
  border-top-left-radius: 0.6rem;
  border-top-right-radius: 3.6rem;
  border-bottom-left-radius: 3.6rem;
  border-bottom-right-radius: 0.6rem;

  padding: 4rem;
`;
