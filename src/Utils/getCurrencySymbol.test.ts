import { getCurrencySymbol } from "./getCurrencySymbol";

describe("getCurrencySymbol", () => {
  test("returns € for EUR", () => {
    expect(getCurrencySymbol("EUR")).toBe("€");
  });

  test("returns $ for USD", () => {
    expect(getCurrencySymbol("USD")).toBe("$");
  });

  test("returns empty string for unknown currency", () => {
    expect(getCurrencySymbol("XYZ")).toBe("");
  });
});
