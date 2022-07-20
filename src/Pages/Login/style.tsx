import styled from "styled-components";
import { FormInputContainer } from "../../Components/FromInput/style";
// Components
import { IconLogo } from "../../Components/IconsComponent";
// Page wrapper
export const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* 414px Screen */
  @media (max-width: 414px) {
    justify-content: flex-end;
  }
`;
// Logo
export const StyledLogo = styled(IconLogo)`
  position: absolute;
  top: 20px;
  left: 74px;
  width: 122px;
  height: 79px;
  
  /* 1280px Screen */
  @media (max-width: 1280px) {
    left: 50px;
  }
  /* 414px Screen */
  @media (max-width: 414px) {
    top: 56px;
    left: 50%;
    transform: translate(-50%);
    width: 148px;
    height: 97px;
  }
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
  @media (max-width: 1280px) {
    width: 508px;
    padding: 40px 54px;
  }
  /* 414px Screen */
  @media (max-width: 414px) {
    width: 100%;
    padding: 54px 30px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;
// Title
export const LoginTitle = styled.h1`
  text-align: center;
  font-size: 3.125rem;
  font-weight: 900;
  color: ${({ theme }) => theme.secondary};
  /* 414px Screen */
  @media (max-width: 414px) {
    font-size: 2rem;
    font-weight: bold;
  }
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
  @media (max-width: 1280px) {
    margin-top: 24px;
  }
  /* 414px Screen */
  @media (max-width: 414px) {
    margin-top: 40px;
    width: 100%;
  } 
`;
// Button
export const ButtonWrapper = styled.div`
  margin-top: 8px;
`;
// Line breaker
export const BreakLineWrapper = styled.div`
  width: 100%;
  margin-top: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 1280px Screen */
  @media (max-width: 1280px) {
    margin-top: 32px;
  }
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
  @media (max-width: 1280px) {
    margin-top: 32px;
  }
  /* 414px Screen */
  @media (max-width: 414px) {
    flex-direction: column;
    row-gap: 39px;
  } 
`;
// Internet Error
export const InternetError = styled.div`
  width: 354px;
  height: 84px;
  margin: 0 auto;
  margin-top: 32px;
  background-color: #ffe7e7;
  padding: 24px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  row-gap: 16px;

  p {
    font-size: 14px;
    /* line-height: 1.25; */
    color: #4d4d4d;
    width: 262px;
  }

  & ~ ${StyledLoginForm} {
    margin-top: 32px;
  }
  /* 1280px Screen */
  @media (max-width: 1280px) {
    margin-top: 24px;
  }
  /* 414px Screen */
  @media (max-width: 414px) {
    margin-top: 40px;
    width: 100%;
  } 
`;
