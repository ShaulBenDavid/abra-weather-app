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
  ...otherprops
}: FormInputProps) => {
  return (
    <div>
      <FormInputContainer validError={validError}>
        <label>{label}</label>
        <StyledInput type={type} {...otherprops} onChange={onChange} />
      </FormInputContainer>
      <ErrorP>asdasdasfda</ErrorP>
    </div>
  );
};

export default FromInput;
