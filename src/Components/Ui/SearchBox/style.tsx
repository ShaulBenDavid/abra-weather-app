import styled from "styled-components";
// components
import { IconSearchDrak } from "../IconsComponent";

// Search container
export const StyledSearchContainer = styled.label`
  position: relative;
  width: 372px;
  height: 54px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 54px;
    left: 0;
    top: 0;
    border-radius: 15px;
    box-shadow: inset -6px 4px 4px 0 rgba(255, 255, 255, 0.1), inset 2px -3px 6px 0 rgba(0, 0, 0, 0.1);

  }
`;
// Search Icon
export const StyledSearchIcon = styled(IconSearchDrak)`
  position: absolute;
  right: 24px;
  top: 12px;
  width: 30px;
  height: 30px;
`;
// Input
export const StyledInputSearch = styled.input`
  all: unset;
  width: 75%;
  height: 100%;
  border: none;
  margin-left: 24px;
  font-size: 1.125rem;
  font-weight: bold;
  color: ${({ theme }) => theme.black};
  background: inherit;

  &::placeholder {
    color: ${({ theme }) => theme.gray};
  }
`;
