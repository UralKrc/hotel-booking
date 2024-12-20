import { TimePicker } from "antd";
import styled from "styled-components";

interface StyledTimePickerProps {
  fullWidth?: boolean;
}

export const StyledTimePicker = styled(TimePicker).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    typeof prop === "string" &&
    !["fullWidth"].includes(prop) &&
    defaultValidatorFn(prop),
})<StyledTimePickerProps>`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
`;
