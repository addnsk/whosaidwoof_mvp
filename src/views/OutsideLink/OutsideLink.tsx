import * as React from "react";
import { IOutsideLinkProps } from "./OutsideLink.props";
import { Link } from "./style";

export const OutsideLink: React.FC<IOutsideLinkProps> = ({
  href,
  caption,
}): JSX.Element => {
  return (
    <Link href={href} target="_blank">
      {caption}
    </Link>
  );
};
