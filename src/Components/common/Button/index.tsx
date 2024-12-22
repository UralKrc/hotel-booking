import React from "react";
import { StyledButton } from "./styles";
import { ButtonComponentProps } from "./types";

const Button: React.FC<ButtonComponentProps> = ({
  onClick,
  text,
  type = "primary",
  icon,
  shape,
  withMargin,
}) => {
  return (
    <StyledButton
      data-testid="button"
      onClick={onClick}
      type={type}
      icon={icon}
      shape={shape}
      withMargin={withMargin}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
