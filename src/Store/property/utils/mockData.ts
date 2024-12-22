import { FieldConfig, Property } from "../../../Types/types";

export const mockProperties: Property[] = [
  {
    id: "1",
    name: "Test Property",
    addressLine1: "Test Address",
    checkInTime: "14:00",
    checkOutTime: "11:00",
    city: "Test City",
    country: "Test Country",
    currency: "EUR",
    domain: "test.com",
    email: "",
    phoneNumber: "",
    postcode: "12345",
    rooms: 1,
    starRating: 4,
    status: true,
    timezone: "Europe/Amsterdam",
    isAvailableForPartnerships: true,
    description: "Test description",
    images: [],
  },
  {
    id: "2",
    name: "Test Property 2",
    addressLine1: "456 Test Ave",
    checkInTime: "14:00",
    checkOutTime: "11:00",
    city: "Test City",
    country: "Test Country",
    currency: "EUR",
    domain: "test2.com",
    email: "test2@test.com",
    images: [],
    isAvailableForPartnerships: true,
    phoneNumber: "987-654-3210",
    postcode: "67890",
    rooms: 20,
    starRating: 5,
    status: true,
    timezone: "GMT",
    description: "This is a test property 2",
  },
];

export const mockFields: FieldConfig[] = [
  {
    name: "name",
    label: "Name",
    rules: [{ required: true }],
  },
  {
    name: "description",
    label: "Description",
    component: "TextArea",
  },
  {
    name: "status",
    label: "Status",
    component: "Switch",
  },
  {
    name: "starRating",
    label: "Star Rating",
    component: "InputNumber",
  },
  {
    name: "country",
    label: "Country",
    component: "Select",
    options: [
      { value: "NL", label: "Netherlands" },
      { value: "US", label: "United States" },
    ],
  },
];
