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
  background: inherit;
  margin-left: 24px;
  font-size: 1.125rem;
  font-weight: bold;
  color: ${({ theme }) => theme.black};

  &::placeholder {
    color: ${({ theme }) => theme.gray};
  }
`;
