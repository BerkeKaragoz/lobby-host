import * as React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Optional click handler
   */
  onClick?: () => void;
};

const Button: React.FC<Props> = (props) => {
  const { ...rest } = props;

  return <button style={{ background: "red" }} {...rest} />;
};

export type { Props as ButtonProps };
export default Button;
