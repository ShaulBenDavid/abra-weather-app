import styled, { keyframes } from "styled-components";
// Types
import { CloudProps, MAX_CLOUD_SPEED, MIN_CLOUD_SPEED } from "./types";

// Animation
const CloudAnimation = keyframes`
    0% {
        right: -400px;
    }
    100% {
        right: 100%;
    }
`

// Clouds wrapper
export const StyledCloudsWrapper = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: 0;
    `;

// Cloud image
export const StyledCloudImg = styled.img<CloudProps>`
    position: absolute;
    animation: ${CloudAnimation} linear ${(props) => props.speed}s infinite;
    animation-delay: ${(prosp) => prosp.delay}s;
    right: -400px;
    top: ${(props) => props.positionY}%;
    width: ${(props) => (MAX_CLOUD_SPEED * MIN_CLOUD_SPEED) / props.speed}%;
`