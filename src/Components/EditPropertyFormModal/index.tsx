import { Form, Input, InputNumber, Select, Switch } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { editProperty } from "../../Store/property/actions";
import { Property } from "../../Store/types";
import Modal from "../common/Modal";
import TimePicker from "../common/TimePicker";

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
    dispatch(editProperty(updatedProperty));
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
        <Form.Item name="rooms" label="Rooms" rules={[{ required: true }]}>
          <InputNumber min={1} />
        </Form.Item>
        <Form.Item
          name="starRating"
          label="Star Rating"
          rules={[{ required: true }]}
        >
          <InputNumber min={1} max={5} />
        </Form.Item>
        <Form.Item
          name="checkInTime"
          label="Check-In Time"
          rules={[{ required: true }]}
        >
          <TimePicker />
        </Form.Item>
        <Form.Item
          name="checkOutTime"
          label="Check-Out Time"
          rules={[{ required: true }]}
        >
          <TimePicker />
        </Form.Item>
        <Form.Item
          name="timezone"
          label="Timezone"
          rules={[{ required: true }]}
        >
          <Select
            onChange={(value) => handleChange(value, "timezone")}
            options={[
              { value: "Europe/Amsterdam", label: "Europe/Amsterdam" },
              { value: "Europe/Portugal", label: "Europe/Portugal" },
            ]}
          />
        </Form.Item>
        <Form.Item
          name="isAvailableForPartnerships"
          label="Available for Partnerships"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>
        <Form.Item name="status" label="Status" valuePropName="checked">
          <Switch />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditPropertyFormModal;
