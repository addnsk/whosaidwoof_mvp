import styled, { css } from "styled-components";
import { IButtonProps } from "./Button.props";

const appearanceMapper = (appearance: string) => {
  switch (appearance) {
    case "primary":
      return css`
        width: 185px;
        height: 40px;
        border: none;
        border-radius: 15px;
        background-color: ${({ theme }) => theme.colors.light};
        color: ${({ theme }) => theme.colors.dark};
        &:active {
          background-color: ${({ theme }) => theme.colors.accentLight};
        }
      `;
    case "outline":
      return css`
        width: 185px;
        height: 40px;
        border-radius: 15px;
        border: 1px solid ${({ theme }) => theme.colors.light};
        background-color: transparent;
        &:active {
          border: 1px solid ${({ theme }) => theme.colors.accentLight};

          & * {
            color: ${({ theme }) => theme.colors.accentLight};
          }
        }
      `;
    case "bubble":
      return css`
        width: 44px;
        height: 44px;
        border-radius: 17px;
        border: 1px solid ${({ theme }) => theme.colors.light};
        background-color: transparent;
        &:active {
          border: 1px solid ${({ theme }) => theme.colors.accentLight};

          & * {
            color: ${({ theme }) => theme.colors.accentLight};
          }
        }
      `;
    case "bubbleDark":
      return css`
        width: 44px;
        height: 44px;
        border-radius: 17px;
        border: 1px solid ${({ theme }) => theme.colors.accentDark};
        background-color: transparent;
        color: ${({ theme }) => theme.colors.accentDark};
        &:active {
          border: 1px solid ${({ theme }) => theme.colors.light};

          & * {
            color: ${({ theme }) => theme.colors.light};
          }
        }
      `;
    default:
      return css`
        width: fit-content;
        height: fit-content;
        border: none;
        background-color: ${({ theme }) => theme.colors.transparent};
      `;
  }
};

export const Division = styled.button<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0 8px;
  box-sizing: border-box;
  cursor: pointer;

  outline: none;
  user-select: none;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  ${({ theme }) => theme.typography.buttonText}
  ${({ appearance }) => appearanceMapper(appearance)}

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &:focus {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.accentLight};
  }
`;
