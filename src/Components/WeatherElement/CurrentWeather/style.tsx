import styled from "styled-components";
import getMediaQuery from "../../../Utils/GetMediaQuery";

// Container
export const CurrentWeatherContainer = styled.div`
  color: ${({ theme }) => theme.white};
  /* width: 502px; */
  display: flex;
  flex-direction: column;
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
    align-items: center;
    margin: 0 auto;
    text-align: center;
    width: auto;
  `}
`;
// Place title
export const PlaceTitle = styled.h1`
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1),
    -1px 1px 2px rgba(255, 255, 255, 0.25);
  font-size: 3.125rem;
  font-weight: 900;
  line-height: 1.2;
  text-transform: capitalize;
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.25;
  `}
`;
//Temp container
export const CurrentTempContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 180px;
  margin-top: 16px;
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`

  height: auto;
  `}
`;
// Temp number
export const TempNumber = styled.p`
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1),
    -1px 1px 2px rgba(255, 255, 255, 0.25);
  span {
    line-height: 1em;
  }
/* High temp */
  span:first-of-type {
    font-size: 8.125rem;
    margin-left: 32px;
  }
  /* Low temp */
  span:last-child {
    font-size: 3.125rem;
  }
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
  span:first-of-type {
    font-size: 5rem;
    margin-left: 32px;
  }
  span:last-child {
    font-size: 2.25rem;
  }
`}
`;
// Temp icom
export const TempIcon = styled.img`
  width: 180px;
  height: 180px;
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1),
    -1px 1px 2px rgba(255, 255, 255, 0.25);
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
  width: 80px;
height: 80px;
  `}
`;
// Weather condition
export const WeatherCondition = styled.h3`
  margin-top: 16px;
  text-transform: capitalize;
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1),
    -1px 1px 2px rgba(255, 255, 255, 0.25);
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.25;
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
  font-size: 1.5rem;
  font-weight: 500;
  `}
`;
// Time zone
export const TimeZone = styled.p`
  margin-top: 16px;
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1),
    -1px 1px 2px rgba(255, 255, 255, 0.25);
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.25;

  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
  font-size: 0.875rem;
  font-weight: normal;
  `}
`;
