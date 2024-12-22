export const formatTimezone = (timezone: string) => {
  try {
    const city = timezone.split("/").pop()?.replace("_", " ");
    const time = new Date().toLocaleTimeString("en-US", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    return `${city} (${time})`;
  } catch (e) {
    return timezone;
  }
};
