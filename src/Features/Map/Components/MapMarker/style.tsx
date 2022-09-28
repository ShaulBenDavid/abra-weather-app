import styled from "styled-components";
import getMediaQuery from "../../../../Utils/GetMediaQuery";

// Marker
export const StyledMapMarker = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-right: 17px;
`;

// Marker icon
export const StyledIconWrapper = styled.span`
  width: 78px;
  height: 78px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.secondary};
  display: flex;
  justify-content: center;
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
      width: 61px;
  height: 61px;
  `}
`;
export const StyledMarkerIcon = styled.img`
  width: 60px;
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
      width: 47px;
  `}
`;

// Temp number
export const StyledTempNumber = styled.span`
  font-weight: bold;
  line-height: 1.25;
  text-align: center;
  font-size: 2rem;

  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
    font-size: 1.5rem;
  `}
`;
