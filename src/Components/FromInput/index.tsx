import React from "react";
// Style
import { ErrorP, FormInputContainer, StyledInput } from "./style";
// Types
interface FormInputProps {
  label: string;
  otherprops?: any;
  placeholder: string;
  validError: boolean;
}

const FromInput = ({ label, validError, ...otherprops }: FormInputProps) => {
  return (
    <>
      <FormInputContainer validError={validError}>
        <label>{label}</label>
        <StyledInput type="text" {...otherprops} />
      </FormInputContainer>
      <ErrorP>asdasdasfda</ErrorP>
    </>
  );
};

export default FromInput;
