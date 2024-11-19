import styled from "styled-components";
import { IButtonVariant } from "./types";

interface ButtonWrapperProps {
  variant: IButtonVariant;
  disabled?: boolean;
}

const ButtonWrapper = styled.button<ButtonWrapperProps>`
  padding: 6px 12px;
  background-color: ${({ theme, variant }) => theme.colors.button[variant].background};
  color: ${({ theme, variant }) => theme.colors.button[variant].text};
  cursor: pointer;
  border: ${({ theme, variant }) =>
    theme.colors.button[variant].border ? `1px solid ${theme.colors.button[variant].border}` : "none"};
  border-radius: 5px;
  line-height: 1.75;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme, variant, disabled }) =>
      !disabled && theme.colors.button[variant].hover};
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background-color: ${({ theme, variant }) => theme.colors.button[variant].disabled};
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export default ButtonWrapper;
