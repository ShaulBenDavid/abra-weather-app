import styled from "styled-components";

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
`;
export const StyledMarkerIcon = styled.img`
  width: 60px;
`;
