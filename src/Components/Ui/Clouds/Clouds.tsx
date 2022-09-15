import CloudImg from "./Assets/Cloud.svg";
// Types
import { CloudProps, CloudsProps, MAX_CLOUD_SPEED, MIN_CLOUD_SPEED } from "./types";
// Styles
import { StyledCloudsWrapper, StyledCloudImg } from "./style";
import { useMemo } from "react";

const Clouds: React.FC<CloudsProps> = ({ numberOfClouds }) => {
  const clouds: CloudProps[] = useMemo(() => {
    const newClouds: CloudProps[] = [];
    for (let i = 0; i < numberOfClouds; i++) {
      const cloud = {
        positionY: Math.random() * 100,
        delay: Math.random() * 10,
        speed: Math.random() * MAX_CLOUD_SPEED + MIN_CLOUD_SPEED,
      };
      newClouds.push(cloud);
    }
    return newClouds;
  }, [numberOfClouds]);

  return (
    <StyledCloudsWrapper>
      {clouds.map((cloud: CloudProps) => (
        <StyledCloudImg
          src={CloudImg}
          alt="cloud"
          key={cloud.speed}
          positionY={cloud.positionY}
          delay={cloud.delay}
          speed={cloud.speed}
        />
      ))}
    </StyledCloudsWrapper>
  );
};

export default Clouds;
