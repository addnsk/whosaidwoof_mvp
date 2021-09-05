import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Theme } from "containers";
import { Checkbox } from "./Checkbox";
import userEvent from "@testing-library/user-event";

const onChange = jest.fn();

describe("Checkbox component", () => {
  it("Checkbox  renders with full props", () => {
    render(
      <Theme>
        <Checkbox
          checked={false}
          caption={() => <span>Hello</span>}
          onChange={onChange}
        />
      </Theme>
    );
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toHaveStyle({
      appearance: "none",
    });

    expect(screen.getByText(/hello/i)).toBeInTheDocument();
    expect(screen.getByText(/hello/i).tagName).toEqual("SPAN");

    expect(screen.getByRole("checkbox")).toMatchSnapshot();
  });

  it("Checkbox renders with some default props and children", () => {
    render(
      <Theme>
        <Checkbox caption={() => <span>Hello</span>}>Goodbye</Checkbox>
      </Theme>
    );
    expect(screen.getByRole("checkbox")).toBeInTheDocument();

    expect(screen.getByText(/hello/i)).toBeInTheDocument();
    expect(screen.queryByText(/goodbye/i)).toBeNull();

    expect(screen.getByRole("checkbox")).toMatchSnapshot();
  });

  it("Checkbox renders without props", () => {
    render(
      <Theme>
        <Checkbox />
      </Theme>
    );
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByRole("checkbox").firstChild).toBeNull();

    expect(screen.getByRole("checkbox")).toMatchSnapshot();
  });

  it("Checkbox responds to onClick", () => {
    render(
      <Theme>
        <Checkbox
          checked={false}
          caption={() => <span>Hello</span>}
          onChange={onChange}
        />
      </Theme>
    );

    userEvent.click(screen.getByRole("checkbox"));
    userEvent.click(screen.getByText(/hello/i));

    expect(onChange).toHaveBeenCalledTimes(2);
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });
});
