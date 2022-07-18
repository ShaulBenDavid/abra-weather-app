import React, { useState } from "react";
// Components
import Button from "../../Components/Button";
import FromInput from "../../Components/FromInput";
import {
  IconFacebookLogo,
  IconGoogleLogo,
  IconInfoCircle,
} from "../../Components/IconsComponent";
// Styles
import * as S from "./style";
// Types
import { LoginChangeEventProps, FormFieldProps } from "./types";
// values
const INPUT_DEFAULT = {
  username: '',
  password: '',
}

const Login = () => {
  // State
  const [formField, setFormField] = useState<FormFieldProps>(INPUT_DEFAULT);
  const { username, password } = formField;

  // Handle submit
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
  }
  // Handle input value
  const handleChange = (event: LoginChangeEventProps) => {
    const { value, name } = event.target;
    setFormField({ ...formField, [name]: value });
  }
  return (
    <S.LoginWrapper>
      {/* Logo */}
      <S.StyledLogo />
      {/* Login box */}
      <S.LoginContainer>
        <S.LoginTitle>Log in</S.LoginTitle>
          {/* Error message */}
          <S.InternetError>
            <IconInfoCircle />
            <p>
              Connection is lost. Please check your connection device and try
              again.
            </p>
          </S.InternetError>
        {/* Form */}
        <S.StyledLoginForm onSubmit={handleSubmit}>
          <FromInput
            type="email"
            label="Email Account"
            placeholder="example@example.com..."
            onChange={handleChange}
            value={username}
            name='username'
            pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
            required
            errMessage="Invalid email address. Please try again"
            />
          <FromInput
            type="password"
            label="Password"
            placeholder="6 characters and digit numbers..."
            onChange={handleChange}
            value={password}
            name="password"
            pattern='^[A-Za-z0-9]{6,16}'
            required
            errMessage="Invalid password. Please try again"
          />
          {/* Submit */}
          <S.ButtonWrapper>
            <Button variant="primary" type="submit">
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
