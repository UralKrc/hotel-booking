import { Row } from "antd";
import React from "react";
import { Policy } from "../../../../Types/types";
import PolicyCardForm from "../PolicyCardForm";
import { NoShowPolicyItemsProps } from "./types";

const NoShowPolicyItems: React.FC<NoShowPolicyItemsProps> = ({
  policies,
  onSave,
}) => {
  return (
    <div>
      <h2>No Show Policies</h2>
      <Row gutter={[8, 8]}>
        {policies.map((policy: Policy) => (
          <PolicyCardForm key={policy.id} policy={policy} onSave={onSave} />
        ))}
      </Row>
    </div>
  );
};

export default NoShowPolicyItems;
