import type { TimePickerProps } from "antd";
import { TimePicker as AntTimePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import React from "react";

dayjs.extend(customParseFormat);

const TimePicker: React.FC<TimePickerProps> = ({
  onChange,
  defaultOpenValue = dayjs("HH:mm"),
}) => {
  return (
    <AntTimePicker
      onChange={onChange}
      defaultOpenValue={defaultOpenValue}
      format="HH:mm"
    />
  );
};

export default TimePicker;
