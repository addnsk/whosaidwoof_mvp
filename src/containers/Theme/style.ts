import { createGlobalStyle } from "styled-components";
import { sheet } from "./_sheet";
import "@fontsource/montserrat-alternates";

export const Fonts = createGlobalStyle`
  html, input, button {
    font-family: "Montserrat Alternates", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ${sheet.typography.span}
    color: ${sheet.colors.light}
  }
`;

export const Body = createGlobalStyle`
  html {
    background-color: ${sheet.colors.accentDark};
}
  body {
    margin: 0;
    padding: 0;
}
  #root {
    width: 100%;
    height: 100vh;
    min-height: 568px;
    padding-bottom: 12vh;
    box-sizing: border-box;
    background: ${sheet.gradients.background};
  }
`;
