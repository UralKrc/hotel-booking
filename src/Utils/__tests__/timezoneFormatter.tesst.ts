import { formatTimezone } from "../timezoneFormatter";

describe("formatTimezone", () => {
  // Save original timezone
  const originalTimeZone = process.env.TZ;

  beforeAll(() => {
    // Set a fixed timezone for consistent testing
    process.env.TZ = "UTC";
    // Mock Date to get consistent results
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2024-01-01T12:00:00Z"));
  });

  afterAll(() => {
    // Restore original timezone and time
    process.env.TZ = originalTimeZone;
    jest.useRealTimers();
  });

  test("formats timezone correctly", () => {
    const result = formatTimezone("Europe/Amsterdam");
    expect(result).toBe("Amsterdam (01:00 PM)");
  });

  test("handles invalid timezone by returning it unchanged", () => {
    const invalidTimezone = "Invalid/Timezone";
    const result = formatTimezone(invalidTimezone);
    expect(result).toBe(invalidTimezone);
  });

  test("formats timezone with underscore correctly", () => {
    const result = formatTimezone("America/New_York");
    expect(result).toBe("New York (07:00 AM)");
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
