import clsx from "clsx";
import * as React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  variant?: "text" | "contained" | "outlined";
  /**
   * Optional click handler
   */
  onClick?: () => void;
};

const Button: React.FC<Props> = (props) => {
  const {
    primary = true,
    size = "medium",
    variant = "contained",
    className,
    ...rest
  } = props;

  return (
    <button
      onClick={() => {}}
      className={clsx([
        "ui-button",
        {
          _text: variant === "text",
          _contained: variant === "contained",
          _outlined: variant === "outlined",
        },
        className,
      ])}
      {...rest}
    />
  );
};

export type { Props as ButtonProps };
export default Button;
