import styled, { css } from "styled-components";
// Types
import { Theme } from "../../GlobalStyle/theme";
import { ButtonVariants } from './types';

interface ButtonProps {
    variant?: ButtonVariants;
    theme?: Theme; 
}

export const Button = styled.button<ButtonProps>`
    width: 100%;
    height: 54px;
    font-size: ${({ theme }) => theme.buttonDefaultSize};
    border: none;
    border-radius: 10px;
    padding-top: 16px;
    padding-bottom: 16px;
    line-height: ${({ theme }) => theme.buttonLineHeight};
    display: flex;
    justify-content: center;
    align-items: center;
    /* Primary */
    ${(props: ButtonProps) => props.variant === ("primary" || '') && css`
        color: ${({ theme }) => theme.white};
        box-shadow: -4px 8px 50px 4px rgba(0, 0, 0, 0.16), inset -6px 4px 4px 0 rgba(255, 255, 255, 0.1), inset 2px -3px 6px 0 rgba(0, 0, 0, 0.1);
        background-image: linear-gradient(to left, #47bfdf, #4a91ff);
    `}
    /* White button  */
    ${(props: ButtonProps) => props.variant === "white" && css`
        color: ${({ theme }) => theme.secondary};
        background-color: ${({ theme }) => theme.white};
        box-shadow: inset -6px 4px 4px 0 rgba(255, 255, 255, 0.1), inset 2px -3px 6px 0 rgba(0, 0, 0, 0.1);
    `}
    /* Inverted button  */
    ${(props: ButtonProps) => props.variant === "inverted" && css`
        color: ${({ theme }) => theme.white};
        background-color: inherit;
        border: solid 1px ${({ theme }) => theme.white};
    `}
    /* Link button  */
    ${(props: ButtonProps) => props.variant === "link" && css`
        color: #222;
        background-color: inherit;
        text-decoration: underline;
        font-weight: 500;
    `}
`;

export default Button;