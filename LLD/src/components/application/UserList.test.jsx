/* eslint-disable no-undef */
import { render, screen, waitFor } from "@testing-library/react";
import UserList from "./UserList";
import React from "react";

// Mock the global fetch
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          { id: 1, name: "John Doe" },
          { id: 2, name: "Jane Smith" },
        ]),
    }),
  );
});

afterEach(() => {
  jest.resetAllMocks(); // clean up mocks between tests
});

test("fetches and displays users", async () => {
  render(<UserList />);

  // Initial loading state
  expect(screen.getByText("Loading...")).toBeInTheDocument();

  // Wait for the data to be loaded
  await waitFor(() =>
    expect(screen.getAllByTestId("user-item")).toHaveLength(2),
  );

  // Check the actual user data
  expect(screen.getByText("John Doe")).toBeInTheDocument();
  expect(screen.getByText("Jane Smith")).toBeInTheDocument();
});
