import { Card, Col, Row } from "antd";
import React from "react";

interface CheckInOutDetailsProps {
  checkInTime: string;
  checkOutTime: string;
}

const CheckInOutDetails: React.FC<CheckInOutDetailsProps> = ({
  checkInTime,
  checkOutTime,
}) => (
  <Card title="Check-In/Out Information">
    <Col span={8}>
      <Row>
        <span>Check-In Time</span>
        <span>{checkInTime}</span>
      </Row>
      <Row>
        <span>Check-Out Time</span>
        <span>{checkOutTime}</span>
      </Row>
    </Col>
  </Card>
);

export default CheckInOutDetails;
