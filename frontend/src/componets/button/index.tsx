import { Button as NextButton } from "@nextui-org/react"
import type { FC } from "react";
import type  React from "react"

type TProps = {
  children: React.ReactNode
  icon?: JSX.Element
  className?: string
  type?: "button" | "submit"
  fullWidth?: boolean,
  to?: string,
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined
}
const Button: FC<TProps> = ({
  children,
  icon,
  className,
  type,
  fullWidth,
  color,
  to
}) => {

  return (
    <NextButton
      startContent={icon}
      size="lg"
      color={color}
      variant="light"
      className={className}
      type={type}
      fullWidth={fullWidth}
    >
      {children}
    </NextButton>
  )
}

export default Button
