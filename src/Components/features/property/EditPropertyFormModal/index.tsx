import { Col, Form, Row } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { editPropertyRequest } from "../../../../Store/property/actions";
import { Property } from "../../../../Store/types";
import Modal from "../../../common/Modal";
import EditCheckInOutDetails from "./EditCheckInOutDetails";
import EditContanctDetails from "./EditContanctDetails";
import EditPropertyInformation from "./EditPropertyInformation";

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
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    const updatedProperty = { ...property, ...values };
    dispatch(editPropertyRequest(updatedProperty));
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
        <EditPropertyInformation handleChange={handleChange} />
        <Row>
          <Col xs={24}>
            <EditCheckInOutDetails handleChange={handleChange} />
          </Col>
          <Col xs={24}>
            <EditContanctDetails />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default EditPropertyFormModal;
