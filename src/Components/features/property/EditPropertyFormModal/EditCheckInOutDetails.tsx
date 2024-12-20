import { Col, Form, Row, Select } from "antd";
import dayjs from "dayjs";
import React from "react";
import TimePicker from "../../../common/TimePicker";

interface EditCheckInOutDetailsProps {
  handleChange: (value: string, field: string) => void;
}

const EditCheckInOutDetails: React.FC<EditCheckInOutDetailsProps> = ({
  handleChange,
}) => {
  const handleTimeChange = (
    time: dayjs.Dayjs | null,
    timeString: string,
    field: string
  ) => {
    handleChange(timeString, field);
  };

  return (
    <Row wrap justify="space-between" gutter={8}>
      <Col xs={24} md={8}>
        <Form.Item
          name="checkInTime"
          label="Check-In Time"
          rules={[{ required: true }]}
        >
          <TimePicker
            fullWidth
            onChange={(time, timeString) =>
              handleTimeChange(
                time,
                Array.isArray(timeString) ? timeString[0] : timeString,
                "checkInTime"
              )
            }
          />
        </Form.Item>
      </Col>
      <Col xs={24} md={8}>
        <Form.Item
          name="checkOutTime"
          label="Check-Out Time"
          rules={[
            { required: true },
            ({ getFieldValue }) => ({
              validator(_: any, value: any) {
                const checkInTime = getFieldValue("checkInTime");
                if (
                  !value ||
                  !checkInTime ||
                  dayjs(value, "HH:mm").isAfter(dayjs(checkInTime, "HH:mm"))
                ) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Check-out time must be later than check-in time")
                );
              },
            }),
          ]}
        >
          <TimePicker
            fullWidth
            onChange={(time, timeString) =>
              handleTimeChange(
                time,
                Array.isArray(timeString) ? timeString[0] : timeString,
                "checkOutTime"
              )
            }
          />
        </Form.Item>
      </Col>
      <Col xs={24} md={8}>
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
      </Col>
    </Row>
  );
};

export default EditCheckInOutDetails;
