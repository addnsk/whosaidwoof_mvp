import styled from "styled-components";

export const ItemWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  padding: 12px 0;
  box-sizing: border-box;

  @media (max-width: 300px) {
    & > p {
      width: 20%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
