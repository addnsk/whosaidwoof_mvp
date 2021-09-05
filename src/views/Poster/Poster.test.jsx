import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Theme } from "containers";
import { Poster } from "./Poster";

describe("Poster component", () => {
  it("Poster renders", () => {
    render(
      <Theme>
        <Poster data-testid="poster" />
      </Theme>
    );
    expect(screen.queryByTestId("poster")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByAltText(/собака/i)).toBeInTheDocument();

    expect(screen.queryByTestId("poster")).toMatchSnapshot();
  });
});
