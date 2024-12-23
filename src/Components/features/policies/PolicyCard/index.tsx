import { EditOutlined, SaveOutlined } from "@ant-design/icons";
import { Col, Flex, Form, Input, Tag } from "antd";
import React, { useState } from "react";
import { Policy } from "../../../../Types/types";
import { generatePolicyItems } from "../../../../Utils/itemsGenerator";
import Button from "../../../common/Button";
import Card from "../../../common/Card";
import { PolicyItemLabel } from "./styles";

interface PolicyCardProps {
  policy: Policy;
  onSave: (updatedPolicy: Policy) => void;
  className?: string;
}

const PolicyCard: React.FC<PolicyCardProps> = ({
  policy,
  onSave,
  className,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editablePolicy, setEditablePolicy] = useState(policy);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onSave(editablePolicy);
    setIsEditing(false);
  };

  const handleChange = (field: keyof Policy, value: any) => {
    setEditablePolicy({ ...editablePolicy, [field]: value });
  };

  const items = generatePolicyItems(editablePolicy);

  return (
    <Col xs={24} md={8}>
      <Card
        className={className}
        title={editablePolicy.name}
        extra={
          <Button
            icon={isEditing ? <SaveOutlined /> : <EditOutlined />}
            onClick={isEditing ? handleSaveClick : handleEditClick}
          />
        }
        style={{ marginBottom: "16px" }}
      >
        <Form layout="vertical">
          {items.map((item) => (
            <Form.Item key={item.label}>
              <Flex align="center" gap="small">
                <PolicyItemLabel>{item.label}:</PolicyItemLabel>
                {isEditing ? (
                  item.label === "Amount" ? (
                    <Input
                      value={editablePolicy.amount}
                      onChange={(e) => handleChange("amount", e.target.value)}
                      type="number"
                      addonAfter={
                        editablePolicy.chargeType === "percentage" ? "%" : ""
                      }
                    />
                  ) : (
                    <Input
                      value={item.value}
                      onChange={(e) =>
                        handleChange(
                          item.label.toLowerCase() as keyof Policy,
                          e.target.value
                        )
                      }
                    />
                  )
                ) : (
                  <Tag color={item.color}>
                    {item.label === "Amount" &&
                    editablePolicy.chargeType === "percentage"
                      ? `${editablePolicy.amount}%`
                      : item.value}
                  </Tag>
                )}
              </Flex>
            </Form.Item>
          ))}
        </Form>
      </Card>
    </Col>
  );
};

export default PolicyCard;
