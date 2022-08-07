import styled, { css } from "styled-components";
// Types
import { StyledAlertProps } from "./types";
// Base alert
export const BaseAlert = styled.div`
  width: 354px;
  height: 84px;
  padding: 24px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 14px;
    width: 100%;
    margin-left: 16px;
  }
  /* Success */
  ${(props: StyledAlertProps) =>
    props.severity === "success" &&
    css`
      background-color: rgba(0, 0, 0, 0.8);
      p {
        color: ${({ theme }) => theme.white};
      }
    `}
  /*Error  */
  ${(props: StyledAlertProps) =>
    props.severity === "error" &&
    css`
      background-color: #ffe7e7;
      p {
        color: #4d4d4d;
      }
    `}
`;
