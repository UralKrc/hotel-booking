import type { TimePickerProps } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import React from "react";
import { StyledTimePicker } from "./styles";

dayjs.extend(customParseFormat);

export interface TimePickerComponentProps extends TimePickerProps {
  fullWidth?: boolean;
}

const TimePicker: React.FC<TimePickerComponentProps> = ({
  onChange,
  fullWidth,
}) => {
  return (
    <StyledTimePicker
      onChange={onChange}
      format="HH:mm"
      fullWidth={fullWidth}
    />
  );
};

export default TimePicker;
