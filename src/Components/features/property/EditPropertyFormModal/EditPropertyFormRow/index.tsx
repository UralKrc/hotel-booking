import { Col, Form } from "antd";
import React from "react";
import { getComponent } from "../../../../../Utils/getComponent";
import { StyledEditPropertyFormRow } from "./styles";
import { EditPropertyFormRowProps } from "./types";

const EditPropertyFormRow: React.FC<EditPropertyFormRowProps> = ({
  fields,
  handleChange,
  gutter = 8,
}) => (
  <StyledEditPropertyFormRow justify="space-between" gutter={gutter}>
    {fields.map((field) => (
      <Col key={field.name} xs={24} md={field.span}>
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
  </StyledEditPropertyFormRow>
);

export default EditPropertyFormRow;
