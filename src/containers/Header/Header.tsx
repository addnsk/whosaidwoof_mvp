import * as React from "react";
import { Logo } from "views";
import { Container } from "./style";

export const Header: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Logo />
    </Container>
  );
};
