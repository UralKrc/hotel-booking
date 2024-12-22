import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { getComponent } from "../getComponent";

jest.mock("antd", () => ({
  ...jest.requireActual("antd"),
  Select: ({ onChange, options, value }: any) => (
    <select
      onChange={(e) => onChange(e.target.value)}
      value={value}
      data-testid="mock-select"
    >
      {options?.map((opt: any) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  ),
  Input: Object.assign(() => <input type="text" />, {
    TextArea: () => <textarea />,
  }),
  InputNumber: () => <input type="number" />,
  Switch: () => <div role="switch" aria-checked="false" />,
  TimePicker: () => <input type="text" />,
}));

describe("getComponent", () => {
  const mockHandleChange = jest.fn();

  it("renders Input by default", () => {
    const field = { name: "test", label: "Test" };
    render(getComponent(field, mockHandleChange));

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders TextArea when specified", () => {
    const field = { name: "test", label: "Test", component: "TextArea" };
    render(getComponent(field, mockHandleChange));

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders Select with options", () => {
    const field = {
      name: "test",
      label: "Test",
      component: "Select",
      options: [
        { value: "1", label: "One" },
        { value: "2", label: "Two" },
      ],
    };
    render(getComponent(field, mockHandleChange));

    expect(screen.getByTestId("mock-select")).toBeInTheDocument();
  });

  it("renders Switch component", () => {
    const field = { name: "test", label: "Test", component: "Switch" };
    render(getComponent(field, mockHandleChange));

    expect(screen.getByRole("switch")).toBeInTheDocument();
  });

  it("renders InputNumber component", () => {
    const field = { name: "test", label: "Test", component: "InputNumber" };
    render(getComponent(field, mockHandleChange));

    expect(screen.getByRole("spinbutton")).toBeInTheDocument();
  });

  it("renders TimePicker component", () => {
    const field = { name: "test", label: "Test", component: "TimePicker" };
    render(getComponent(field, mockHandleChange));

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
