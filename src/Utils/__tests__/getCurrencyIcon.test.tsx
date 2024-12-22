import { DollarOutlined } from "@ant-design/icons";
import { EuroOutlined } from "@ant-design/icons";
import { getCurrencyIcon } from "../getCurrencyIcon";

describe("getCurrencyIcon", () => {
  test("returns EuroOutlined for EUR", () => {
    const icon = getCurrencyIcon("EUR");
    expect(icon).toEqual(<EuroOutlined />);
  });

  test("returns DollarOutlined for USD", () => {
    const icon = getCurrencyIcon("USD");
    expect(icon).toEqual(<DollarOutlined />);
  });

  test("returns EuroOutlined for unknown currency", () => {
    const icon = getCurrencyIcon("XYZ");
    expect(icon).toEqual(<EuroOutlined />);
  });
});
