import { Card, Row } from "antd";
import React from "react";

interface DescriptionDetailsProps {
  currency: string;
  description: string;
  rooms: number;
  starRating: number;
}

const DescriptionDetails: React.FC<DescriptionDetailsProps> = ({
  currency,
  description,
  rooms,
  starRating,
}) => (
  <Card title="Description">
    <Row>
      <span>Currency</span>
      <span>{currency}</span>
    </Row>
    <Row>
      <span>Description</span>
      <span>{description}</span>
    </Row>
    <Row>
      <span>Rooms</span>
      <span>{rooms}</span>
    </Row>
    <Row>
      <span>Star Rating</span>
      <span>{starRating}</span>
    </Row>
  </Card>
);

export default DescriptionDetails;
