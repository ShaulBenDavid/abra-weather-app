import React from "react";
// Style
import { ErrorP, FormInputContainer, StyledInput } from "./style";
// Types
import { FormInputProps } from "./types";

const FromInput = ({
  label,
  validError,
  type,
  onChange,
  required,
  errMessage,
  ...otherprops
}: FormInputProps) => {
  return (
    <div>
      <FormInputContainer validError={validError} className="FormInputContainer">
        <label>{label}</label>
        <StyledInput type={type} {...otherprops} onChange={onChange} />
      </FormInputContainer>
      <ErrorP>{errMessage}</ErrorP>
    </div>
  );
};

export default FromInput;
