import React, { useEffect, useState } from "react";
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
  const [isBlur, setIsBlur] = useState(false);
  // Handle blur
  const handleBlur = () => {
    setIsBlur(true);
  };
  // Handle focus
  const handleFocus = () => {
    setTimeout(() => {
      setIsBlur(true);
    }, 3000)
  };

  // Check valid
  useEffect(() => {
    let re = new RegExp(pattern);
    re.test(value) ? setValidError(false) : setValidError(true);
  },[value, pattern])

  return (
    <div>
      <FormInputContainer
        validError={isBlur? validError : false}
        className="FormInputContainer"
      >
        <label>{label}</label>
        <StyledInput
          type={type}
          {...otherprops}
          onChange={onChange}
          onBlur={handleBlur}
          // Checking the value when the user focus
          onFocus={() => type === "password" && handleFocus()}
        />
      </FormInputContainer>
      <ErrorP>{errMessage}</ErrorP>
    </div>
  );
};

export default FromInput;
