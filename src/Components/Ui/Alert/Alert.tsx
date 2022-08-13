import React from "react";
// Styles
import { BaseAlert } from "./style";
// Components
import { ReactComponent as IconInfoCircle } from "./Icons/info-circle.svg";
import { ReactComponent as IconCheckV } from "./Icons/check-v.svg";
// Types
import { AlertBoxProps } from "./types";


const Alert: React.FC<AlertBoxProps> = ({ severity, className, children }) => {
  return (
    <BaseAlert className={className} severity={severity} >
      {severity === "error" ? <IconInfoCircle /> : <IconCheckV />}
      <p>{children}</p>
    </BaseAlert>
  );
};

export default Alert;
