import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  DollarOutlined,
  EnvironmentOutlined,
  EuroOutlined,
  GlobalOutlined,
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Policy } from "../../Types/types";
import {
  generateBreadcrumbItems,
  generateCheckInOutItems,
  generateContactItems,
  generatePolicyItems,
  generatePropertyInformationItems,
} from "../itemsGenerator";

describe("Items Generator", () => {
  describe("generatePropertyItems", () => {
    const mockData = {
      currency: "",
      rooms: 5,
      status: true,
      isAvailableForPartnerships: true,
    };

    test("generates correct property information items", () => {
      const items = generatePropertyInformationItems(mockData);

      expect(items).toEqual([
        {
          title: "Currency",
          label: "",
          icon: <EuroOutlined />,
          color: "blue",
        },
        {
          title: "Total Rooms",
          label: "5",
          icon: <HomeOutlined />,
          color: "processing",
        },
        {
          title: "Status",
          label: "Available",
          icon: <CheckCircleOutlined />,
          color: "success",
        },
        {
          title: "Partnerships",
          label: "Yes",
          icon: <TeamOutlined />,
          color: "success",
        },
      ]);
    });

    test("handles unavailable status", () => {
      const items = generatePropertyInformationItems({
        ...mockData,
        status: false,
      });
      const statusItem = items.find((item) => item.title === "Status");
      expect(statusItem?.label).toBe("Unavailable");
      expect(statusItem?.color).toBe("warning");
    });

    test("handles partnerships not available", () => {
      const items = generatePropertyInformationItems({
        ...mockData,
        isAvailableForPartnerships: false,
      });
      const partnershipItem = items.find(
        (item) => item.title === "Partnerships"
      );
      expect(partnershipItem?.label).toBe("No");
      expect(partnershipItem?.color).toBe("default");
    });

    test("handles USD currency correctly", () => {
      const usdMockData = {
        ...mockData,
        currency: "USD",
      };
      const items = generatePropertyInformationItems(usdMockData);
      const currencyItem = items.find((item) => item.title === "Currency");
      expect(currencyItem?.icon).toEqual(<DollarOutlined />);
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
        {
          title: "Address",
          label: "123 Test St 12345, Test City, Test Country",
          icon: <EnvironmentOutlined />,
          color: "blue",
        },
        {
          title: "Email",
          label: "test@example.com",
          icon: <MailOutlined />,
          color: "purple",
        },
        {
          title: "Phone",
          label: "123-456-7890",
          icon: <PhoneOutlined />,
          color: "cyan",
        },
        {
          title: "Website",
          label: "test.com",
          icon: <GlobalOutlined />,
          color: "geekblue",
        },
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
    beforeAll(() => {
      // Set a fixed timezone and time for consistent testing
      jest.useFakeTimers();
      jest.setSystemTime(new Date("2024-01-01T12:00:00Z"));
    });

    afterAll(() => {
      jest.useRealTimers();
    });

    const mockCheckInOutData = {
      checkInTime: "2024-01-01T14:00:00Z", // Use full ISO string
      checkOutTime: "2024-01-01T11:00:00Z", // Use full ISO string
      timezone: "UTC",
    };

    test("generates correct check-in/out items", () => {
      const items = generateCheckInOutItems(mockCheckInOutData);

      expect(items).toEqual([
        {
          title: "Check-in Time",
          label: "15:00", // Adjusted for timezone
          icon: <ClockCircleOutlined />,
          color: "green",
        },
        {
          title: "Check-out Time",
          label: "12:00", // Adjusted for timezone
          icon: <ClockCircleOutlined />,
          color: "red",
        },
        {
          title: "Timezone",
          label: "UTC (12:00)",
          icon: <ClockCircleOutlined />,
          color: "blue",
        },
      ]);
    });
  });

  describe("generateBreadcrumbItems", () => {
    it("generates correct header items for property page", () => {
      const items = generateBreadcrumbItems("property", "Test Property", "123");

      expect(items).toEqual([
        { title: "Properties", href: "/" },
        { title: "Property" },
        { title: "Test Property" },
      ]);
    });

    it("generates correct header items for policies page", () => {
      const items = generateBreadcrumbItems("policies", undefined, "123");

      expect(items).toEqual([
        { title: "Properties", href: "/" },
        { title: "Property", href: "/property/123" },
        { title: "Policies" },
      ]);
    });
  });

  describe("generatePolicyItems", () => {
    const mockPolicy: Policy = {
      name: "Test Policy",
      description: "Test description",
      amount: 100,
      chargeType: "fixed",
      reference: "REF123",
      days: 5,
      hours: 12,
      // Add other necessary fields based on your Policy type
    };

    it("generates correct policy items", () => {
      const items = generatePolicyItems(mockPolicy);

      expect(items).toEqual([
        {
          label: "Name",
          value: "Test Policy",
          color: "blue",
        },
        {
          label: "Description",
          value: "Test description",
          color: "purple",
        },
        {
          label: "Amount",
          value: "100",
          color: "green",
        },
        {
          label: "Charge Type",
          value: "fixed",
          color: "orange",
        },
        {
          label: "Reference",
          value: "REF123",
          color: "red",
        },
        {
          label: "Days",
          value: 5,
          color: "cyan",
        },
        {
          label: "Hours",
          value: 12,
          color: "magenta",
        },
      ]);
    });

    it("handles percentage charge type correctly", () => {
      const percentagePolicy = { ...mockPolicy, chargeType: "percentage" };
      const items = generatePolicyItems(percentagePolicy);

      const amountItem = items.find((item) => item.label === "Amount");
      expect(amountItem?.value).toBe("100%");
    });

    it("handles missing reference fields", () => {
      const noReferencePolicy = {
        ...mockPolicy,
        reference: undefined,
        days: undefined,
        hours: undefined,
      };
      const items = generatePolicyItems(noReferencePolicy);

      expect(items).toEqual([
        {
          label: "Name",
          value: "Test Policy",
          color: "blue",
        },
        {
          label: "Description",
          value: "Test description",
          color: "purple",
        },
        {
          label: "Amount",
          value: "100",
          color: "green",
        },
        {
          label: "Charge Type",
          value: "fixed",
          color: "orange",
        },
      ]);
    });
  });
});
