import React from "react";
import { render, screen } from "@testing-library/react";
import UserCard from "./UserCard";

const mockUser = { name: "Anshul", email: "anshul@example.com", role: "admin" };

test("renders user details correctly", () => {
  render(<UserCard user={mockUser} />);
  expect(screen.getByTestId("user-name")).toHaveTextContent("Anshul");
  expect(screen.getByTestId("user-email")).toHaveTextContent("anshul@example.com");
  expect(screen.getByTestId("user-role")).toHaveTextContent("admin");
});

test("renders no-user message when user is null", () => {
  render(<UserCard user={null} />);
  expect(screen.getByTestId("no-user")).toBeInTheDocument();
});

test("renders no-user when user is undefined", () => {
  render(<UserCard />);
  expect(screen.getByTestId("no-user")).toBeInTheDocument();
});

test("applies correct role class", () => {
  render(<UserCard user={mockUser} />);
  expect(screen.getByTestId("user-role")).toHaveClass("role-admin");
});
