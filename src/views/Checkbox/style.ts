import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  align-items: center;
  width: fit-content;

  cursor: pointer;

  outline: none;
  user-select: none;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const Caption = styled.span`
  margin-left: 1.5vh;
  max-width: 40vw;
`;

export const VisbilityHidden = styled.input`
  width: 1px;
  height: 1px;
  clip: rect(0 0 0 0);
  overflow: hidden;
  margin: 0;
  padding: 0;
  appearance: none;

  outline: none;
`;

export const Division = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid ${({ theme }) => theme.colors.light};
  border-radius: 5px;

  position: relative;

  ${VisbilityHidden}:checked + &:after {
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.colors.light};

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ${VisbilityHidden}:focus + & {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.accentLight};
  }
`;
