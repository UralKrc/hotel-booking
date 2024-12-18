import { Card, Row } from "antd";
import React from "react";

interface StatusDetailsProps {
  status: boolean;
  timezone: string;
  isAvailableForPartnerships: boolean;
}

const StatusDetails: React.FC<StatusDetailsProps> = ({
  status,
  timezone,
  isAvailableForPartnerships,
}) => (
  <Card title="Status Information">
    <Row>
      <span>Status</span>
      <span>{status ? "Available" : "Unavailable"}</span>
    </Row>
    <Row>
      <span>Timezone</span>
      <span>{timezone}</span>
    </Row>
    <Row>
      <span>Available for Partnerships</span>
      <span>{isAvailableForPartnerships ? "Yes" : "No"}</span>
    </Row>
  </Card>
);

export default StatusDetails;
