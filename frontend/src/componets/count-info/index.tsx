import type { FC } from "react"
import React from "react"

type TProps = {
  count: number
  title: string
}

const CountInfo: FC<TProps> = ({ count, title }) => {
  return (
    <div className="flex flex-col items-center space-x-2 p-4">
      <span className="text-4xl font-semibold">{count}</span>
      <span>{title}</span>
    </div>
  )
}

export default CountInfo
