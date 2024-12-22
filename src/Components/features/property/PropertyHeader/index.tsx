import { EditOutlined } from "@ant-design/icons";
import { Breadcrumb, Rate } from "antd";
import React from "react";
import { generateBreadcrumbItems } from "../../../../Utils/itemsGenerator";
import Button from "../../../common/Button";
import EditPropertyFormModal from "../EditPropertyFormModal";
import { Container, Description, StyledFlex, StyledTitle } from "./styles";
import { PropertyHeaderProps } from "./types";

const PropertyHeader: React.FC<PropertyHeaderProps> = ({
  property,
  isEditing,
  setIsEditing,
}) => {
  const items = generateBreadcrumbItems(property.name);

  return (
    <Container>
      <StyledFlex justify="space-between" align="center" wrap>
        <Breadcrumb items={items} />
        <Button
          onClick={() => setIsEditing(true)}
          text="Edit Property"
          icon={<EditOutlined />}
          withMargin
        />
      </StyledFlex>
      <StyledFlex justify="center" align="center" vertical gap="small">
        <Rate
          key={property.starRating}
          disabled
          defaultValue={property.starRating}
        />
        <StyledTitle>{property.name}</StyledTitle>
      </StyledFlex>
      <EditPropertyFormModal
        property={property}
        visible={isEditing}
        onCancel={() => setIsEditing(false)}
      />
      <Description>{property.description}</Description>
    </Container>
  );
};

export default PropertyHeader;
