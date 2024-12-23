import { CardProps } from "antd";
import React from "react";
import StyledCard from "./styles";

const Card: React.FC<CardProps> = ({ title, children, extra }) => {
  return (
    <StyledCard title={title} extra={extra}>
      {children}
    </StyledCard>
  );
};

export default Card;
