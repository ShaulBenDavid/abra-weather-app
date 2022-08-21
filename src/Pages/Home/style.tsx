import styled from "styled-components";
import getMediaQuery from "../../Utils/GetMediaQuery";
// components
import SearchFailed from "../../Components/Ui/SearchFailed";
// Wrapper
export const HomeWrapper = styled.div`
  overflow-y: auto;
  height: 100vh;
`;

// custom faild search
export const HomeFailedSearch = styled(SearchFailed)`
  width: 416px;
  margin: 0 auto;
  margin-top: 196px;
  /* Less than 1920px */
  ${getMediaQuery.lessThan("desktop")`
    margin-top: 80px;
  `}
`;
