import { Rule } from "antd/es/form";

export interface Property {
  id: string;
  addressLine1: string;
  checkInTime: string;
  checkOutTime: string;
  city: string;
  country: string;
  currency: string;
  description: string;
  domain: string;
  email: string | null;
  images: { height: number; id: string; url: string; width: number }[];
  isAvailableForPartnerships: boolean;
  name: string;
  phoneNumber: string | null;
  postcode: string;
  rooms: number;
  starRating: number;
  status: boolean;
  timezone: string;
}

export interface PropertyState {
  properties: Property[];
  property: Property | null;
  loading: boolean;
  error: string | null;
}

export interface RootState {
  property: PropertyState;
}

export interface ItemProps {
  title: string;
  label: string;
}

export interface PropertyDetailsProps
  extends Pick<
    Property,
    "currency" | "rooms" | "status" | "isAvailableForPartnerships"
  > {}

export interface ContactDetailsProps
  extends Pick<
    Property,
    | "city"
    | "country"
    | "addressLine1"
    | "postcode"
    | "email"
    | "phoneNumber"
    | "domain"
  > {}

export interface CheckInOutDetailsProps
  extends Pick<Property, "checkInTime" | "checkOutTime" | "timezone"> {}

export interface BreadcrumbProps {
  title: string;
  icon?: "home" | "edit" | "user";
  href?: string;
}

export interface FieldConfig {
  name: string;
  label: string;
  span?: number;
  rules?: Rule[];
  component?: string;
  options?: { value: string; label: string }[];
}
