import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import React from "react";
import { StyledTimePicker } from "./styles";
import { TimePickerComponentProps } from "./types";

dayjs.extend(customParseFormat);

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
