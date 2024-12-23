import { Rate } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../common/Button";
import { Container, Description, StyledFlex, StyledTitle } from "./styles";
import { PropertyHeaderProps } from "./types";

const PropertyHeader: React.FC<PropertyHeaderProps> = ({
  starRating,
  name,
  description,
}) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Button
        text="View Policies"
        withMargin
        onClick={() => navigate("policies")}
      />
      <StyledFlex justify="center" align="center" vertical gap="small">
        <Rate key={starRating} disabled defaultValue={starRating} />
        <StyledTitle>{name}</StyledTitle>
      </StyledFlex>
      <Description>{description}</Description>
    </Container>
  );
};

export default PropertyHeader;
