import styled from "styled-components";
import getMediaQuery from "../../../Utils/GetMediaQuery";

// Wrapper
export const StyledDailyTempWrapper = styled.div`
  color: ${({ theme }) => theme.white};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
        flex-direction: row;
        width: 100%;
        height: 30px;
    `}
`;
// Day and condition
export const StyledDayAndCondition = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.25;
  text-align: center;
  width: 100%;
  margin-bottom: 40px;
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
    margin: 0;
    width: auto;
    font-size: 1.125rem;
    font-weight: normal;
    line-height: 1.5;
    order: 2;
    padding-top: 5px;
    `}
`;

// Styled icon condition
export const StyledIconCondition = styled.img`
  width: 30px;
  height: 30px;
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
        oreder: 1;
    `}
`;

// Temp
export const StyledTemp = styled.p`
  display: inline-block;
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
        margin-left: auto;
        order: 3;
        padding-top: 5px;
    `}
`;

export const StyledDayTemp = styled.span`
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.25;
  text-align: center;

  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
        font-size: 1.125rem;
        line-height: 1.2;
    `}
`;

export const StyledNightTemp = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.25;
  text-align: center;
  margin-left: 4px;
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
    font-size: 1rem;
    font-weight: normal;
    line-height: normal;
    `}
`;
