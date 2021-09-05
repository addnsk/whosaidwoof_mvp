import * as React from "react";

export interface IOutsideLinkProps
  extends React.DetailedHTMLProps<
    React.LinkHTMLAttributes<HTMLLinkElement>,
    HTMLLinkElement
  > {
  caption: string;
}
