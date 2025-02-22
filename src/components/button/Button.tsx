import { ComponentProps } from "react"
import cn from "classnames"
import "./Button.css"

type Props = ComponentProps<"button"> & {
  variant?: "default" | "circle"
  size?: "standard" | "small"
}

const Button = ({
  disabled,
  children,
  variant = "default",
  size = "standard",
  ...rest
}: Props) => {
  return (
    <button
      className={cn("button", {
        ["button--disabled"]: disabled,
        [`button--${variant}`]: variant,
        [`button--${size}`]: size,
      })}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
