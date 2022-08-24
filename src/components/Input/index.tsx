import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  ReactElement,
} from "react";
import { FieldError } from "react-hook-form";

import {
  Input as InputComponent,
  InputContainer,
} from "components/Input/styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: FieldError;
};

const CustomInput: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { error = null, ...props },
  ref
): ReactElement => {
  return (
    <InputContainer>
      <InputComponent {...props} ref={ref} $hasError={!!error} />
      {error && <span>{error.message}</span>}
    </InputContainer>
  );
};

export const Input = forwardRef(CustomInput);
