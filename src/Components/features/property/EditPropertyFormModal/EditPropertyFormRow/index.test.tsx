import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Form } from "antd";
import { Provider } from "react-redux";
import EditPropertyFormRow from ".";
import { setupMatchMedia } from "../../../../../Store/property/utils/setupMatchMedia";
import store from "../../../../../Store/store";
import { FieldConfig } from "../../../../../Types/types";

describe("EditPropertyFormRow", () => {
  beforeEach(() => {
    setupMatchMedia();
  });

  const mockFields: FieldConfig[] = [
    {
      name: "name",
      label: "Name",
      span: 12,
    },
    {
      name: "description",
      label: "Description",
    },
    {
      name: "country",
      label: "Country",
      span: 12,
    },
  ];

  it("renders form items with correct layout", () => {
    render(
      <Provider store={store}>
        <Form>
          <EditPropertyFormRow fields={mockFields} handleChange={jest.fn()} />
        </Form>
      </Provider>
    );

    mockFields.forEach((field) => {
      const formItem = screen.getByLabelText(field.label);
      expect(formItem).toBeInTheDocument();
    });
  });
});
