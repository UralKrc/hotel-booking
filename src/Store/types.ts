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
