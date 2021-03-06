import styled from "styled-components";
import getMediaQuery from "./Utils/GetMediaQuery";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(241deg, #47bfdf, #4a91ff), linear-gradient(to bottom, #fff, #fff);
  height: 100vh;

  /* 414px Screen */
   ${getMediaQuery.lessThan("mobile")`
    height: 100%;
  `}
`;