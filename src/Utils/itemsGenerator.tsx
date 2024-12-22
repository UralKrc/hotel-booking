import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import {
  CheckInOutDetailsProps,
  ContactDetailsProps,
  ItemProps,
  PropertyDetailsProps,
} from "../Types/types";
import { getCurrencyIcon } from "./getCurrencyIcon";
import { formatTimezone } from "./timezoneFormatter";

// Generates a list of property information items for display
export const generatePropertyInformationItems = (
  data: PropertyDetailsProps
): ItemProps[] => [
  {
    title: "Currency",
    label: data.currency,
    icon: getCurrencyIcon(data.currency),
    color: "blue",
  },
  {
    title: "Total Rooms",
    label: data.rooms.toString(),
    icon: <HomeOutlined />,
    color: "processing",
  },
  {
    title: "Status",
    label: data.status ? "Available" : "Unavailable",
    icon: <CheckCircleOutlined />,
    color: data.status ? "success" : "warning",
  },
  {
    title: "Partnerships",
    label: data.isAvailableForPartnerships ? "Yes" : "No",
    icon: <TeamOutlined />,
    color: data.isAvailableForPartnerships ? "success" : "default",
  },
];

// Generates a list of contact information items for display
export const generateContactItems = (
  data: ContactDetailsProps
): ItemProps[] => [
  {
    title: "Address",
    label: `${data.addressLine1} ${data.postcode}, ${data.city}, ${data.country}`,
    icon: <EnvironmentOutlined />,
    color: "blue",
  },
  {
    title: "Email",
    label: data.email || "N/A",
    icon: <MailOutlined />,
    color: "purple",
  },
  {
    title: "Phone",
    label: data.phoneNumber || "N/A",
    icon: <PhoneOutlined />,
    color: "cyan",
  },
  {
    title: "Website",
    label: data.domain || "N/A",
    icon: <GlobalOutlined />,
    color: "geekblue",
  },
];

// Generates a list of check-in and check-out items for display
export const generateCheckInOutItems = (
  data: CheckInOutDetailsProps
): ItemProps[] => [
  {
    title: "Check-in Time",
    label: dayjs(data.checkInTime).format("HH:mm"),
    icon: <ClockCircleOutlined />,
    color: "green",
  },
  {
    title: "Check-out Time",
    label: dayjs(data.checkOutTime).format("HH:mm"),
    icon: <ClockCircleOutlined />,
    color: "red",
  },
  {
    title: "Timezone",
    label: formatTimezone(data.timezone),
    icon: <ClockCircleOutlined />,
    color: "blue",
  },
];

// Generates breadcrumb items for navigation
export const generateBreadcrumbItems = (propertyName: string) => [
  { title: "Properties", icon: "home", href: "/" },
  { title: "Property" },
  { title: propertyName },
];
