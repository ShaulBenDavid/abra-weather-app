import React from "react";

export type FormInputProps = {
  label: string;
  value: string;
  errMessage: string;
  pattern: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
