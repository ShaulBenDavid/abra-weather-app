import React from "react";
// Components
import Button from "../../Components/Button";
import FromInput from "../../Components/FromInput";
import {
  IconFacebookLogo,
  IconGoogleLogo,
} from "../../Components/IconsComponent";

// Styles
import * as S from "./style";

const Login = () => {
  return (
    <S.LoginWrapper>
      {/* Logo */}
      <S.StyledLogo />
      {/* Login box */}
      <S.LoginContainer>
        <S.LoginTitle>Log in</S.LoginTitle>
        {/* Form */}
        <S.StyledLoginForm>
          <FromInput
            label="Email Account"
            placeholder="example@example.com..."
            onChange={() => {}}
            type="email"
            validError={false}
          />
          <FromInput
            label="Password"
            placeholder="6 characters and digit numbers..."
            onChange={() => {}}
            type="password"
            validError={false}
          />
          <S.ButtonWrapper>
            <Button variant="primary" disabled={true} type="submit">
              Log in
            </Button>
          </S.ButtonWrapper>
        </S.StyledLoginForm>

        {/* Break line */}
        <S.BreakLineWrapper>
          <S.StyledHr></S.StyledHr>
          <S.BreakLineP>Or log in with</S.BreakLineP>
          <S.StyledHr></S.StyledHr>
        </S.BreakLineWrapper>

        {/* Logins buttons wrapper */}
        <S.LoginButtonWrapper>
          <Button variant="link" type="submit">
            <IconFacebookLogo />
            Log in with Facebook
          </Button>
          <Button variant="link" type="submit">
            <IconGoogleLogo />
            Log in with Google
          </Button>
        </S.LoginButtonWrapper>
      </S.LoginContainer>
    </S.LoginWrapper>
  );
};

export default Login;
