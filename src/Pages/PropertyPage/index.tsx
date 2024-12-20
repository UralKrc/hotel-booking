import { Col, Divider, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../Components/common/Loading";
import CheckInOutDetails from "../../Components/features/property/CheckInOutDetails";
import ContactDetails from "../../Components/features/property/ContactDetails";
import PropertyHeader from "../../Components/features/property/PropertyHeader";
import PropertyImagesCarousel from "../../Components/features/property/PropertyImagesCarousel";
import PropertyInformation from "../../Components/features/property/PropertyInformation";
import { fetchPropertyByIdRequest } from "../../Store/property/actions";
import { getPropertyByIdSelector } from "../../Store/property/selectors";
import { Container, InnerContainer } from "./styles";

const PropertyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const property = useSelector(getPropertyByIdSelector);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(fetchPropertyByIdRequest({ id }));
    }
  }, [id, dispatch]);

  if (!property) {
    return <Loading />;
  }

  return (
    <Container>
      <PropertyHeader
        property={property}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
      <Divider />
      {property.images ? (
        <PropertyImagesCarousel images={property.images} />
      ) : null}
      <Divider />
      <InnerContainer>
        <Row gutter={[8, 8]}>
          <Col xs={24} md={8}>
            <PropertyInformation
              currency={property.currency}
              rooms={property.rooms}
              status={property.status}
              isAvailableForPartnerships={property.isAvailableForPartnerships}
            />
          </Col>
          <Col xs={24} md={8}>
            <CheckInOutDetails
              checkInTime={property.checkInTime}
              checkOutTime={property.checkOutTime}
              timezone={property.timezone}
            />
          </Col>
          <Col xs={24} md={8}>
            <ContactDetails
              city={property.city}
              country={property.country}
              addressLine1={property.addressLine1}
              postcode={property.postcode}
              email={property.email || ""}
              phoneNumber={property.phoneNumber || ""}
              domain={property.domain}
            />
          </Col>
        </Row>
      </InnerContainer>
    </Container>
  );
};

export default PropertyPage;
