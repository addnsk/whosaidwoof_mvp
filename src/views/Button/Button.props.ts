import * as React from "react";

type ButtonAppearance = "primary" | "outline" | "bubble" | "bubbleDark";

export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  appearance: ButtonAppearance;
  caption: string;
}
