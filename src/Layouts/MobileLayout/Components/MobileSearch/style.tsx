import styled from "styled-components";
import getMediaQuery from "../../../../Utils/GetMediaQuery";
// Wrapper
export const MobileSearchWrapper = styled.div`
  width: 100%;
  height: 80vh;
`;
// Container
export const MobileSearchContainer = styled.div`
  width: 354px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  ${getMediaQuery.lessThan("mobile")`
    width: 100%;
  `}
`;
// Exit button
export const ArrowButton = styled.button`
  all: unset;
  cursor: pointer;
  margin-bottom: 16px;
`

