import React, { ReactNode } from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <StyledButton data-testid="button" onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
