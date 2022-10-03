import styled from "styled-components";
import getMediaQuery from "../../../../Utils/GetMediaQuery";
// Components
import EmptyPage from "../../../../Components/Ui/EmptyPage";
import Button from "../../../../Components/Ui/Button";
import LoadingSpinner from "../../../../Components/Ui/LoadingSpinner";

// Empty home page wrapper
export const EmptyHomePageWrapper = styled.div`
  margin-top: 200px;
  /* Less than 1920px */
  ${getMediaQuery.between("changePoint", "desktop")`
    margin-top: 52px;
  `}
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
    margin-top: 63px;
  `}
`;
// Empty home page
export const StyledEmptyHomePage = styled(EmptyPage)`
  margin-bottom: 40px;
`;

// Empty home Buttons
// Wrapper
export const StyledButtonsWrapper = styled.div`
  width: 264px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 16px;
`;
// --- Geo location ---
export const StyledGeoLocationButton = styled(Button)`
  color: ${({ theme }) => theme.black};
  font-weight: bold;
`;
// --- Search button ---
export const StyledSearchButton = styled(Button)``;

// Loading spinner
export const StyledSpinner = styled(LoadingSpinner)`
  &::after {
    border-radius: 50%;
    border: 6px solid #222;
    border-color: #222 transparent #222 transparent;
  }
`;
