import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import LoginForm from "../index";

describe("LoginForm Component", () => {
  let idInput: HTMLElement;
  let pwInput: HTMLElement;
  let button: HTMLElement;
  beforeEach(() => {
    render(<LoginForm />);
    idInput = screen.getByPlaceholderText("ID");
    pwInput = screen.getByPlaceholderText("PW");
    button = screen.getByText("로그인");
    jest.spyOn(window, "alert").mockImplementation(() => {});
  });

  it("로그인 성공시 아이디와 성공 알림창과 함께 환영합니다 메세지 렌더링", () => {
    // Arrange
    expect(idInput);
    expect(pwInput);

    const typedId = "rhdxoals";
    const typedPw = "1234";
    // Act
    fireEvent.change(idInput, { target: { value: typedId } });
    fireEvent.change(pwInput, { target: { value: typedPw } });
    fireEvent.click(button);

    // Assert
    expect(window.alert).toBeCalledWith("로그인 성공!");
    expect(screen.getByText(`${typedId}님 환영합니다`));
    expect(() => {
      screen.getByPlaceholderText("ID");
    }).toThrow();
  });

  it("로그인 실패시 실패한 알람창과 인풋 초기화", () => {
    // Arrange
    expect(idInput);
    expect(pwInput);
    const typedId = "noID";
    const typedPw = "2232";

    // Act
    fireEvent.change(idInput, { target: { value: typedId } });
    fireEvent.change(pwInput, { target: { value: typedPw } });
    fireEvent.click(button);

    // Assert
    expect(window.alert).toBeCalledWith("로그인 실패");
    expect(idInput).toHaveValue("");
    expect(pwInput).toHaveValue("");
  });
});
