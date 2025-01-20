import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import PolicyCardForm from ".";
import { setupMatchMedia } from "../../../../Store/property/utils/setupMatchMedia";
import { Policy } from "../../../../Types/types";
describe("PolicyCard", () => {
  beforeEach(() => {
    setupMatchMedia();
  });

  const mockPolicy: Policy = {
    propertyId: "123",
    id: "456",
    name: "Test Policy",
    amount: 100,
    chargeType: "fixed",
    description: "Test description",
  };

  const mockOnSave = jest.fn();

  const renderPolicyCard = () => {
    render(<PolicyCardForm policy={mockPolicy} onSave={mockOnSave} />);
  };

  it("renders policy details correctly", () => {
    renderPolicyCard();

    const cardTitle = screen.getByText("Test Policy", {
      selector: ".ant-card-head-title",
    });
    expect(cardTitle).toBeInTheDocument();

    const nameTags = screen.getAllByText("Test Policy");
    expect(nameTags[1]).toBeInTheDocument();

    expect(screen.getByText("100€")).toBeInTheDocument();
    expect(screen.getByText("fixed")).toBeInTheDocument();
  });

  it("toggles to edit mode and updates policy", () => {
    renderPolicyCard();

    fireEvent.click(screen.getByRole("button", { name: /edit/i }));

    const amountInput = screen.getByDisplayValue("100");
    expect(amountInput).toBeInTheDocument();

    const amountAddon = screen.getByText("€");
    expect(amountAddon).toBeInTheDocument();

    const chargeTypeSelect = screen.getByRole("combobox");
    expect(chargeTypeSelect).toBeInTheDocument();

    fireEvent.mouseDown(chargeTypeSelect);

    fireEvent.click(screen.getByText("Percentage"));

    const percentageAddon = screen.getByText("%");
    expect(percentageAddon).toBeInTheDocument();

    fireEvent.change(amountInput, { target: { value: "200" } });

    fireEvent.click(screen.getByRole("button", { name: /save/i }));

    expect(mockOnSave).toHaveBeenCalledWith({
      ...mockPolicy,
      amount: 200,
      chargeType: "percentage",
    });
  });
});
