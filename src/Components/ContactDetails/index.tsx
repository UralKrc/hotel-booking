import React from "react";
import { Link } from "react-router-dom";
import Card from "../common/Card";
import FlexContainer from "../common/LabeledItemList";

interface AddressDetailsProps {
  city: string;
  country: string;
  addressLine1: string;
  postcode?: string;
  email?: string;
  phoneNumber: string;
  domain: string;
}

const ContactDetails: React.FC<AddressDetailsProps> = ({
  city,
  country,
  addressLine1,
  postcode,
  email,
  phoneNumber,
  domain,
}) => {
  const items = [
    {
      title: "City",
      label: city,
    },
    {
      title: "Country",
      label: country,
    },
    {
      title: "Street",
      label: addressLine1,
    },
    {
      title: "Postcode",
      label: postcode,
    },
    {
      title: "Email",
      label: email,
    },
    {
      title: "Phone Number",
      label: phoneNumber,
    },
    {
      title: "Website",
      label: <Link to={domain}>{domain}</Link>,
    },
  ];

  return (
    <Card title="Address">
      <FlexContainer items={items} />
    </Card>
  );
};

export default ContactDetails;
