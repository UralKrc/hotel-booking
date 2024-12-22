import { DollarOutlined } from "@ant-design/icons";

import { EuroOutlined } from "@ant-design/icons";

export const getCurrencyIcon = (currency: string) => {
  switch (currency) {
    case "EUR":
      return <EuroOutlined />;
    case "USD":
      return <DollarOutlined />;
    default:
      return <EuroOutlined />; // Default icon
  }
};
