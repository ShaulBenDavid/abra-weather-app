import styled, { keyframes } from "styled-components";
import Alert from "../../Components/Ui/Alert";
import getMediaQuery from "../../Utils/GetMediaQuery";



export const StyledFvoriteAlert = styled(Alert)`
    width: 493px;
    height: 86px;
    justify-content: center;
    position: fixed;
    bottom: 127px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 6;
    p {
        width: fit-content;
    }
    /* Tablet */
    ${getMediaQuery.between("changePoint", "desktop")`
        width: 434px;
        bottom: 54px;
    `}
    /* Mobile */
    ${getMediaQuery.lessThan("mobile")`
        width: 327px;
        bottom: 128px;
    `}
`