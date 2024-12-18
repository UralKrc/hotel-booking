import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "./styles";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  const navigate = useNavigate();

  return (
    <StyledButton data-testid="button" onClick={onClick}>
      {children}
    </StyledButton>
  );
};
