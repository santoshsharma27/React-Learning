/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Application from "./Application";
import React from "react";

describe("Application", () => {
  test("renders", () => {
    render(<Application />);

    /** getByRole */

    const pageHeading = screen.getByRole("heading", {
      //  <h1>Job application form</h1>
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      // <h2>Section 1</h2>
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      // <input type="text" />
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      // <textarea id="bio" />
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox"); // <select id="job-location">
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox"); // <input type="checkbox" />
    expect(termsElement).toBeInTheDocument();

    const submitElement = screen.getByRole("button"); //<button disabled>Submit</button>
    expect(submitElement).toBeInTheDocument();
    expect(submitElement).toBeDisabled();

    /** getByLabelText */

    const nameElement2 = screen.getByLabelText("Name", { selector: "input" });
    expect(nameElement2).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      //<label> I agree to the terms and conditions </label>
      "I agree to the terms and conditions",
    );
    expect(termsElement2).toBeInTheDocument();

    /** getByPlaceholderText */

    const nameElement3 = screen.getByPlaceholderText("Fullname"); // <input  placeholder="Fullname" />
    expect(nameElement3).toBeInTheDocument();

    /** getByText */

    const paragraphElement = screen.getByText("All fields are mandatory"); //<p>All fields are mandatory</p>
    expect(paragraphElement).toBeInTheDocument();

    /** getByDisplayValue */

    const nameElement4 = screen.getByDisplayValue("Santosh"); // <input  value="Santosh" />
    expect(nameElement4).toBeInTheDocument();

    /** getByAltText */

    const imageElement = screen.getByAltText("a person with a laptop"); // <img src="https://via.placeholder.com" alt="a person with a laptop" />
    expect(imageElement).toBeInTheDocument();

    /** getByTitle */

    const closeElement = screen.getByTitle("close"); // <span title="close">X</span>
    expect(closeElement).toBeInTheDocument();

    /** getByTestId */

    const customElement = screen.getByTestId("custom-element"); // <div data-testid="custom-element">Custom HTML element</div>
    expect(customElement).toBeInTheDocument();
  });
});
