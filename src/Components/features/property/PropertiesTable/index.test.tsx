import { configureStore } from "@reduxjs/toolkit";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter, useLocation } from "react-router-dom";
import PropertiesTable from ".";
import propertyReducer from "../../../../Store/property/slice";
import { mockProperties } from "../../../../Store/property/utils/mockData";
import { setupMatchMedia } from "../../../../Store/property/utils/setupMatchMedia";

// Mock Ant Design Table
jest.mock("antd", () => {
  const antd = jest.requireActual("antd");
  return {
    ...antd,
    Table: ({ dataSource, columns }: any) => (
      <div data-testid="mock-table">
        <div data-testid="table-header">
          {columns.map((column: any, index: number) => (
            <div key={index} data-testid="table-header-cell">
              {column.title}
            </div>
          ))}
        </div>
        {dataSource.map((item: any) => (
          <div key={item.property.id} data-testid="table-row">
            {columns.map((column: any, index: number) => (
              <div key={index} data-testid="table-cell">
                {column.render
                  ? column.render(item[column.dataIndex], item)
                  : item[column.dataIndex]}
              </div>
            ))}
          </div>
        ))}
      </div>
    ),
  };
});

// Location display helper component
const LocationDisplay = () => {
  const location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
};

describe("PropertiesTable", () => {
  beforeAll(() => {
    setupMatchMedia();
  });

  const store = configureStore({
    reducer: {
      property: propertyReducer,
    },
  });

  const renderTable = () => {
    return render(
      <Provider store={store}>
        <MemoryRouter>
          <PropertiesTable properties={mockProperties} />
          <LocationDisplay />
        </MemoryRouter>
      </Provider>
    );
  };

  it("renders action buttons for each row", () => {
    renderTable();

    const viewButtons = screen.getAllByText("View");
    expect(viewButtons).toHaveLength(mockProperties.length);
  });

  it("navigates to property details when View is clicked", () => {
    renderTable();

    const viewButtons = screen.getAllByText("View");
    fireEvent.click(viewButtons[0]);

    expect(screen.getByTestId("location-display")).toHaveTextContent(
      `/property/${mockProperties[0].property.id}`
    );
  });

  it("renders table with correct columns", () => {
    renderTable();

    expect(screen.getByText("Id")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Actions")).toBeInTheDocument();
  });
});
