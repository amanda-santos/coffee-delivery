import styled from "styled-components";

export const Price = styled.h6`
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 130%;
  color: ${({ theme }) => theme.colors["base-text"]};
`;
