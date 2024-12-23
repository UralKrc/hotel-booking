import { FieldConfig, Property } from "../../../Types/types";

export const mockProperties: Property[] = [
  {
    property: {
      id: "1YK15JGO",
      name: "Hotel Amsterdam",
      addressLine1: "Rokin 92",
      checkInTime: "2024-12-22T15:00:00.000Z",
      checkOutTime: "2024-12-22T09:00:00.000Z",
      city: "Amsterdam",
      country: "Netherlands",
      currency: "EUR",
      domain: "www.katanoxhotel.com",
      email: "katanoxhotel@katanox.com",
      phoneNumber: "+41 009899554",
      postcode: "1012 KZ",
      rooms: 43,
      starRating: 5,
      status: true,
      timezone: "Europe/Amsterdam",
      isAvailableForPartnerships: true,
      description: "A fancy Hotel in the city centre, overlooking the IJ.",
      images: [
        {
          id: "KGQD001Y",
          url: "https://cdn.traveldata.io/katanox-inventory/hotels/1YK15JGO/media/image-0-20211130T161840641889.jpeg",
          width: 1024,
          height: 678,
        },
      ],
    },
    policies: [
      {
        id: "LYJJN1Y5",
        name: "No-show",
        description: "In case of a no-show, 100% of your stay will be charged.",
        amount: 100,
        chargeType: "percentage",
        propertyId: "1YK15JGO",
      },
      {
        id: "NGOPXP8D",
        name: "Flexible",
        description: "Free cancellation until 36 hours before arrival.",
        amount: 100,
        chargeType: "percentage",
        reference: "prior-to-arrival",
        days: 1,
        hours: 14,
        propertyId: "1YK15JGO",
      },
    ],
  },
  {
    property: {
      id: "VY32018P",
      name: "Hotel Berlin",
      addressLine1: "Oranienburger Straße",
      checkInTime: "2024-12-22T07:00:00.000Z",
      checkOutTime: "2024-12-22T09:00:00.000Z",
      city: "Berlin",
      country: "Germany",
      currency: "EUR",
      domain: "www.test.com",
      email: null,
      phoneNumber: null,
      postcode: "10117",
      rooms: 25,
      starRating: 5,
      status: true,
      timezone: "Europe/Berlin",
      isAvailableForPartnerships: true,
      description: "A luxurious hotel at the heart of Berlin",
      images: [
        {
          id: "1YK1NNJG",
          url: "https://cdn.traveldata.io/katanox-inventory/hotels/VY32018P/media/image-0-20211130T160958863447.jpeg",
          width: 768,
          height: 576,
        },
      ],
    },
    policies: [
      {
        id: "LYJJN1Y6",
        name: "No-show",
        description: "In case of a no-show, 100% of your stay will be charged.",
        amount: 100,
        chargeType: "percentage",
        propertyId: "VY32018P",
      },
      {
        id: "NGOPXP8E",
        name: "Flexible",
        description: "Free cancellation until 36 hours before arrival.",
        amount: 100,
        chargeType: "percentage",
        reference: "prior-to-arrival",
        days: 1,
        hours: 14,
        propertyId: "VY32018P",
      },
    ],
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
