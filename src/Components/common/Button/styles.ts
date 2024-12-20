import { Button } from "antd";
import styled from "styled-components";

interface StyledButtonProps {
  withMargin?: boolean;
}

export const StyledButton = styled(Button).withConfig({
  shouldForwardProp: (propName) => !["withMargin"].includes(propName),
})<StyledButtonProps>`
  margin: ${({ withMargin }) => (withMargin ? "1rem 0" : "0")};
`;
