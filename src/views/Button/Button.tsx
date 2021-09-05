import * as React from "react";
import { IButtonProps } from "./Button.props";
import { Division } from "./style";

export const Button: React.FC<IButtonProps> = React.memo(
  ({ appearance, caption, onClick, disabled, type }): JSX.Element => {
    return (
      <Division
        type={type}
        appearance={appearance}
        caption={caption}
        onClick={onClick}
        disabled={disabled}
      >
        {caption && <span>{caption}</span>}
      </Division>
    );
  }
);
