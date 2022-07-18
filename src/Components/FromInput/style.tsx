import styled, { css } from "styled-components";
// Types
interface FormInputContainerProps {
  validError: boolean;
}

// Error P
export const ErrorP = styled.p`
  margin: 0;
  margin-top: 4px;
  color: ${({ theme }) => theme.errorRed};
  display: none;
  position: absolute;
`;
// Form container
export const FormInputContainer = styled.div<FormInputContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 14px 24px;
  height: 77px;
  width: 100%;
  background-color: ${({ theme }) => theme.grayBg};
  border: solid 1px ${({ theme }) => theme.grayBg};
  border-radius: 10px;

  label {
    text-align: left;
    width: 100%;
    font-size: 14px;
    line-height: 1.25;
    color: ${({ theme }) => theme.fadeText};
    text-transform: capitalize;
  }

  &:focus-within {
    background-color: ${({ theme }) => theme.white};
    border-color: #222;
  }

  /* Error */
  ${(props) =>
    props.validError === true &&
    css`
      border-color: ${({ theme }) => theme.errorRed};

      &:focus-within {
        border-color: ${({ theme }) => theme.errorRed};
      }

      label {
        color: ${({ theme }) => theme.errorRed};
      }

      & ~ ${ErrorP} {
        display: block;
      }
    `}
`;
// Input
export const StyledInput = styled.input`
  all: unset;
  width: 100%;
  height: 27px;
  line-height: 1.5;
  font-size: 1.125rem;
  color: #4d4d4d;

  &::placeholder {
    color: ${({ theme }) => theme.gray};
  }

`;
