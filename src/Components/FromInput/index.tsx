import React, { useState } from "react";
// Style
import { ErrorP, FormInputContainer, StyledInput } from "./style";
// Types
import { FormInputProps } from "./types";

const FromInput = ({
  label,
  type,
  onChange,
  required,
  errMessage,
  pattern,
  value,
  ...otherprops
}: FormInputProps) => {
  const [validError, setValidError] = useState(false);
  // Check valid
  const handleBlur = () => {
    let re = new RegExp(pattern);
    value.match(re) ? setValidError(false) : setValidError(true);
  };

  return (
    <div>
      <FormInputContainer
        validError={validError}
        className="FormInputContainer"
      >
        <label>{label}</label>
        <StyledInput
          type={type}
          {...otherprops}
          onChange={onChange}
          onBlur={handleBlur}
          onFocus={() => type === "password" && handleBlur}
        />
      </FormInputContainer>
      <ErrorP>{errMessage}</ErrorP>
    </div>
  );
};

export default FromInput;
