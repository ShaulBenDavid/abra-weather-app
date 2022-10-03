// Types
import useMediaQuery from "../../../../Hooks/useMediaQuery";
import useSearchByCoords from "../../../../Services/Weather/UseSearchByCoords";
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
  EmptyHomePageWrapper,
  StyledSpinner
} from "./style";

const EmptyHome = () => {
  // Matches
  const matches = useMediaQuery(USE_MEDIA_QUERY);
  const getDetails = () => {
    if (matches) return { ...HOME_EMPTY_DETAILS };
    return { ...HOME_EMPTY_DETAILS_MOBILE };
  };

  // Search service by coords
  const { handleSearchByCoords, loading } = useSearchByCoords();

  // Handle location click
  const handleLocationClick = () => {
    handleSearchByCoords();
  };

  return (
    <EmptyHomePageWrapper>
      {" "}
      <StyledEmptyHomePage {...getDetails()} />
      {/* Buttons only for mobile */}
      {!matches && (
        <StyledButtonsWrapper>
          <StyledGeoLocationButton variant="white" onClick={handleLocationClick}>
            {loading ? <StyledSpinner /> :"Open location services"}
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
