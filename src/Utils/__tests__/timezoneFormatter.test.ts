import { formatTimezone } from "../timezoneFormatter";

describe("formatTimezone", () => {
  beforeAll(() => {
    // Mock Date to get consistent results
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2024-01-01T12:00:00Z"));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test("formats timezone correctly", () => {
    const result = formatTimezone("Europe/Amsterdam");
    expect(result).toBe("Amsterdam (13:00)");
  });

  test("handles invalid timezone by returning it unchanged", () => {
    const invalidTimezone = "Invalid/Timezone";
    const result = formatTimezone(invalidTimezone);
    expect(result).toBe(invalidTimezone);
  });

  test("formats timezone with underscore correctly", () => {
    const result = formatTimezone("America/New_York");
    expect(result).toBe("New York (07:00)");
  });

  test("handles empty string", () => {
    const result = formatTimezone("");
    expect(result).toBe("");
  });

  test("handles null or undefined gracefully", () => {
    // @ts-ignore - Testing invalid input
    expect(formatTimezone(null)).toBe(null);
    // @ts-ignore - Testing invalid input
    expect(formatTimezone(undefined)).toBe(undefined);
  });
});
