import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../Assets/Icons/arrow.svg";
import getMediaQuery from "../../../Utils/GetMediaQuery";

// Hourly wrapper
export const StyledHourlyItemWrapper = styled.div`
  min-width: 153px;
  height: 293px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.white};
  row-gap: 24px;
  transition: 0.3 ease-in-out;

  :hover {
    border-radius: 20px;
    -webkit-backdropfilter: blur(1px);
    backdrop-filter: blur(1px);
    background-color: rgba(255, 255, 255, 0.2);
  }
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
      min-width: 88px;
      height: 138px;
      row-gap: 4px;
  `}
`;
// Weather time
export const StyledWeatherTime = styled.h4`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.25;
  text-align: center;
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
      font-size: 0.875rem;
      font-weight: normal;
    `}
`;

// Temp
export const StyledTemp = styled.p`
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.25;
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
      font-size: 1.125rem;
      line-height: 1.2;
  `}
`;

// Icon
export const StyledICondition = styled.img`
  width: 32px;
  height: 32px;
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
    width: 16px;
    height: 16px;
  `}
`;
// Speed container
export const StyledSpeedContainer = styled.span`
  display: flex;
  margin-top: 12px;
  align-items: center;
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
    margin-top: 11px;
`}
`;

// Speed icom
export const StyledSpeedIcon = styled(Arrow)`
  width: 22px;
  height: 22px;
  transform: rotate(-120.08deg);
  margin-bottom: 5px;
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
    width: 16px;
    height: 16px;
`}
`;

// Speed text
export const StyledSpeedP = styled.p`
  margin-left: 5px;
  font-size: 1.125rem;
  line-height: 1.5;
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
  margin-left: 3px;
  font-size: 0.75rem;
  line-height: 1.25;
`}
`;
