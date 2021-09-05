import styled from "styled-components";

export const PageLayout = styled.main`
  display: grid;
  grid-template-rows: 1fr auto auto;
  width: 100%;
  height: calc(100% - 12vh);

  @media (max-height: 555px) {
    height: calc(100% - 70px);
  }
`;

export const NoticeWrap = styled.article`
  align-self: center;
  justify-self: center;

  text-align: center;

  padding: 5vh;
  box-sizing: border-box;
`;

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vh;

  & > span,
  & > p {
    margin: 0 auto;
    margin-bottom: 3vh;
  }

  & > p {
    max-width: 230px;
  }

  & button:not(:last-child) {
    margin-bottom: 2vh;
  }
`;
