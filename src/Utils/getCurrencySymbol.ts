export const getCurrencySymbol = (currency: string): string => {
  switch (currency) {
    case "EUR":
      return "€";
    case "USD":
      return "$";
    default:
      return "";
  }
};
