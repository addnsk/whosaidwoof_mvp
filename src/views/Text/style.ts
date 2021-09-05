import styled from "styled-components";
import { ITextProps } from "./Text.props";

export const Typography = styled.span<ITextProps>`
  display: inline;
  margin: 0;
  padding: 0;
  color: ${({ colorText, theme }) =>
    colorText ? theme.colors[colorText] : "inherit"};
  ${({ appearance, theme }) => appearance && theme.typography[appearance]}
`;
