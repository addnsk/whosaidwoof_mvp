import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Theme } from "containers";
import { Button } from "./Button";
import userEvent from "@testing-library/user-event";

const onClick = jest.fn();

describe("Button component", () => {
  it("Button renders with full props", () => {
    render(
      <Theme>
        <Button
          type="button"
          appearance="primary"
          caption="fun button"
          onClick={onClick}
        />
      </Theme>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveStyle({
      backgroundColor: "#FFFFFF",
      color: "#2A2F44",
      width: "185px",
    });

    expect(screen.getByText(/fun button/i)).toBeInTheDocument();

    expect(screen.getByRole("button")).toMatchSnapshot();
  });

  it("Button renders with some default props and children", () => {
    render(
      <Theme>
        <Button caption="fun button">Goodbye</Button>
      </Theme>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveStyle({
      backgroundColor: "transparent",
      width: "fit-content",
    });
    expect(screen.getByText(/fun button/i)).toBeInTheDocument();
    expect(screen.queryByText(/goodbye/i)).toBeNull();

    expect(screen.getByRole("button")).toMatchSnapshot();
  });

  it("Button renders without props", () => {
    render(
      <Theme>
        <Button />
      </Theme>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button").firstChild).toBeNull();

    expect(screen.getByRole("button")).toMatchSnapshot();
  });

  it("Button responds to onClick", () => {
    render(
      <Theme>
        <Button
          type="button"
          appearance="primary"
          caption="fun button"
          onClick={onClick}
        />
      </Theme>
    );

    userEvent.click(screen.getByRole("button"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("Button doesn`t respond to onClick if it`s disabled", () => {
    render(
      <Theme>
        <Button
          type="button"
          disabled
          appearance="primary"
          caption="fun button"
          onClick={onClick}
        />
      </Theme>
    );

    userEvent.click(screen.getByRole("button"));

    expect(onClick).toHaveBeenCalledTimes(0);
    expect(screen.getByRole("button")).toHaveStyle({
      opacity: 0.5,
    });
  });
});
