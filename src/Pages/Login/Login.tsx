import React, { FormEventHandler, useEffect, useState } from "react";

import { setUser, UserProps } from "../../Redux/User/User";
import { useAppDispatch } from "../../Redux/hooks";
import { PostFetchApi } from "../../Services/FetchApi";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
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
import { LoginChangeEventProps, FormFieldProps, LoginProps } from "./types";

// DEFAULT VALUES
const INPUT_DEFAULT = {
  username: "",
  password: "",
};

const Login = () => {
  const dispatch = useAppDispatch();
  // State
  const [formField, setFormField] = useState<FormFieldProps>(INPUT_DEFAULT);
  const [formValid, setFormValid] = useState<boolean>(true);
  const [loginFailed, setLoginFailed] = useState<boolean>(false);
  const { username, password } = formField;


  // Navigate
  const navigate = useNavigate();

  // Handle login failed
  const handleFailedLogin = () => {
    setLoginFailed(true);
    const timer = setTimeout(() => {
      setLoginFailed(false);
    }, 10 * 1000);
    return () => clearTimeout(timer);
  };

  // Mutation
  const mutation: UseMutationResult<UserProps, Error, LoginProps> = useMutation<
    UserProps,
    Error,
    LoginProps
  >({
    mutationFn: (payload: LoginProps): Promise<UserProps> =>
      PostFetchApi("/auth/login/", payload),
    // On success
    onSuccess: (data: UserProps) => {
      console.log(data);
      dispatch(setUser(data));
      navigate("/");
    },
    // On error
    onError: (err: Error) => {
      console.log(err);
      handleFailedLogin();
    },
  });

  // Handle input value and check validation
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
    mutation.mutate(payload);
  };

  return (
    <S.LoginWrapper>
      {/* Logo */}
      <S.StyledLogo />
      {/* Login box */}
      <S.LoginContainer>
        <S.LoginTitle>Log in</S.LoginTitle>
        {/* Error message */}
        {loginFailed && (
          <S.StyledErrorBox severity="error">
            Email or password are incorrect. Please chack and try again.
          </S.StyledErrorBox>
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
          <S.ButtonWrapper>
            <Button variant="primary" type="submit" disabled={formValid || mutation.isLoading}>
              {mutation.isLoading ? <LoadingSpinner /> : "Log in"}
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
