import type { FC } from "react";
import React from "react"

type TProps = {
  children: string
  size?: string
}

const Typography: FC<TProps> = ({ children, size = "text-1" }) => {
  return <p className={`${size}`}>{children}</p>
}

export default Typography
