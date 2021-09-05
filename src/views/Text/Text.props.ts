type TextAs = "h1" | "h2" | "h3" | "h4" | "span" | "p";
type TextAppearance = "h1" | "h2" | "h3" | "h4" | "span" | "p" | "buttonText";
type TextColor = "light" | "dark" | "accentLight" | "accentDark" | "neutral";

export interface ITextProps {
  as?: TextAs;
  appearance: TextAppearance;
  caption: string;
  colorText?: TextColor;
}
