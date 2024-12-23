import { Row } from "antd";
import React from "react";
import { Policy } from "../../../../Types/types";
import PolicyCard from "../PolicyCard";

interface CancellationPolicyItemsProps {
  policies: Policy[];
  onSave: (updatedPolicy: Policy) => void;
}

const CancellationPolicyItems: React.FC<CancellationPolicyItemsProps> = ({
  policies,
  onSave,
}) => {
  return (
    <div>
      <h2>Cancellation Policies</h2>
      <Row gutter={[8, 8]}>
        {policies.map((policy) => (
          <PolicyCard key={policy.id} policy={policy} onSave={onSave} />
        ))}
      </Row>
    </div>
  );
};

export default CancellationPolicyItems;
