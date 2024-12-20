import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import Modal from ".";

describe("Modal Component", () => {
  const mockOnCancel = jest.fn();
  const mockOnOk = jest.fn();
  const defaultProps = {
    title: "Test Modal",
    open: true,
    onCancel: mockOnCancel,
    onOk: mockOnOk,
  };

  test("renders modal with title and content", () => {
    render(
      <Modal {...defaultProps}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  test("calls onCancel when cancel button is clicked", () => {
    render(
      <Modal {...defaultProps}>
        <div>Modal Content</div>
      </Modal>
    );

    fireEvent.click(screen.getByRole("button", { name: /cancel/i }));
    expect(mockOnCancel).toHaveBeenCalled();
  });

  test("calls onOk when ok button is clicked", () => {
    render(
      <Modal {...defaultProps}>
        <div>Modal Content</div>
      </Modal>
    );

    fireEvent.click(screen.getByRole("button", { name: /ok/i }));
    expect(mockOnOk).toHaveBeenCalled();
  });
});
