import { Carousel } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CheckInOutDetails from "../../Components/CheckInOutDetails";
import Button from "../../Components/common/Button";
import ContactDetails from "../../Components/ContactDetails";
import DescriptionDetails from "../../Components/DescriptionDetails";
import StatusDetails from "../../Components/StatusDetails";
import { fetchPropertyById } from "../../Store/property/service";
import { Container } from "./styles";
import { PropertyProps } from "./types";

const PropertyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<PropertyProps | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getProperty = async () => {
      const data = await fetchPropertyById(id);
      setProperty(data);
    };

    getProperty();
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  // Transform image data for the Carousel component
  const carouselItems = property.images.map((image) => ({
    id: image.id,
    width: image.width,
    height: image.height,
    type: "image" as const,
    content: image.url,
    alt: `Image ${image.id}`,
  }));

  return (
    <Container>
      <h3>Property</h3>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to properties
      </Button>
      <Carousel>
        {carouselItems.map((item) => (
          <div key={item.id}>
            <img
              src={item.content}
              alt={item.alt}
              width={item.width}
              height={item.height}
            />
          </div>
        ))}
      </Carousel>
      <ContactDetails
        city={property.city}
        country={property.country}
        addressLine1={property.addressLine1}
        postcode={property.postcode}
        email={property.email || ""}
        phoneNumber={property.phoneNumber || ""}
        domain={property.domain}
      />
      <DescriptionDetails
        description={property.description}
        currency={property.currency}
        rooms={property.rooms}
        starRating={property.starRating}
      />
      <CheckInOutDetails
        checkInTime={property.checkInTime}
        checkOutTime={property.checkOutTime}
      />
      <StatusDetails
        status={property.status}
        isAvailableForPartnerships={property.isAvailableForPartnerships}
        timezone={property.timezone}
      />
    </Container>
  );
};

export default PropertyPage;
