import { Rule } from "antd/es/form";
import { ReactNode } from "react";

export interface PropertyDetails {
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

export interface Property {
  property: PropertyDetails;
  policies: Policy[];
}

export interface Policy {
  propertyId: string;
  id: string;
  name: string;
  description: string;
  amount: number;
  chargeType: string;
  reference?: string; // Optional, only for cancellation policies
  days?: number; // Optional, only for cancellation policies
  hours?: number; // Optional, only for cancellation policies
}

export interface PropertyState {
  properties: Property[];
  loading: boolean;
  error: string | null;
}

export interface RootState {
  property: PropertyState;
}

export interface ItemProps {
  title: string;
  label: string;
  icon?: ReactNode;
  color?: string;
}

export interface PropertyDetailsProps
  extends Pick<
    PropertyDetails,
    "currency" | "rooms" | "status" | "isAvailableForPartnerships"
  > {}

export interface ContactDetailsProps
  extends Pick<
    PropertyDetails,
    | "city"
    | "country"
    | "addressLine1"
    | "postcode"
    | "email"
    | "phoneNumber"
    | "domain"
  > {}

export interface CheckInOutDetailsProps
  extends Pick<PropertyDetails, "checkInTime" | "checkOutTime" | "timezone"> {}

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
  max?: number;
}

export interface PolicyFormItem {
  label: string;
  value: any;
  color: string;
}

export interface ComponentMap {
  [key: string]: (
    field: FieldConfig,
    handleChange?: (value: string, field: string) => void
  ) => JSX.Element;
}
