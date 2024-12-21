import { Col, Form, Input, InputNumber, Row, Select, Switch } from "antd";
import { Rule } from "antd/es/form";
import React from "react";
import TimePicker from "../../../../common/TimePicker";

interface FieldConfig {
  name: string;
  label: string;
  span?: number;
  rules?: Rule[];
  component?: string;
  options?: { value: string; label: string }[];
}

interface EditPropertyFormRowProps {
  fields: FieldConfig[];
  handleChange?: (value: any, field: string) => void;
  gutter?: number;
}

const getComponent = (
  field: FieldConfig,
  handleChange?: (value: any, field: string) => void
) => {
  switch (field.component) {
    case "TextArea":
      return <Input.TextArea />;
    case "InputNumber":
      return <InputNumber min={1} />;
    case "Select":
      return (
        <Select
          onChange={(value) => handleChange?.(value, field.name)}
          options={field.options}
        />
      );
    case "Switch":
      return <Switch />;
    case "TimePicker":
      return <TimePicker />;
    default:
      return <Input />;
  }
};

const EditPropertyFormRow: React.FC<EditPropertyFormRowProps> = ({
  fields,
  handleChange,
  gutter = 8,
}) => (
  <Row justify="space-between" gutter={gutter}>
    {fields.map((field) => (
      <Col key={field.name} xs={24} md={field.span || 24}>
        <Form.Item
          name={field.name}
          label={field.label}
          rules={field.rules || [{ required: true }]}
          valuePropName={field.component === "Switch" ? "checked" : undefined}
        >
          {getComponent(field, handleChange)}
        </Form.Item>
      </Col>
    ))}
  </Row>
);

export default EditPropertyFormRow;
