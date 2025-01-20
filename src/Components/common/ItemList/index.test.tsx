import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import ItemList from ".";

describe("ItemList Component", () => {
  const mockItems = [
    { title: "Currency", label: "USD" },
    { title: "Rooms", label: "5" },
  ];

  test("renders list items with titles and labels", () => {
    render(<ItemList items={mockItems} />);

    mockItems.forEach((item) => {
      expect(screen.getByText(`${item.title}:`)).toBeInTheDocument();
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  test("renders vertically when vertical prop is true", () => {
    render(<ItemList items={mockItems} vertical />);

    const flexContainers = screen
      .getAllByRole("generic")
      .filter((element) => element.className.includes("ant-flex"));

    flexContainers.forEach((container) => {
      expect(container).toHaveStyle({ flexDirection: "column" });
    });
  });
});
