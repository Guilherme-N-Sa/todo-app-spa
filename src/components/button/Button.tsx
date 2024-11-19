import React from "react";
import ButtonWrapper from "./styles";
import { IButtonVariant } from "./types";

interface ButtonProps {
  variant?: IButtonVariant;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ variant = "base", children, disabled = false, onClick }: ButtonProps) {
  return (
    <ButtonWrapper variant={variant} disabled={disabled} onClick={onClick}>
      <span>{children || "Button"}</span>
    </ButtonWrapper>
  );
}
