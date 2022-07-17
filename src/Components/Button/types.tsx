import { Theme } from "../../GlobalStyle/types";

export type ButtonVariants = "primary" | "white" | "inverted" | "link";

export interface ButtonProps {
    children: React.ReactNode;
    variant: ButtonVariants;
    disabled?: boolean;
    type?: "button" | "submit" | "reset" | undefined;
}

export interface ButtonStyledProps {
    variant?: ButtonVariants;
    theme?: Theme;
  }