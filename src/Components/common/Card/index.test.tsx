import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Card from ".";

describe("Card Component", () => {
  test("renders card with title and content", () => {
    render(<Card title="Test Title">Test Content</Card>);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });
});
