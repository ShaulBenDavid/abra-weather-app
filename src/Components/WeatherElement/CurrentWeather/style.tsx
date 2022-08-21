import styled from "styled-components";

// Container
export const CurrentWeatherContainer = styled.div`
  color: ${({ theme }) => theme.white};
  width: 502px;
`;
// Place title
export const PlaceTitle = styled.h1`
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1),
    -1px 1px 2px rgba(255, 255, 255, 0.25);
  font-size: 3.125rem;
  font-weight: 900;
  line-height: 1.2;
  text-transform: capitalize;
`;
//Temp container
export const CurrentTempContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 180px;
  margin-top: 16px;
  overflow: hidden;
`;
// Temp number
export const TempNumber = styled.p`
  span {
    position: relative;
    line-height: 1em;
    &::after {
      content: "";
      position: absolute;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: solid 8px ${({ theme }) => theme.white};
      top: 21px;
      right: -30px;
    }
  }

  span:first-of-type {
    font-size: 8.125rem;
    margin-left: 32px;
  }
  span:last-child {
    font-size: 3.125rem;
    &::after {
      width: 10px;
      height: 10px;
      border: solid 4px ${({ theme }) => theme.white};
      top: 8px;
      right: -18px;
    }
  }
`;
// Temp icom
export const TempIcon = styled.div``;
// Weather condition
export const WeatherCondition = styled.h3`
  margin-top: 16px;
  text-transform: capitalize;
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1), -1px 1px 2px rgba(255, 255, 255, 0.25);
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.25;
  `;
// Time zone
export const TimeZone = styled.p`
  margin-top: 16px;
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1), -1px 1px 2px rgba(255, 255, 255, 0.25);
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.25;
`;
