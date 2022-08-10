import styled from "styled-components";

export const Label = styled.span`
  background-color: ${({ theme }) => theme.colors["primary-light"]};
  color: ${({ theme }) => theme.colors["primary-dark"]};

  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;

  padding: 0.2rem 0.8rem;
  border-radius: 10rem;
`;
