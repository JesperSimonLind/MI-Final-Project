import React from "react";
import { render, screen } from "@testing-library/react";
import { Login } from "./Login";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
describe("Login", () => {
  it("should show HomePage", () => {
    render(<Login />);
    const loginButton = screen.getByRole("button", {
      name: /Sign in with google/i,
    });
    expect(loginButton).toBeInTheDocument();
  });
});
