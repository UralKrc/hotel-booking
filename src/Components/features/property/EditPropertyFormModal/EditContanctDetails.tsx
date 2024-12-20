import { Col, Form, Input, Row } from "antd";
import React from "react";

const EditContanctDetails: React.FC = () => {
  return (
    <>
      <Row justify="space-between" gutter={8}>
        <Col xs={24} md={6}>
          <Form.Item name="city" label="City" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
        </Col>
        <Col xs={24} md={6}>
          <Form.Item
            name="country"
            label="Country"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>
        </Col>
        <Col xs={24} md={6}>
          <Form.Item
            name="addressLine1"
            label="Street"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>
        </Col>
        <Col xs={24} md={6}>
          <Form.Item
            name="postcode"
            label="Postcode"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="space-between" gutter={8}>
        <Col xs={24} md={8}>
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
        </Col>
        <Col xs={24} md={8}>
          <Form.Item
            name="phoneNumber"
            label="Phone Number"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>
        </Col>
        <Col xs={24} md={8}>
          <Form.Item name="domain" label="Website" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};

export default EditContanctDetails;
