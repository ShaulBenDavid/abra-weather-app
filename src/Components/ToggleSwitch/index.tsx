import React from "react";
// Style
import * as S from "./style";

// Values
const FARENHEIT: string = "F";
const CELCIUES: string = "C";
// Types
interface ToggleSwitchProps {
  switchType: "mode" | "temp";
}

const ToggleSwitch = ({ switchType }: ToggleSwitchProps) => {
  return (
    <S.ToggleSwitchWrapper>
      <S.FunctionCheckBox />
      <S.SwitchButton />
      {/* icons */}
      <S.ToggleIconWrapper>
        {switchType === "mode" && (
          <>
            <S.StyledIconMoonDark />
            <S.StyledIconSunDrak />
          </>
        )}
        {switchType === "temp" && (
          <>
            <S.StyledTemperature>{FARENHEIT}</S.StyledTemperature>
            <S.StyledTemperature>{CELCIUES}</S.StyledTemperature>
          </>
        )}
      </S.ToggleIconWrapper>
    </S.ToggleSwitchWrapper>
  );
};

export default ToggleSwitch;
