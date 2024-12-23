import { Breadcrumb, Rate } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { generateBreadcrumbItems } from "../../../../../Utils/itemsGenerator";
import Button from "../../../../common/Button";
import { Container, Description, StyledFlex, StyledTitle } from "./styles";
import { PropertyHeaderProps } from "./types";

const PropertyHeader: React.FC<PropertyHeaderProps> = ({
  id,
  starRating,
  name,
  description,
}) => {
  const navigate = useNavigate();
  const items = generateBreadcrumbItems(name);

  return (
    <Container>
      <StyledFlex justify="space-between" align="center" wrap>
        <Breadcrumb items={items} />
        <Button
          text="View Policies"
          withMargin
          onClick={() => navigate("policies")}
        />
      </StyledFlex>
      <StyledFlex justify="center" align="center" vertical gap="small">
        <Rate key={starRating} disabled defaultValue={starRating} />
        <StyledTitle>{name}</StyledTitle>
      </StyledFlex>
      <Description>{description}</Description>
    </Container>
  );
};

export default PropertyHeader;
