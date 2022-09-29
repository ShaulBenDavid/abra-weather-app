// Types
import { useState } from "react";
import useMediaQuery from "../../../../Hooks/useMediaQuery";
import {
  HOME_EMPTY_DETAILS,
  HOME_EMPTY_DETAILS_MOBILE,
  USE_MEDIA_QUERY,
} from "../../../../Utils/Constants";
// Styles
import {
  StyledEmptyHomePage,
  StyledButtonsWrapper,
  StyledGeoLocationButton,
  StyledSearchButton,
  EmptyHomePageWrapper
} from "./style";

const EmptyHome = () => {
  const [coords, setCoords] = useState({});
  // Matches
  const matches = useMediaQuery(USE_MEDIA_QUERY);
  const getDetails = () => {
    if (matches) return { ...HOME_EMPTY_DETAILS };
    return { ...HOME_EMPTY_DETAILS_MOBILE };
  };

  // ---- Get geo location ----
  const getGeoLocation = () =>  {
   if (navigator.geolocation) {
     console.log(1)
     navigator.geolocation.getCurrentPosition(showPosition);
   }
  }
  const showPosition = (position: GeolocationPosition) => {
    const newPosition = position.coords.latitude + "," + position.coords.longitude;
    setCoords(newPosition);
    console.log(2)
  }
  console.log(coords)

  // Handle location click
  const handleLocationClick = () => {
    getGeoLocation();
  };

  return (
    <EmptyHomePageWrapper>
      {" "}
      <StyledEmptyHomePage {...getDetails()} />
      {/* Buttons only for mobile */}
      {!matches && (
        <StyledButtonsWrapper>
          <StyledGeoLocationButton variant="white" onClick={handleLocationClick}>
            Open location services
          </StyledGeoLocationButton>
          <StyledSearchButton variant="inverted">
            Search city
          </StyledSearchButton>
        </StyledButtonsWrapper>
      )}
    </EmptyHomePageWrapper>
  );
};

export default EmptyHome;
