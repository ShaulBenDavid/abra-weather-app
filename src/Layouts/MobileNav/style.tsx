import { Link } from "react-router-dom";
import styled from "styled-components";

// Nav bar
export const MobileNavbar = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 12px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  background-color: ${({ theme }) => theme.mobileNavBg};
  border-radius: 20px 20px 0 0;
  z-index: 10;
`;

// Link
export const MobileNavLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 4px;
  margin: 0 auto;

  p {
    font-size: 0.875rem;
    line-height: 1.25;
    text-align: center;
    color: ${({ theme }) => theme.mobileNavP};
  }
`;

export const MobileNavLinkB = styled.button`
  all: unset;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 4px;
  margin: 0 auto;
  cursor: pointer;

  p {
    font-size: 0.875rem;
    line-height: 1.25;
    text-align: center;
    color: ${({ theme }) => theme.mobileNavP};
  }
`

// divider
export const Divider = styled.div`
  width: 1px;
  height: 46px;
  background-color: ${({ theme }) => theme.mobileNavP};
`
