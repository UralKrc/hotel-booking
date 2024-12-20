import { Col, Form, Input, InputNumber, Row, Select, Switch } from "antd";
import React from "react";

export interface EditPropertyInformationProps {
  handleChange: (value: string, field: string) => void;
}

const EditPropertyInformation: React.FC<EditPropertyInformationProps> = ({
  handleChange,
}) => {
  return (
    <>
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Row justify="space-between">
        <Col xs={24} md={4}>
          <Form.Item
            name="currency"
            label="Currency"
            rules={[{ required: true }]}
          >
            <Select
              onChange={(value) => handleChange(value, "currency")}
              options={[
                { value: "EUR", label: "Euro" },
                { value: "USD", label: "Dollar" },
              ]}
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={4}>
          <Form.Item name="rooms" label="Rooms" rules={[{ required: true }]}>
            <InputNumber min={1} />
          </Form.Item>
        </Col>
        <Col xs={24} md={4}>
          <Form.Item
            name="starRating"
            label="Star Rating"
            rules={[{ required: true }]}
          >
            <InputNumber min={1} max={5} />
          </Form.Item>
        </Col>
        <Col xs={24} md={4}>
          <Form.Item
            name="isAvailableForPartnerships"
            label="Partnerships"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
        </Col>
        <Col xs={24} md={6}>
          <Form.Item name="status" label="Status" valuePropName="checked">
            <Switch />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};

export default EditPropertyInformation;
