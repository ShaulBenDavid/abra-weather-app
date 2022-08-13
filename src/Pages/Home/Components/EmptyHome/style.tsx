import styled from "styled-components";

import getMediaQuery from "../../../../Utils/GetMediaQuery";

export const EmptyHomeContainer = styled.section`
  width: 296px;
  height: 266px;
  margin: 0 auto;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  ${getMediaQuery.between("tablet", "desktop")`
    margin-top: 52px;
  `}
`;

export const WeatherMapImg = styled.img`
  width: 120px;
  height: 120px;
`;

export const EmptyHomeTitle = styled.h3`
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1), -1px 1px 2px rgba(255, 255, 255, 0.25);
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.25;
  text-align: center;
  color: ${({ theme }) => theme.white};
  margin-top: 36px;
  `

export const EmptyHomeP = styled.p`
  font-size: 1.125rem;
  line-height: 1.5;
  text-align: center;
  color: ${({ theme }) => theme.white};
  margin-top: 16px;
`
