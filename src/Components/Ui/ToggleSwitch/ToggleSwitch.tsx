import React from "react";
// Style
import * as S from "./style";
// Types
import { ToggleSwitchProps } from "./types";

// Values
const FARENHEIT: string = "F";
const CELCIUES: string = "C";

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  switchType,
  id,
  onChange,
  defaultChecked,
  checked,
}) => {
  return (
    <S.ToggleSwitchWrapper>
      {/* CheckBox */}
      <S.FunctionCheckBox
        id={id}
        onChange={onChange}
        defaultChecked={defaultChecked}
        checked={checked}
      />
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
