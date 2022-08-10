import styled from "styled-components";
import getMediaQuery from "./Utils/GetMediaQuery";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    ${({ theme }) => theme.gradientDeg}, 
    ${({ theme }) => theme.gradientColor1}, 
    ${({ theme }) => theme.gradientColor2}
    ),
    linear-gradient(to bottom, #fff, #fff);
  height: 100vh;
  overflow: hidden;
  /* 414px Screen */
  ${getMediaQuery.lessThan("mobile")`
    height: 100%;
  `}
`;
