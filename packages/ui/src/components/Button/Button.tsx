import clsx from "clsx";
import * as React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined" | "text";
  onClick?: () => void;
};

const Button: React.FC<Props> = (props) => {
  const { size = "medium", variant = "contained", className, ...rest } = props;

  return (
    <button
      onClick={() => {}}
      className={clsx([
        "ui-button",
        {
          _contained: variant === "contained",
          _outlined: variant === "outlined",
          _text: variant === "text",
        },
        className,
      ])}
      {...rest}
    />
  );
};

export type { Props as ButtonProps };
export default Button;
