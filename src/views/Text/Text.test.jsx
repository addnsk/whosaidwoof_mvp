import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Theme } from "containers";
import { Text } from "./Text";

describe("Text component", () => {
  it("Text renders with full props", () => {
    render(
      <Theme>
        <Text as="h2" caption="Hello" appearance="h3" colorText="neutral" />
      </Theme>
    );
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
    expect(screen.getByText(/hello/i).tagName).toEqual("H2");
    expect(screen.getByText(/hello/i)).toHaveStyle({
      color: "#7D808B",
      fontSize: "20px",
    });

    expect(screen.getByText(/hello/i)).toMatchSnapshot();
  });
  it("Text renders with some default props and children", () => {
    render(
      <Theme>
        <Text caption="Hello">Goodbye</Text>
      </Theme>
    );
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
    expect(screen.getByText(/hello/i).tagName).toEqual("SPAN");
    expect(screen.getByText(/hello/i)).toHaveStyle({
      color: "inherit",
      fontSize: "inherit",
    });
    expect(screen.queryByText(/goodbye/i)).toBeNull();
    expect(screen.getByText(/hello/i)).toMatchSnapshot();
  });

  it("Text renders without props", () => {
    render(<Text data-testid="text" />);
    expect(screen.queryByTestId("text")).toBeInTheDocument();
    expect(screen.queryByTestId("text").textContent).toEqual("");
    expect(screen.queryByTestId("text")).toMatchSnapshot();
  });
});
