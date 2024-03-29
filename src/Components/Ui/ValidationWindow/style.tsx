import styled from "styled-components";
import getMediaQuery from "../../../Utils/GetMediaQuery";
// Wrapper
export const StyledLogoutWrapper = styled.div`
  width: calc(502px - 48px - 48px);
  /* Mobile */
  ${getMediaQuery.lessThan('changePoint')`
    width: 100%;   
  `}
`;
// P
export const StyledLogoutP = styled.p`
  font-size: 1.125rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.secondary};
  width: 342px;
  margin-top: 16px;
  /* Mobile */
  ${getMediaQuery.lessThan('changePoint')`
    width: fit-content;   
  `}
`;

// Button wrapper
export const StyledLogoutButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 24px;
  margin-top: 48px;
`;
