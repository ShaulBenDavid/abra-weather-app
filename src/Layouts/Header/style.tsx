import styled from "styled-components";
import Button from "../../Components/Ui/Button";
// Components
import { IconLogo } from "../../Components/Ui/IconsComponent";
import getMediaQuery from "../../Utils/GetMediaQuery";
import Marker from "../../Components/Ui/Marker";

// -------- Sections --------
export const RightSection = styled.div`
  width: 35%;
  display: flex;
  height: 100%;
  align-items: center;
  /* 1280px Screen */
  ${getMediaQuery.lessThan("tablet")`
    width: 30%;
  `}
`;

export const MiddleSection = styled.div`
  width: 30%;
  /* 1280px Screen */
  ${getMediaQuery.lessThan("tablet")`
    width: 40%;
  `}
`;

export const LeftSection = styled.div`
  width: 35%;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  /* 1280px Screen */
  ${getMediaQuery.lessThan("tablet")`
    width: 30%;
  `}
`;

// Navigation wrapper
export const NavigationWrapper = styled.header`
  width: 100%;
  min-height: 94px;
  padding: 0 70px;
  background-color: ${({ theme }) => theme.primary};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
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
// ---- Header button ----
export const HeaderButton = styled(Button)`
  position: relative;
  color: #fff;
`

// Button hover effect
export const HoverEffect = styled(Marker)`
  opacity: 0;
`;

// Switch button wrapper map
export const SwitchMapButton = styled(HeaderButton)`
  margin-left: 124px;
  /* 1280px Screen */
  ${getMediaQuery.lessThan("desktop")`
    order: 5;

    &:hover ${HoverEffect} {
      opacity: 1;
    }
  `}
  /* Between mobile and tablet */
  ${getMediaQuery.between("tablet", "desktop")`
      margin-left: 96px;
  `}
  /* 1280px Screen */
    ${getMediaQuery.lessThan("tablet")`
    margin-left: 80px;
  `}
`;

// Switch box wrapper
export const SwitchBoxWrapper = styled.div`
  display: flex;
  column-gap: 30px;
  margin-left: 80px;
  /* 1280px Screen */
  ${getMediaQuery.between("tablet", "desktop")`
    margin-left: 40px;
  `}
  /* Between mobile and tablet */
  ${getMediaQuery.between("mobile", "tablet")`
      margin-left: 20px;
      column-gap: 20px;
  `}
`;

// Logout button wrapper
export const HeaderLogoutButton = styled(HeaderButton)`
  margin-left: 72px;
  /* 1280px Screen */
  ${getMediaQuery.between("mobile", "desktop")`
    order: 6;
    margin-left: 32px;
    
    &:hover ${HoverEffect} {
      opacity: 1;
    }
  `}
`;

// nav link button p
export const NavLinkButtonP = styled.span`
  /* 1280px Screen */
  ${getMediaQuery.between("mobile", "desktop")`
    display: none;
  `}
`;
