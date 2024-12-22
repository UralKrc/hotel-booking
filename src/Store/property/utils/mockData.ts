import { FieldConfig, Property } from "../../../Types/types";

export const mockProperties: Property[] = [
  {
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
  {
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
