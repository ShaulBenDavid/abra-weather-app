import React from "react";
// Style
import * as S from "./style";
// Types
import { ToggleSwitchProps } from './types';

// Values
const FARENHEIT: string = "F";
const CELCIUES: string = "C";

const ToggleSwitch = ({ switchType, id }: ToggleSwitchProps) => {
  return (
    <S.ToggleSwitchWrapper>
      {/* CheckBox */}
      <S.FunctionCheckBox id={id}/>
      <S.SwitchButton htmlFor={id} />
      {/* icons */}
      <S.ToggleIconWrapper>
        {switchType === "mode" && (
          <>
            <S.StyledIconSunDrak />
            <S.StyledIconMoonDark />
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
