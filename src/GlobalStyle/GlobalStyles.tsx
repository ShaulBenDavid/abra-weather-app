import { createGlobalStyle } from "styled-components";
import getMediaQuery from "../Utils/GetMediaQuery";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    height: -webkit-fill-available;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: Overpass;
    /* position: relative; */
  }
  h2 {
    font-size: 32px;
    font-weight: bold;
    line-height: 1.25;
    color: #444e72;
  }  
  
 h1 {
   text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1),
   -1px 1px 2px rgba(255, 255, 255, 0.25);
   font-size: 3.125rem;
   font-weight: 900;
   line-height: 1.2;
   text-transform: capitalize;
   color: #FFFF;
   /* Mobile */
   ${getMediaQuery.lessThan("changePoint")`
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.25;
  `}
}

`;
