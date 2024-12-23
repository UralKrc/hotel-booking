import { FieldConfig } from "../Types/types";

export const policyFields: FieldConfig[] = [
  {
    name: "name",
    label: "Policy Name",
    rules: [{ required: true, message: "Please enter the policy name" }],
    component: "Input",
  },
  {
    name: "description",
    label: "Description",
    rules: [{ required: true, message: "Please enter the description" }],
    component: "TextArea",
  },
  {
    name: "amount",
    label: "Amount",
    rules: [{ required: true, message: "Please enter the amount" }],
    component: "InputNumber",
  },
  {
    name: "chargeType",
    label: "Charge Type",
    rules: [{ required: true, message: "Please select the charge type" }],
    component: "Select",
    options: [
      { value: "percentage", label: "Percentage" },
      { value: "fixed", label: "Fixed" },
    ],
  },
  {
    name: "reference",
    label: "Reference",
    component: "Select",
    options: [
      { value: "prior-to-arrival", label: "Prior to Arrival" },
      { value: "after-booking", label: "After Booking" },
    ],
  },
  {
    name: "days",
    label: "Days",
    component: "InputNumber",
    rules: [
      {
        type: "number",
        min: 0,
        message: "Please enter a valid number of days",
      },
    ],
  },
  {
    name: "hours",
    label: "Hours",
    component: "InputNumber",
    rules: [
      {
        type: "number",
        min: 0,
        message: "Please enter a valid number of hours",
      },
    ],
  },
];
