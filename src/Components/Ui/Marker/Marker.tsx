// Types
import { MarkerProps } from "./types";
// Styles
import {
  StyledMarkerWrapper,
  StyledWindow,
  StyledWindowArrow,
} from "./style";

const Marker = ({ children, variant, className }: MarkerProps) => {
  return (
    <StyledMarkerWrapper className={className} variant={variant}>
      <StyledWindow variant={variant}>
        <StyledWindowArrow />
        <p>{children}</p>
      </StyledWindow>
    </StyledMarkerWrapper>
  );
};

export default Marker;
