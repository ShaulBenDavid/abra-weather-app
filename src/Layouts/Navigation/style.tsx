import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
// Components
import { IconLogo } from "../../Components/Ui/IconsComponent";
import getMediaQuery from "../../Utils/GetMediaQuery";
// Types
import { StyleNavProps } from "./types";
// Navigation wrapper
export const NavigationWrapper = styled.header`
  width: 100%;
  height: 94px;
  padding: 0 70px;
  background-color: ${({ theme }) => theme.primary};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* 1280px Screen */
  ${getMediaQuery.between("mobile", "desktop")`
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    padding: 0 50px;
  `}
`;
// Logo
export const NavBarLogo = styled(IconLogo)`
  min-width: 110px;
  max-width: 110px;
  min-height: 72px;
  max-height: 72px;
  display: inline-block;
  /* 1280px Screen */
  ${getMediaQuery.between("mobile", "desktop")`
    min-width: 86px;
    max-width: 86px;
    min-height: 56px;
    max-height: 56px;
  `}
`;

// Nav links
export const LinksWrapper = styled.nav`
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

// Search Wrapper
export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 124px;
  /* 1280px Screen */
  ${getMediaQuery.between("mobile", "desktop")`
    margin: 0 auto;
  `}
`;
// Switch button wrapper map
export const SwitchButtonWrapper = styled.div`
  margin-left: 124px;
  /* 1280px Screen */
  ${getMediaQuery.between("mobile", "desktop")`
    order: 5;
  `}
`;

// Switch box wrapper
export const SwitchBoxWrapper = styled.div`
  display: flex;
  column-gap: 30px;
  margin-left: 80px;
  /* 1280px Screen */
  ${getMediaQuery.between("mobile", "desktop")`
    margin-left: 40px;
  `}
`;

// Logout button wrapper
export const LogoutButtonWrapper = styled.div`
  margin-left: 72px;
  /* 1280px Screen */
  ${getMediaQuery.between("mobile", "desktop")`
    order: 6;
    margin-left: 32px;
  `}
`;

// nav link button p
export const NavLinkButtonP = styled.span`
  /* 1280px Screen */
  ${getMediaQuery.between("mobile", "desktop")`
    display: none;
  `}
`;
