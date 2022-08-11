import { InputHTMLAttributes, ReactElement } from "react";

import { Input as InputComponent } from "components/Input/styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: InputProps): ReactElement => {
  return <InputComponent {...props} />;
};
