import { generateMedia } from "styled-media-query";

const getMediaQuery = generateMedia({
    desktop: "1920px",
    tablet: "1280px",
    changePoint: "1207px",
    mobile: "760px"
})

export default getMediaQuery;