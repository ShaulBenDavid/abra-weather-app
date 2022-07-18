import React from "react";

export interface FormInputProps {
  label: string;
  otherprops?: any;
  placeholder: string;
  validError: boolean;
  type: string;
  value: string;
  name: string;
  required: boolean;
  errMessage: string;
  pattern?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
