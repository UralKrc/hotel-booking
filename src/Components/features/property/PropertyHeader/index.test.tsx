import "@testing-library/jest-dom";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import PropertyHeader from ".";
import { mockProperties } from "../../../../Store/property/utils/mockData";
import { setupMatchMedia } from "../../../../Store/property/utils/setupMatchMedia";
import store from "../../../../Store/store";
import { theme } from "../../../../Theme/theme";

const mockSetIsEditing = jest.fn();

describe("PropertyHeader", () => {
  beforeAll(() => {
    setupMatchMedia();
  });

  it("renders property details correctly", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <PropertyHeader
            property={mockProperties[0]}
            isEditing={false}
            setIsEditing={mockSetIsEditing}
          />
        </ThemeProvider>
      </Provider>
    );

    // Check title specifically
    expect(
      screen.getByRole("heading", { name: mockProperties[0].name })
    ).toBeInTheDocument();
    expect(screen.getByText(mockProperties[0].description)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /edit property/i })
    ).toBeInTheDocument();
  });

  it("shows edit modal when edit button is clicked", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <PropertyHeader
            property={mockProperties[0]}
            isEditing={false}
            setIsEditing={mockSetIsEditing}
          />
        </ThemeProvider>
      </Provider>
    );

    const editButton = screen.getByRole("button", { name: /edit property/i });
    fireEvent.click(editButton);

    expect(mockSetIsEditing).toHaveBeenCalledWith(true);
  });

  it("renders star rating correctly", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <PropertyHeader
            property={mockProperties[0]}
            isEditing={false}
            setIsEditing={mockSetIsEditing}
          />
        </ThemeProvider>
      </Provider>
    );

    const ratingContainer = screen.getByRole("radiogroup");
    expect(ratingContainer).toBeInTheDocument();

    const checkedStars = screen.getAllByRole("radio", { checked: true });
    expect(checkedStars).toHaveLength(mockProperties[0].starRating);
  });

  it("renders breadcrumb navigation", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <PropertyHeader
            property={mockProperties[0]}
            isEditing={false}
            setIsEditing={mockSetIsEditing}
          />
        </ThemeProvider>
      </Provider>
    );

    const breadcrumbLink = screen.getByRole("link", { name: "Properties" });
    expect(breadcrumbLink).toBeInTheDocument();
    expect(breadcrumbLink).toHaveAttribute("href", "/");

    const breadcrumb = screen.getByRole("navigation");
    const breadcrumbItems = within(breadcrumb).getAllByRole("listitem");
    expect(breadcrumbItems).toHaveLength(3); // Properties / Property / Property Name
  });
});
