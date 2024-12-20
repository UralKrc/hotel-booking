export enum PropertyActionTypes {
  GET_PROPERTIES = "[PROPERTIES] GET_PROPERTIES",
  GET_PROPERTIES_SUCCESS = "[PROPERTIES] GET_PROPERTIES_SUCCESS",
  GET_PROPERTIES_ERROR = "[PROPERTIES] GET_PROPERTIES_ERROR",

  FETCH_PROPERTY_BY_ID = "[PROPERTY] FETCH_PROPERTY_BY_ID",
  FETCH_PROPERTY_BY_ID_SUCCESS = "[PROPERTY] FETCH_PROPERTY_BY_ID_SUCCESS",
  FETCH_PROPERTY_BY_ID_ERROR = "[PROPERTY] FETCH_PROPERTY_BY_ID_ERROR",

  REMOVE_PROPERTY = "[PROPERTY] REMOVE_PROPERTY",
  REMOVE_PROPERTY_SUCCESS = "[PROPERTY] REMOVE_PROPERTY_SUCCESS",
  REMOVE_PROPERTY_ERROR = "[PROPERTY] REMOVE_PROPERTY_ERROR",

  EDIT_PROPERTY = "[PROPERTY] EDIT_PROPERTY",
  EDIT_PROPERTY_SUCCESS = "[PROPERTY] EDIT_PROPERTY_SUCCESS",
  EDIT_PROPERTY_ERROR = "[PROPERTY] EDIT_PROPERTY_ERROR",
}
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

export interface PropertyAction {
  type: PropertyActionTypes;
  payload?: any;
}
