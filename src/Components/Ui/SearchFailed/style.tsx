import styled, { css } from "styled-components";
// Types
import { SearchFailedStyledProps } from "./types";

export const StyledCityDrew = styled.img`
  width: 120px;
  height: 120px;
  opacity: 0.4;
`;

export const StyledP = styled.p`
  text-align: center;
  font-size: 1.125rem;
  line-height: 1.5;
  text-align: center;
  color: ${({ theme }) => theme.secondary};

  span {
    text-transform: capitalize;
  }
`;
export const StyledNotExistResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
  /* Search */
  ${(props: SearchFailedStyledProps) =>
    props.useCase === "home" &&
    css`
      row-gap: 36px;
      ${StyledCityDrew} {
        opacity: 1;
      }
      ${StyledP} {
        color: ${({ theme }) => theme.white};
      }
    `}
`;
