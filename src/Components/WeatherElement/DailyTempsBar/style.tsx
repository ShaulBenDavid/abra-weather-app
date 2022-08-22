import styled from "styled-components";
import getMediaQuery from "../../../Utils/GetMediaQuery";

// Styled Weather bar
export const StyledWeatherBar = styled.div`
  width: 100%;
  height: 181px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  border: solid 1px ${({ theme }) => theme.white};
    /* Mobile */
    ${getMediaQuery.lessThan("changePoint")`
        flex-direction: column;
        justify-content: unset;
        row-gap: 9px;
        height: auto;
        border: none;
    `}
`;
