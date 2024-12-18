import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPropertyById } from "../../Store/property/service";
import { Container, Row, Title } from "./styles";

interface Property {
  id: string;
  city: string;
  country: string;
  addressLine1: string;
}

const PropertyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);

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

  return (
    <Container>
      <Title>Address</Title>
      <Row>
        <span>City</span>
        <span>{property.city}</span>
      </Row>
      <Row>
        <span>Country</span>
        <span>{property.country}</span>
      </Row>
      <Row>
        <span>Street</span>
        <span>{property.addressLine1}</span>
      </Row>
    </Container>
  );
};

export default PropertyPage;
