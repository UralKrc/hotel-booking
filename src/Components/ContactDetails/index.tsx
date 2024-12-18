import { Card, Row } from "antd";
import React from "react";

interface AddressDetailsProps {
  city: string;
  country: string;
  addressLine1: string;
  postcode: string;
  email: string;
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
}) => (
  <Card title="Address">
    <Row>
      <span>City</span>
      <span>{city}</span>
    </Row>
    <Row>
      <span>Country</span>
      <span>{country}</span>
    </Row>
    <Row>
      <span>Street</span>
      <span>{addressLine1}</span>
    </Row>
    <Row>
      <span>Postcode</span>
      <span>{postcode}</span>
    </Row>
    <Row>
      <span>Email</span>
      <span>{email}</span>
    </Row>
    <Row>
      <span>Phone Number</span>
      <span>{phoneNumber}</span>
    </Row>
    <Row>
      <span>Domain</span>
      <span>{domain}</span>
    </Row>
  </Card>
);

export default ContactDetails;
