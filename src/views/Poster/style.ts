import styled from "styled-components";

export const Background = styled.section`
  width: 140px;
  height: 140px;
  border-radius: 49px;

  background-color: ${({ theme }) => theme.colors.accentLight};
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.5);

  position: relative;

  & img {
    width: 189px;
    height: 149px;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: -1px;
    left: 0;
  }

  @media (min-height: 650px) {
    transform: scale(1.5);
  }

  @media (min-height: 900px) {
    transform: scale(1.9);
  }
`;
