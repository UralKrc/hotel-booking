import { Col, Form, Row } from "antd";
import React from "react";
import { getComponent } from "../../../../../Utils/getComponent";
import { EditPropertyFormRowProps } from "./types";

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
          rules={field.rules}
          valuePropName={field.component === "Switch" ? "checked" : undefined}
        >
          {getComponent(field, handleChange)}
        </Form.Item>
      </Col>
    ))}
  </Row>
);

export default EditPropertyFormRow;
