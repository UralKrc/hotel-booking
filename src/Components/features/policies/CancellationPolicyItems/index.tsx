import { Row } from "antd";
import React from "react";
import { Policy } from "../../../../Types/types";
import PolicyCardForm from "../PolicyCardForm";
import { CancellationPolicyItemsProps } from "./types";

const CancellationPolicyItems: React.FC<CancellationPolicyItemsProps> = ({
  policies,
  onSave,
}) => {
  return (
    <div>
      <h2>Cancellation Policies</h2>
      <Row gutter={[8, 8]}>
        {policies.map((policy: Policy) => (
          <PolicyCardForm
            key={policy.id}
            policy={policy}
            onSave={onSave}
          />
        ))}
      </Row>
    </div>
  );
};

export default CancellationPolicyItems;
