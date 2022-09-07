import React, { FormEventHandler, useEffect, useState } from "react";

import { selectUser } from "../../Redux/User/User.redux";
import { useAppSelector } from "../../Redux/hooks";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../../Services/Authentication";
// Components
import Button from "../../Components/Ui/Button";
import FromInput from "../../Components/Ui/FromInput";
import {
  IconFacebookLogo,
  IconGoogleLogo,
} from "../../Components/Ui/IconsComponent";
import LoadingSpinner from "../../Components/Ui/LoadingSpinner";
// Styles
import * as S from "./style";
// Types
import { LoginChangeEventProps, FormFieldProps } from "./types";

// DEFAULT VALUES
const INPUT_DEFAULT = {
  username: "",
  password: "",
};

const Login = () => {
  // User
  const currentUser = useAppSelector(selectUser);
  // State
  const [formField, setFormField] = useState<FormFieldProps>(INPUT_DEFAULT);
  const [formValid, setFormValid] = useState<boolean>(true);
  const { username, password } = formField;
  const { fetchLogin, authError, loginMutation } = useAuthentication();
  // Block contected user to get in to login page
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  // Handle input value
  const handleChange = (event: LoginChangeEventProps) => {
    const { value, name } = event.target;
    const newObj = { ...formField, [name]: value };
    setFormField(newObj);
  };

  // Disabled button
  useEffect(() => {
    if (
      /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(username) &&
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/.test(
        password
      )
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [username, password]);


  // Handle submit
  const handleSubmit: FormEventHandler<HTMLFormElement> = (
    event: React.SyntheticEvent
  ) => {
    event.preventDefault();

    const payload = {
      email: username,
      password,
    };
    fetchLogin(payload);
  };

  return (
    <S.LoginWrapper>
      {/* Logo */}
      <S.StyledLogo />
      {/* Login box */}
      <S.LoginContainer>
        <S.LoginTitle>Log in</S.LoginTitle>
        {/* Error message */}
        {authError && (
          <S.StyledErrorBox severity="error">{authError}</S.StyledErrorBox>
        )}
        {/* Form */}
        <S.StyledLoginForm onSubmit={handleSubmit}>
          <FromInput
            type="email"
            label="Email Account"
            placeholder="example@example.com..."
            onChange={handleChange}
            value={username}
            name="username"
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
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})"
            required
            errMessage="Invalid password. Please try again"
          />
          {/* Submit */}
          <S.LoginButton
            variant="primary"
            type="submit"
            disabled={formValid || loginMutation.isLoading}
          >
            {loginMutation.isLoading ? <LoadingSpinner /> : "Log in"}
          </S.LoginButton>
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
