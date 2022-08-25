import { generateMedia } from "styled-media-query";

import { DESKTOP_SIZE, TABLET_SIZE, CHANGE_POINT_SIZE, MOBILE_SIZE } from "./Constants";

// Media query for styled component
const getMediaQuery = generateMedia({
    desktop: DESKTOP_SIZE,
    tablet: TABLET_SIZE,
    changePoint: CHANGE_POINT_SIZE,
    mobile: MOBILE_SIZE
})

export default getMediaQuery;