import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 12vh;

  & > svg {
    fill: ${({ theme }) => theme.colors.light};
  }

  @media (max-height: 555px) {
    height: 70px;
  }
`;
