// Types
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
} from "./style";

const EmptyHome = () => {
  // Matches
  const matches = useMediaQuery(USE_MEDIA_QUERY);
  const getDetails = () => {
    if (matches) return { ...HOME_EMPTY_DETAILS };
    return { ...HOME_EMPTY_DETAILS_MOBILE };
  };

  return (
    <div>
      {" "}
      <StyledEmptyHomePage {...getDetails()} />
      {/* Buttons only for mobile */}
      {!matches && (
        <StyledButtonsWrapper>
          <StyledGeoLocationButton variant="white">
            Open location services
          </StyledGeoLocationButton>
          <StyledSearchButton variant="inverted">
            Search city
          </StyledSearchButton>
        </StyledButtonsWrapper>
      )}
    </div>
  );
};

export default EmptyHome;
