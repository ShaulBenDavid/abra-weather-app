import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import getMediaQuery from "../../../../Utils/GetMediaQuery";
// Types
import { StyleNavProps } from "./types";

// Nav links
export const NavBarWrapper = styled.nav`
  display: flex;
  column-gap: 63px;
  height: 100%;
  margin-left: 176px;
  /* 1280px Screen */
  ${getMediaQuery.between("mobile", "desktop")`
    column-gap: 8px;
    margin-left: 16px;
  `}
`;
export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 15px;
  column-gap: 8px;
  height: 100%;
  font-size: 1.125rem;
  font-weight: bold;
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  p {
    margin-top: 5px;
  }

  ${(props: StyleNavProps) => props.active === "true" && css`
    &::before {
      content: "";
      width: 100%;
      height: 5px;
      background-color: ${({ theme }) => theme.white};
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    } 
  `}

    /* 1280px Screen */
  ${getMediaQuery.between("mobile", "desktop")`
    padding: 0 12px;
  `}
`;