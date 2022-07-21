import React from "react";
// Styles
import { InternetError } from "./style";
// Components
import { IconInfoCircle } from "../IconsComponent";
// Types
import { ErrorBoxProps } from "./types";


const ErrorBox = ({ className ,children }: ErrorBoxProps) => {
  return (
    <InternetError className={className}>
      <IconInfoCircle />
      <p>
        {children}
      </p>
    </InternetError>
  );
};

export default ErrorBox;
