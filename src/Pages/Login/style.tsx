import styled from "styled-components";
// Components
import getMediaQuery from "../../Utils/GetMediaQuery";
import { IconLogo } from "../../Components/Ui/IconsComponent";
import Alert from "../../Components/Ui/Alert";
import Button from "../../Components/Ui/Button";
// Page wrapper
export const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  z-index: 1;
  /* 414px Screen */
  ${getMediaQuery.lessThan("mobile")`
    justify-content: flex-end;
  `}
`;
// Logo
export const StyledLogo = styled(IconLogo)`
  position: absolute;
  top: 20px;
  left: 74px;
  width: 122px;
  height: 79px;
  
  /* 1280px Screen */
  ${getMediaQuery.between("tablet", "mobile")`
    left: 50px;
  `}
  /* 414px Screen */
  ${getMediaQuery.lessThan("mobile")`
    top: 56px;
    left: 50%;
    transform: translate(-50%);
    width: 148px;
    height: 97px;
  `}
`;
// Login container
export const LoginContainer = styled.div`
  width: 732px;
  z-index: 1;
  /* height: 649px; */
  border-radius: 30px;
  box-shadow: 0 4px 40px 0 rgba(0, 0, 0, 0.16);
  background-color: ${({ theme }) => theme.white};
  padding: 54px;
  /* 1280px Screen */
  ${getMediaQuery.between("tablet", "mobile")`
    width: 508px;
    padding: 40px 54px;
  `}
  /* 414px Screen */
  ${getMediaQuery.lessThan("mobile")`
    width: 100%;
    padding: 54px 30px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    margin-top: 184px;
  `}
`;
// Title
export const LoginTitle = styled.h1`
  text-align: center;
  font-size: 3.125rem;
  font-weight: 900;
  color: ${({ theme }) => theme.secondary};
  /* 414px Screen */
  ${getMediaQuery.lessThan("mobile")`
    font-size: 2rem;
    font-weight: bold;
  `}
`;
// Form
export const StyledLoginForm = styled.form`
  width: 354px;
  margin: 0 auto;
  margin-top: 54px;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  height: fit-content;
  /* 1280px Screen */
  ${getMediaQuery.between("tablet", "mobile")`
    margin-top: 24px;
  `}
  /* 414px Screen */
  ${getMediaQuery.lessThan("mobile")`
    margin-top: 40px;
    width: 100%;
  `} 
`;
// Button
export const LoginButton = styled(Button)`
  margin-top: 8px;
`
// Line breaker
export const BreakLineWrapper = styled.div`
  width: 100%;
  margin-top: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 1280px Screen */
  ${getMediaQuery.lessThan("tablet")`
    margin-top: 32px;
  `}
`;
// Line breaker p
export const BreakLineP = styled.div`
  font-size: 0.875rem;
  line-height: 1.25;
  text-align: center;
  color: ${({ theme }) => theme.secondary};
  margin: 0 16px;
  white-space: nowrap;
`;
// Hr
export const StyledHr = styled.span`
  width: 100%;
  height: 2px;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.grayBg};
`;
// Login Button Wrapper
export const LoginButtonWrapper = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;
  column-gap: 16px;
  /* 1280px Screen */
  ${getMediaQuery.lessThan("tablet")`
    margin-top: 32px;
  `}
  /* 414px Screen */
  ${getMediaQuery.lessThan("mobile")`
    flex-direction: column;
    row-gap: 39px;
  `} 
`;
// Internet Error
export const StyledErrorBox = styled(Alert)`
  margin: 0 auto;
  margin-top: 32px;

  p {
    font-size: 14px;
    color: #4d4d4d;
    width: 100%;
    margin-left: 16px;
  }

  & ~ ${StyledLoginForm} {
    margin-top: 32px;
  }
  /* 1280px Screen */
  ${getMediaQuery.between("tablet", "mobile")`
    margin-top: 24px;
  `}
  /* 414px Screen */
  ${getMediaQuery.lessThan("mobile")`
    margin-top: 40px;
    width: 100%;
  `} 
`;
