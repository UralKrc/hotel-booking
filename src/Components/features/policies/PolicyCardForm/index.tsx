import { EditOutlined, SaveOutlined } from "@ant-design/icons";
import { Col, Flex, Form, Input, Select, Tag } from "antd";
import React, { useState } from "react";
import { Policy } from "../../../../Types/types";
import { generatePolicyItems } from "../../../../Utils/itemsGenerator";
import Button from "../../../common/Button";
import Card from "../../../common/Card";
import { PolicyItemLabel } from "./styles";
import { PolicyCardFormProps } from "./types";

const { Option } = Select;

const PolicyCardForm: React.FC<PolicyCardFormProps> = ({
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
    setEditablePolicy({
      ...editablePolicy,
      [field]: field === "amount" ? Number(value) : value,
    });
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
                        editablePolicy.chargeType === "percentage" ? "%" : "€"
                      }
                    />
                  ) : item.label === "Charge Type" ? (
                    <Select
                      value={editablePolicy.chargeType}
                      onChange={(value) => handleChange("chargeType", value)}
                    >
                      <Option value="fixed">Fixed</Option>
                      <Option value="percentage">Percentage</Option>
                    </Select>
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
                    {item.label === "Amount"
                      ? `${editablePolicy.amount}${
                          editablePolicy.chargeType === "percentage" ? "%" : "€"
                        }`
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

export default PolicyCardForm;
