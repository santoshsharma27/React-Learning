/* eslint-disable no-undef */
// Mock nanoid to return a consistent ID

import { render, screen } from "@testing-library/react";
import MyComponent from "./MyComponent";
import React from "react";

// Mock nanoid to return a consistent ID
jest.mock("nanoid", () => ({
  nanoid: jest.fn(() => "mocked-id-123"),
}));

test("renders the mocked nanoid value", () => {
  render(<MyComponent />);
  const element = screen.getByTestId("unique-id");
  expect(element).toHaveTextContent("mocked-id-123");
});
