import React from "react";
import { render, screen } from "@testing-library/react";
import { UploadImage } from "./UploadImage";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
describe("UploadImage", () => {
  it("should show UploadImage", () => {
    render(
      <BrowserRouter>
        <UploadImage />
      </BrowserRouter>
    );
  });

  it("should give error if form is empty", () => {
    render(
      <BrowserRouter>
        <UploadImage />
      </BrowserRouter>
    );
    const uploadButton = screen.getByRole("button", {
      name: /Upload/i,
    });
    userEvent.click(uploadButton);
    const errorMessage = screen.getByTestId("errorText");
    expect(errorMessage).toBeInTheDocument();
  });
});
