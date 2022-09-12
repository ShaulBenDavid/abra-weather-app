import styled from "styled-components";
// Component
import EmptyPage from "../../Components/Ui/EmptyPage";
import LoadingSpinner from "../../Components/Ui/LoadingSpinner";
import SearchBox from "../../Components/Ui/SearchBox";
import SearchResults from "../../Components/SearchElements/SearchResults";

// Search Wrapper
export const StyledSearch = styled(SearchBox)`
  margin: 0 auto;
`;

// Styled search results
export const StyledSearchResults = styled(SearchResults)``;

export const StyledNoResultContainer = styled.div`
  padding: 64px 30px;
`;

// Custom loader
export const StyledLoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledLoader = styled(LoadingSpinner)`
  display: inline-block;
  width: 60px;
  height: 60px;

  &::after {
    width: 40px;
    height: 40px;
    border: 6px solid ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary} transparent
      ${({ theme }) => theme.primary} transparent;
  }
`;

// Styled empty search
export const StyledEmptySearch = styled(EmptyPage)`
  width: 100%;
  height: 100%;
  img {
    opacity: 0.4;
  }
  p {
    color: ${({ theme }) => theme.secondary};
    line-height: 1.5;
  }
`;
