import { CardProps } from "antd";
import React from "react";
import StyledCard from "./styles";

const Card: React.FC<CardProps> = ({ title, children }) => {
  return <StyledCard title={title}>{children}</StyledCard>;
};

export default Card;
