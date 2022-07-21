import { generateMedia } from "styled-media-query";

const getMediaQuery = generateMedia({
    desktop: "1920px",
    tablet: "1280px",
    mobile: "760px"
})

export default getMediaQuery;