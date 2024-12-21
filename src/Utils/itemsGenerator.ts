import {
  BreadcrumbProps,
  CheckInOutDetailsProps,
  ContactDetailsProps,
  ItemProps,
} from "../Types/types";
import { getCurrencySymbol } from "./getCurrencySymbol";

export const generatePropertyInformationItems = (data: {
  currency: string;
  rooms: number;
  status: boolean;
  isAvailableForPartnerships: boolean;
}): ItemProps[] => {
  return [
    {
      title: "Currency",
      label: getCurrencySymbol(data.currency),
    },
    {
      title: "Total Rooms",
      label: data.rooms.toString(),
    },
    {
      title: "Status",
      label: data.status ? "Available" : "Unavailable",
    },
    {
      title: "Partnerships",
      label: data.isAvailableForPartnerships ? "Yes" : "No",
    },
  ];
};

export const generateContactItems = (
  data: ContactDetailsProps
): ItemProps[] => {
  return [
    {
      title: "Street",
      label: data.addressLine1,
    },
    {
      title: "City",
      label: data.city,
    },
    {
      title: "Country",
      label: data.country,
    },
    {
      title: "Postcode",
      label: data.postcode,
    },
    {
      title: "Email",
      label: data.email || "N/A",
    },
    {
      title: "Phone",
      label: data.phoneNumber || "N/A",
    },
    {
      title: "Website",
      label: data.domain || "N/A",
    },
  ];
};

export const generateCheckInOutItems = (
  data: CheckInOutDetailsProps
): ItemProps[] => {
  return [
    {
      title: "Check-in Time",
      label: data.checkInTime,
    },
    {
      title: "Check-out Time",
      label: data.checkOutTime,
    },
    {
      title: "Timezone",
      label: data.timezone,
    },
  ];
};

export const generateBreadcrumbItems = (
  propertyName: string
): BreadcrumbProps[] => [
  {
    title: "Properties",
    href: "/",
  },
  {
    title: "Property",
  },
  {
    title: propertyName,
  },
];
