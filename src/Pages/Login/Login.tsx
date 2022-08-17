import React, { FormEventHandler, useEffect, useState } from "react";

import { setUser, UserProps } from "../../Redux/User/User";
import { useAppDispatch } from "../../Redux/hooks";
import { PostFetchApi } from "../../Services/FetchApi";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
// Components
import Button from "../../Components/Ui/Button";
import FromInput from "../../Components/Ui/FromInput";
import {
  IconFacebookLogo,
  IconGoogleLogo,
} from "../../Components/Ui/IconsComponent";
// Styles
import * as S from "./style";
// Types
import { LoginChangeEventProps, FormFieldProps, PayloadProps } from "./types";

// DEFAULT VALUES
const INPUT_DEFAULT = {
  username: "",
  password: "",
};

const Login = () => {
  const dispatch = useAppDispatch();
  // State
  const [formField, setFormField] = useState<FormFieldProps>(INPUT_DEFAULT);
  const [formValid, setFormValid] = useState(true);
  const { username, password } = formField;

  // Mutation
  const mutation: UseMutationResult<UserProps, Error, PayloadProps> =
    useMutation<UserProps, Error, PayloadProps>({
      mutationFn: (payload: PayloadProps): Promise<UserProps> =>
        PostFetchApi("/auth/login/", payload),
      // On success
      onSuccess: (data: UserProps) => {
        console.log(data);
        dispatch(setUser(data));
      },
      // On error
      onError: (err: Error) => {
        console.log(err);
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
        <S.StyledErrorBox severity="error">
          Connection is lost. Please check your connection device and try again.
        </S.StyledErrorBox>
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
            <Button variant="primary" type="submit" disabled={formValid}>
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
