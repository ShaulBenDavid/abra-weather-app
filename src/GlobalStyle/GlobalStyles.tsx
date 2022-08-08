import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
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

`;
