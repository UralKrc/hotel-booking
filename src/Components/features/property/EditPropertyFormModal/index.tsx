import { Col, Form, Modal, Row } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import {
  checkInOutFields,
  contactDetailsFields,
  propertyDetailFields,
} from "../../../../Constants/formConfig";
import { editPropertyThunk } from "../../../../Store/property/thunks";
import { AppDispatch } from "../../../../Store/store";
import { Property } from "../../../../Types/types";
import EditPropertyFormRow from "./EditPropertyFormRow";

interface EditPropertyFormModalProps {
  property: Property;
  visible: boolean;
  onCancel: () => void;
}

const EditPropertyFormModal: React.FC<EditPropertyFormModalProps> = ({
  property,
  visible,
  onCancel,
}) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch<AppDispatch>();

  const onFinish = (values: Property[]) => {
    const updatedProperty = { ...property, ...values };
    dispatch(editPropertyThunk(updatedProperty));
    onCancel();
  };

  const handleChange = (value: string, field: string) => {
    form.setFieldsValue({ [field]: value });
  };

  return (
    <Modal
      open={visible}
      onOk={form.submit}
      onCancel={onCancel}
      title="Edit Property"
      width={1000}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={property}
      >
        <EditPropertyFormRow
          fields={propertyDetailFields}
          handleChange={handleChange}
        />
        <Row>
          <Col xs={24}>
            <EditPropertyFormRow
              fields={checkInOutFields}
              handleChange={handleChange}
            />
          </Col>
          <Col xs={24}>
            <EditPropertyFormRow fields={contactDetailsFields} />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default EditPropertyFormModal;
