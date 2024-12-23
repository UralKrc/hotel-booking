import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import PropertyHeader from ".";
import { theme } from "../../../../../Theme/theme";
import { PropertyHeaderProps } from "./types";

// Location display helper component
const LocationDisplay = () => {
  const location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
};

describe("PropertyHeader", () => {
  const mockProps: PropertyHeaderProps = {
    starRating: 4,
    name: "Test Property",
    description: "A beautiful property for testing.",
  };

  const renderHeader = () => {
    return render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <PropertyHeader {...mockProps} />
          <LocationDisplay />
        </MemoryRouter>
      </ThemeProvider>
    );
  };

  it("renders property details correctly", () => {
    renderHeader();

    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
  });

  it("navigates to policies when 'View Policies' is clicked", () => {
    renderHeader();

    const viewPoliciesButton = screen.getByText("View Policies");
    fireEvent.click(viewPoliciesButton);

    expect(screen.getByTestId("location-display")).toHaveTextContent(
      "/policies"
    );
  });
});
