import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from ".";

describe("Button Component", () => {
  test("renders button with correct text", () => {
    render(<Button text="Click me" />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  test("clicking the button calls the event handler once", () => {
    const mockHandler = jest.fn();
    render(<Button onClick={mockHandler} text="Click me" />);

    const button = screen.getByTestId("button");
    fireEvent.click(button);

    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  test("renders button with icon when provided", () => {
    const TestIcon = () => <span data-testid="test-icon">icon</span>;
    render(<Button text="Click me" icon={<TestIcon />} />);

    expect(screen.getByTestId("test-icon")).toBeInTheDocument();
  });

  test("applies margin when withMargin prop is true", () => {
    render(<Button text="Click me" withMargin />);
    const button = screen.getByTestId("button");

    expect(button).toHaveStyle("margin: 1rem 0"); // Adjust based on your actual styling
  });

  test("renders different button types with correct Ant Design classes", () => {
    const { rerender } = render(<Button text="Click me" type="primary" />);
    expect(screen.getByTestId("button")).toHaveClass("ant-btn-primary");

    rerender(<Button text="Click me" type="default" />);
    expect(screen.getByTestId("button")).toHaveClass("ant-btn");

    rerender(<Button text="Click me" type="dashed" />);
    expect(screen.getByTestId("button")).toHaveClass("ant-btn-dashed");

    rerender(<Button text="Click me" type="link" />);
    expect(screen.getByTestId("button")).toHaveClass("ant-btn-link");

    rerender(<Button text="Click me" type="text" />);
    expect(screen.getByTestId("button")).toHaveClass("ant-btn-text");
  });

  test("renders button with different shapes with correct Ant Design classes", () => {
    const { rerender } = render(<Button text="Click me" shape="circle" />);
    expect(screen.getByTestId("button")).toHaveClass("ant-btn-circle");

    rerender(<Button text="Click me" shape="round" />);
    expect(screen.getByTestId("button")).toHaveClass("ant-btn-round");
  });

  test("combines type and shape classes correctly", () => {
    render(<Button text="Click me" type="primary" shape="round" />);
    const button = screen.getByTestId("button");

    expect(button).toHaveClass("ant-btn-primary");
    expect(button).toHaveClass("ant-btn-round");
  });
});
