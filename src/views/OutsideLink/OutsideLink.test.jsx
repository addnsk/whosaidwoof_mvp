import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Theme } from "containers";
import { OutsideLink } from "./OutsideLink";

describe("OutsideLink component", () => {
  it("OutsideLink renders with full props", () => {
    render(
      <Theme>
        <OutsideLink href="/" caption="Hello" />
      </Theme>
    );
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveStyle({
      color: "#FFFFFF",
    });

    expect(screen.getByText(/hello/i)).toBeInTheDocument();
    expect(screen.getByText(/hello/i).tagName).toEqual("A");

    expect(screen.getByRole("link")).toMatchSnapshot();
  });
});
