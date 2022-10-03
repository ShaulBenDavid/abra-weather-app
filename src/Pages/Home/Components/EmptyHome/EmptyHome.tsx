// Types
import useMediaQuery from "../../../../Hooks/useMediaQuery";
import { useAppDispatch } from "../../../../Redux/hooks";
import { setIsMobileSearchOpen } from "../../../../Redux/Search/Search";
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
  StyledSpinner,
} from "./style";

const EmptyHome = () => {
  const dispatch = useAppDispatch();
  // Matches
  const matches = useMediaQuery(USE_MEDIA_QUERY);
  const getDetails = () => {
    if (matches) return { ...HOME_EMPTY_DETAILS };
    return { ...HOME_EMPTY_DETAILS_MOBILE };
  };

  // Search service by coords
  const { handleSearchByCoords, loading } = useSearchByCoords();

  // handle mobile search
  const handleMobileSearch = () => dispatch(setIsMobileSearchOpen());

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
          <StyledGeoLocationButton
            variant="white"
            onClick={handleLocationClick}
          >
            {loading ? <StyledSpinner /> : "Open location services"}
          </StyledGeoLocationButton>
          <StyledSearchButton variant="inverted" onClick={handleMobileSearch}>
            Search city
          </StyledSearchButton>
        </StyledButtonsWrapper>
      )}
    </EmptyHomePageWrapper>
  );
};

export default EmptyHome;
