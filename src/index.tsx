import * as React from "react";
import { render } from "react-dom";
import { Router } from "router/Router";
import { Theme, Header } from "containers";

render(
  <React.StrictMode>
    <Theme>
      <Router header={<Header />} />
    </Theme>
  </React.StrictMode>,
  document.getElementById("root")
);
