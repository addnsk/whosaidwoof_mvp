import styled from "styled-components";

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.light};

  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:focus {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.accentLight};
  }
`;
