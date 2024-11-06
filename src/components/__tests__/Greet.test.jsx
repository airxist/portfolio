import React from "react";
import { render, screen } from "@testing-library/react";
import Greet from "../Greet";

describe("Greet", () => {
  it("should render a button if name is not defined", () => {
    render(<Greet />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
