import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("renders with default value 0", () => {
  render(<Counter />);
  expect(screen.getByTestId("count-display")).toHaveTextContent("0");
});

test("renders with custom initial value", () => {
  render(<Counter initialValue={10} />);
  expect(screen.getByTestId("count-display")).toHaveTextContent("10");
});

test("increments on click", () => {
  render(<Counter />);
  fireEvent.click(screen.getByTestId("btn-increment"));
  expect(screen.getByTestId("count-display")).toHaveTextContent("1");
});

test("decrements on click", () => {
  render(<Counter initialValue={5} />);
  fireEvent.click(screen.getByTestId("btn-decrement"));
  expect(screen.getByTestId("count-display")).toHaveTextContent("4");
});

test("resets to initial value", () => {
  render(<Counter initialValue={3} />);
  fireEvent.click(screen.getByTestId("btn-increment"));
  fireEvent.click(screen.getByTestId("btn-reset"));
  expect(screen.getByTestId("count-display")).toHaveTextContent("3");
});
