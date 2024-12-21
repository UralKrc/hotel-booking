import { getCurrencySymbol } from "./getCurrencySymbol";
import {
  generateCheckInOutItems,
  generateContactItems,
  generatePropertyHeaderItems,
  generatePropertyInformationItems,
} from "./propertyItemsGenerator";

jest.mock("./getCurrencySymbol", () => ({
  getCurrencySymbol: jest.fn().mockReturnValue("$"),
}));

describe("Property Items Generator", () => {
  describe("generatePropertyInformationItems", () => {
    beforeEach(() => {
      (getCurrencySymbol as jest.Mock).mockReturnValue("$");
    });

    const mockData = {
      currency: "USD",
      rooms: 5,
      status: true,
      isAvailableForPartnerships: true,
    };

    test("generates correct property information items", () => {
      const items = generatePropertyInformationItems(mockData);

      expect(items).toEqual([
        { title: "Currency", label: "$" },
        { title: "Total Rooms", label: "5" },
        { title: "Status", label: "Available" },
        { title: "Partnerships", label: "Yes" },
      ]);
    });

    test("handles unavailable status", () => {
      const items = generatePropertyInformationItems({
        ...mockData,
        status: false,
      });
      expect(items.find((item) => item.title === "Status")?.label).toBe(
        "Unavailable"
      );
    });

    test("handles partnerships not available", () => {
      const items = generatePropertyInformationItems({
        ...mockData,
        isAvailableForPartnerships: false,
      });
      expect(items.find((item) => item.title === "Partnerships")?.label).toBe(
        "No"
      );
    });
  });

  describe("generateContactItems", () => {
    const mockContactData = {
      addressLine1: "123 Test St",
      city: "Test City",
      country: "Test Country",
      postcode: "12345",
      email: "test@example.com",
      phoneNumber: "123-456-7890",
      domain: "test.com",
    };

    test("generates correct contact items", () => {
      const items = generateContactItems(mockContactData);

      expect(items).toEqual([
        { title: "Street", label: "123 Test St" },
        { title: "City", label: "Test City" },
        { title: "Country", label: "Test Country" },
        { title: "Postcode", label: "12345" },
        { title: "Email", label: "test@example.com" },
        { title: "Phone", label: "123-456-7890" },
        { title: "Website", label: "test.com" },
      ]);
    });

    test("handles missing optional fields", () => {
      const items = generateContactItems({
        ...mockContactData,
        email: "",
        phoneNumber: "",
        domain: "",
      });

      expect(items.find((item) => item.title === "Email")?.label).toBe("N/A");
      expect(items.find((item) => item.title === "Phone")?.label).toBe("N/A");
      expect(items.find((item) => item.title === "Website")?.label).toBe("N/A");
    });
  });

  describe("generateCheckInOutItems", () => {
    const mockCheckInOutData = {
      checkInTime: "14:00",
      checkOutTime: "11:00",
      timezone: "UTC",
    };

    test("generates correct check-in/out items", () => {
      const items = generateCheckInOutItems(mockCheckInOutData);

      expect(items).toEqual([
        { title: "Check-in Time", label: "14:00" },
        { title: "Check-out Time", label: "11:00" },
        { title: "Timezone", label: "UTC" },
      ]);
    });
  });

  describe("generatePropertyHeaderItems", () => {
    test("generates correct header items", () => {
      const items = generatePropertyHeaderItems("Test Property");

      expect(items).toEqual([
        { title: "Properties", icon: "home", href: "/" },
        { title: "Property" },
        { title: "Test Property" },
      ]);
    });
  });
});
