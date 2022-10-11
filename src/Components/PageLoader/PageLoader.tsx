// Components
import LoadingSpinner from "../Ui/LoadingSpinner";
// Styles
import { StyledPageLoaderWrapper } from "./style";

const PageLoader = () => {
  return (
    <StyledPageLoaderWrapper>
      <LoadingSpinner />
    </StyledPageLoaderWrapper>
  );
};

export default PageLoader;
