import * as React from "react";
import { Typography } from "./style";
import { ITextProps } from "./Text.props";

export const Text: React.FC<ITextProps> = React.memo(
  ({ as = "span", appearance, colorText, caption, ...props }): JSX.Element => {
    return (
      <Typography
        as={as}
        appearance={appearance}
        colorText={colorText}
        caption={caption}
        {...props}
      >
        {caption}
      </Typography>
    );
  }
);
