import { useRef } from "react";
// Components
import HourlyWheatherItem from "../HourlyWheatherItem";
import { ReactComponent as ArrowB } from "./Assets/vuesax_linear_arrow-square-left.svg";
// Types
import { HourlyWeatherProps } from "./types";
// Styles
import {
  StyledArrowButtonWrapper,
  StyledHourlyWeatherWrapper,
  StyledArrowButton,
} from "./style";

const HourlyWeather: React.FC<HourlyWeatherProps> = ({ dataByHour }) => {
  // Scrolling
  const myRef: React.MutableRefObject<any> = useRef(null);
  const handleScroll = (num: any) => {
    myRef.current.scrollBy(num, 0);
  };
  return (
    <>
      <StyledHourlyWeatherWrapper ref={myRef}>
        {dataByHour.map((data) => 
          <HourlyWheatherItem key={data.date} data={data} />
        )}
      </StyledHourlyWeatherWrapper>
      {/* Slide buttons */}
      <StyledArrowButtonWrapper>
        {/* Left */}
        <StyledArrowButton onClick={() => handleScroll(-200)}>
          <ArrowB />
        </StyledArrowButton>
        {/* Right */}
        <StyledArrowButton onClick={() => handleScroll(200)}>
          <ArrowB />
        </StyledArrowButton>
      </StyledArrowButtonWrapper>
    </>
  );
};

export default HourlyWeather;
