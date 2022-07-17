import styled, { css } from "styled-components";
// Types
import { ButtonStyledProps } from "./types";

export const StyledButton = styled.button<ButtonStyledProps>`
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
  column-gap: 8px;
  cursor: pointer;
  /* Primary */
  ${(props: ButtonStyledProps) =>
    props.variant === ("primary" || '') &&
    css`
      color: ${({ theme }) => theme.white};
      box-shadow: -4px 8px 50px 4px rgba(0, 0, 0, 0.16),
        inset -6px 4px 4px 0 rgba(255, 255, 255, 0.1),
        inset 2px -3px 6px 0 rgba(0, 0, 0, 0.1);
      background-image: linear-gradient(to left, #47bfdf, #4a91ff);

      &:disabled,
      &button[disabled] {
        color: rgba(255, 255, 255, 0.5);
      }
    `}
  /* White button  */
    ${(props: ButtonStyledProps) =>
    props.variant === "white" &&
    css`
      color: ${({ theme }) => theme.secondary};
      background-color: ${({ theme }) => theme.white};
      box-shadow: inset -6px 4px 4px 0 rgba(255, 255, 255, 0.1),
        inset 2px -3px 6px 0 rgba(0, 0, 0, 0.1);
    `}
    /* Inverted button  */
    ${(props: ButtonStyledProps) =>
    props.variant === "inverted" &&
    css`
      color: ${({ theme }) => theme.white};
      background-color: inherit;
      border: solid 1px ${({ theme }) => theme.white};
    `}
    /* Link button  */
    ${(props: ButtonStyledProps) =>
    props.variant === "link" &&
    css`
      color: #222;
      background-color: inherit;
      text-decoration: underline;
      font-weight: 500;
      padding: 0;
      height: 30px;
      width: auto;
    `}
`;

