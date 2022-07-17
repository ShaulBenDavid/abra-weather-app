import styled from "styled-components";
// Components
import { IconMoonDark, IconSunDrak } from "../IconsComponent";

export const ToggleSwitchWrapper = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 100px;
  width: 73px;
  height: 40px;
  border: solid 1px ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.white};

`;

// The Switch Button
export const SwitchButton = styled.label`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  left: 4px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.fadeText};
  transition: all .25s linear;
`;
// Check box
export const FunctionCheckBox = styled.input.attrs({ type: 'checkbox' })`   
    opacity: 0;

    &:checked ~ ${SwitchButton} {
        left: 35px;
    }
`;

// Icon container
export const ToggleIconWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 0 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  `;
// Mode Temperature
export const StyledTemperature = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1;
  color: ${({ theme }) => theme.secondary};
  position: relative;
  margin-top: 3px;
  margin-right: 7px;

  &::after {
    content: "";
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    border: solid 2px ${({ theme }) => theme.secondary};
  }
`;


  // Mode Type
// IconMoonDrak
export const StyledIconMoonDark = styled(IconMoonDark)`
  width: 26px;
  height: 27px;
`;
// IconSunDrak
export const StyledIconSunDrak = styled(IconSunDrak)`
  width: 26px;
  height: 27px;
`;
