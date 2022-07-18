import styled from "styled-components";
import { FormInputContainer } from "../../Components/FromInput/style";
// Components
import { IconLogo } from "../../Components/IconsComponent";
// Page wrapper
export const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// Logo
export const StyledLogo = styled(IconLogo)`
  position: absolute;
  top: 20px;
  left: 74px;
  width: 122px;
  height: 79px;
`;
// Login container
export const LoginContainer = styled.div`
  width: 732px;
  /* height: 649px; */
  border-radius: 30px;
  box-shadow: 0 4px 40px 0 rgba(0, 0, 0, 0.16);
  background-color: ${({ theme }) => theme.white};
  padding: 54px;
`;
// Title
export const LoginTitle = styled.h1`
  text-align: center;
  font-size: 3.125rem;
  font-weight: 900;
  color: ${({ theme }) => theme.secondary};
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
`;
// Line breaker p
export const BreakLineP = styled.div`
  font-size: 14px;
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
`;
