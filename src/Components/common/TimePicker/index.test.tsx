import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import TimePicker from ".";

describe("TimePicker", () => {
  const mockOnChange = jest.fn();
  const defaultProps = {
    onChange: mockOnChange,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders with default props", () => {
    render(<TimePicker {...defaultProps} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("renders with fullWidth prop", () => {
    render(<TimePicker {...defaultProps} fullWidth />);
    expect(screen.getByRole("textbox")).toHaveStyle({ width: "100%" });
  });

  test("calls onChange when time is input directly", () => {
    render(<TimePicker {...defaultProps} />);
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "14:30" } });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(mockOnChange).toHaveBeenCalled();
  });

  test("uses correct placeholder", () => {
    render(<TimePicker {...defaultProps} />);
    expect(screen.getByRole("textbox")).toHaveAttribute(
      "placeholder",
      "Select time"
    );
  });
});
