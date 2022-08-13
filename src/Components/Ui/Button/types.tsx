import { Theme } from "../../../GlobalStyle/types";

export type ButtonVariants = "primary" | "white" | "inverted" | "link";

export type ButtonProps = {
    children: React.ReactNode;
    variant: ButtonVariants;
    disabled?: boolean;
    style?: React.CSSProperties;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface ButtonStyledProps {
    variant?: ButtonVariants;
    theme?: Theme;
  }