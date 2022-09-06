import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("should be render h1 title with 로그인 페이지", async () => {
    expect(screen.getByText("로그인 페이지"));
  });
});
