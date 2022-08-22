import { useRef } from "react";
// Components
import HourlyWheatherItem from "../HourlyWheatherItem";
import { ReactComponent as ArrowB } from "./Assets/vuesax_linear_arrow-square-left.svg";
// Styles
import {
  StyledArrowButtonWrapper,
  StyledHourlyWeatherWrapper,
  StyledArrowButton,
} from "./style";

const HourlyWeather = () => {
  // Scrolling
  const myRef: React.MutableRefObject<any> = useRef(null);
  const handleScroll = (num: any) => {
    myRef.current.scrollBy(num, 0);
  };
  return (
    <>
      <StyledHourlyWeatherWrapper ref={myRef}>
        <HourlyWheatherItem />
        <HourlyWheatherItem />
        <HourlyWheatherItem />
        <HourlyWheatherItem />
        <HourlyWheatherItem />
        <HourlyWheatherItem />
        <HourlyWheatherItem />
        <HourlyWheatherItem />
        <HourlyWheatherItem />
        <HourlyWheatherItem />
        <HourlyWheatherItem />
        <HourlyWheatherItem />
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
