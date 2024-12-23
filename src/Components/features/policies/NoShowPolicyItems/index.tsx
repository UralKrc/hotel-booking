import React from "react";
import { Policy } from "../../../../Types/types";
import PolicyCard from "../PolicyCard";
import { Row } from "antd";

interface NoShowPolicyItemsProps {
  policies: Policy[];
  onSave: (updatedPolicy: Policy) => void;
}

const NoShowPolicyItems: React.FC<NoShowPolicyItemsProps> = ({
  policies,
  onSave,
}) => {
  return (
    <div>
      <h2>No Show Policies</h2>
      <Row gutter={[8, 8]}>
        {policies.map((policy) => (
          <PolicyCard key={policy.id} policy={policy} onSave={onSave} />
        ))}
      </Row>
    </div>
  );
};

export default NoShowPolicyItems;
