

export interface CloudsProps {
    numberOfClouds: number;
}

export type CloudProps = {
    positionY: number;
    delay: number;
    speed: number;
}


// Constants
export const MAX_CLOUD_SPEED: number = 20;
export const MIN_CLOUD_SPEED: number = 10;