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
import {
  generateBreadcrumbItems,
  generateCheckInOutItems,
  generateContactItems,
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
    test("generates correct header items", () => {
      const items = generateBreadcrumbItems("Test Property");

      expect(items).toEqual([
        { title: "Properties", icon: "home", href: "/" },
        { title: "Property" },
        { title: "Test Property" },
      ]);
    });
  });
});
