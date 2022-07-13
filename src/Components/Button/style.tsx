import styled from "styled-components";
// Types
import { ButtonVariants } from './types';

interface Props {
    variant?: ButtonVariants;
}

export const Button = styled.button<Props>`
    font-size: ${({ theme }) => theme.buttonDefaultSize};
    color: ${({ theme }) => theme.yellow};
    border: none;
    border-radius: 10px;
    padding-top: 16px;
    padding-bottom: 16px;
    box-shadow: -4px 8px 50px 4px rgba(0, 0, 0, 0.16), inset -6px 4px 4px 0 rgba(255, 255, 255, 0.1), inset 2px -3px 6px 0 rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(to left, #47bfdf, #4a91ff);

    ${(props) => {
    if (props.variant === "primary") {
        return `
            
        `;
    } else if (props.variant === "white") {
        return `
            
        `;
    } else if (props.variant === "ghost") {
        return `
            
        `;
    } else if (props.variant === "link") {
        return `
            
        `;
    }
    }}
`;

export default Button;