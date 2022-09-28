import styled from "styled-components";
import getMediaQuery from "../../../../Utils/GetMediaQuery";
// Components
import EmptyPage from "../../../../Components/Ui/EmptyPage";
import Button from "../../../../Components/Ui/Button";


// Empty home page
export const StyledEmptyHomePage = styled(EmptyPage)`
  margin-top: 200px;
  margin-bottom: 40px;
  /* Less than 1920px */
  ${getMediaQuery.between("changePoint", "desktop")`
    margin-top: 52px;
  `}
  /* Mobile */
  ${getMediaQuery.lessThan("changePoint")`
    margin-top: 63px;
  `}
`;

// Empty home Buttons
// Wrapper
export const StyledButtonsWrapper = styled.div`
    width: 264px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 16px;
`
// --- Geo location ---
export const StyledGeoLocationButton = styled(Button)`
    color: ${({ theme }) => theme.black};
    font-weight: bold;
`
// --- Search button ---
export const StyledSearchButton = styled(Button)`
    
`