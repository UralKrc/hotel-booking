import { Col, Divider, Row } from "antd";
import React from "react";
import { PropertyDetails as PropertyDetailsInterface } from "../../../../Types/types";
import CheckInOutDetails from "./CheckInOutDetails";
import ContactDetails from "./ContactDetails";
import PropertyHeader from "./PropertyHeader";
import PropertyImagesCarousel from "./PropertyImagesCarousel";
import PropertyInformation from "./PropertyInformation";

interface PropertyDetailsProps {
  propertyDetails: PropertyDetailsInterface;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({
  propertyDetails,
}) => {
  return (
    <>
      <PropertyHeader
        starRating={propertyDetails.starRating}
        name={propertyDetails.name}
        description={propertyDetails.description}
      />
      <Divider />
      {propertyDetails.images ? (
        <PropertyImagesCarousel images={propertyDetails.images} />
      ) : null}
      <Divider />
      <Row gutter={[8, 8]}>
        <Col xs={24} md={8}>
          <PropertyInformation
            currency={propertyDetails.currency}
            rooms={propertyDetails.rooms}
            status={propertyDetails.status}
            isAvailableForPartnerships={
              propertyDetails.isAvailableForPartnerships
            }
          />
        </Col>
        <Col xs={24} md={8}>
          <CheckInOutDetails
            checkInTime={propertyDetails.checkInTime}
            checkOutTime={propertyDetails.checkOutTime}
            timezone={propertyDetails.timezone}
          />
        </Col>
        <Col xs={24} md={8}>
          <ContactDetails
            city={propertyDetails.city}
            country={propertyDetails.country}
            addressLine1={propertyDetails.addressLine1}
            postcode={propertyDetails.postcode}
            email={propertyDetails.email || ""}
            phoneNumber={propertyDetails.phoneNumber || ""}
            domain={propertyDetails.domain}
          />
        </Col>
      </Row>
    </>
  );
};

export default PropertyDetails;
