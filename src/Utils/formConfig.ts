import { FieldConfig } from "../Types/types";

export const contactDetailsFields: FieldConfig[] = [
  { name: "city", label: "City", span: 6 },
  { name: "country", label: "Country", span: 6 },
  { name: "addressLine1", label: "Street", span: 6 },
  { name: "postcode", label: "Postcode", span: 6 },
  {
    name: "email",
    label: "Email",
    span: 8,
    rules: [
      { required: true },
      { type: "email", message: "Please enter a valid email" },
    ],
  },
  { name: "phoneNumber", label: "Phone Number", span: 8 },
  { name: "domain", label: "Website", span: 8 },
];

export const propertyDetailFields: FieldConfig[] = [
  {
    name: "name",
    label: "Name",
    rules: [{ required: true }],
    component: "Input",
  },
  {
    name: "description",
    label: "Description",
    rules: [{ required: true }],
    component: "TextArea",
  },
  {
    name: "currency",
    label: "Currency",
    span: 4,
    component: "Select",
    options: [
      { value: "EUR", label: "Euro" },
      { value: "USD", label: "Dollar" },
    ],
  },
  {
    name: "rooms",
    label: "Rooms",
    span: 4,
    component: "InputNumber",
    rules: [{ required: true }],
  },
  {
    name: "starRating",
    label: "Star Rating",
    span: 4,
    component: "InputNumber",
    rules: [{ required: true }],
  },
  {
    name: "isAvailableForPartnerships",
    label: "Partnerships",
    span: 4,
    component: "Switch",
  },
  {
    name: "status",
    label: "Status",
    span: 6,
    component: "Switch",
  },
];

export const checkInOutFields: FieldConfig[] = [
  {
    name: "checkInTime",
    label: "Check-In Time",
    span: 8,
    component: "TimePicker",
    rules: [{ required: true }],
  },
  {
    name: "checkOutTime",
    label: "Check-Out Time",
    component: "TimePicker",
    span: 8,
    rules: [{ required: true }],
  },
  {
    name: "timezone",
    label: "Timezone",
    span: 8,
    component: "Select",
    options: [
      { value: "Europe/Amsterdam", label: "Europe/Amsterdam" },
      { value: "Europe/Portugal", label: "Europe/Portugal" },
    ],
    rules: [{ required: true }],
  },
];
