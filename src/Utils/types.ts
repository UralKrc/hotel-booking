export interface ItemProps {
  title: string;
  label: string;
}

export interface PropertyDetailsProps {
  currency: string;
  rooms: number;
  status: boolean;
  isAvailableForPartnerships: boolean;
}

export interface ContactDetailsProps {
  city: string;
  country: string;
  addressLine1: string;
  postcode: string;
  email: string;
  phoneNumber: string;
  domain: string;
}

export interface CheckInOutDetailsProps {
  checkInTime: string;
  checkOutTime: string;
  timezone: string;
}

export interface BreadcrumbProps {
  title: string;
  icon?: "home" | "edit" | "user";
  href?: string;
}
