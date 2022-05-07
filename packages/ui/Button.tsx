import * as React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {};

const Button: React.FC<Props> = (props) => {
  const { ...rest } = props;

  return <button {...rest} />;
};

export type { Props as ButtonProps };
export default Button;
