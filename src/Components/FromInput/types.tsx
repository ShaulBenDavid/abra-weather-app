import React from "react";

export interface FormInputProps {
  label: string;
  otherprops?: any;
  placeholder: string;
  validError: boolean;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
