import * as React from "react";
import { ThemeProvider } from "styled-components";
import { Body, Fonts } from "./style";
import { sheet } from "./_sheet";

export const Theme: React.FC = ({ children }): JSX.Element => {
  return (
    <ThemeProvider theme={sheet}>
      <Fonts />
      <Body />
      {children}
    </ThemeProvider>
  );
};
