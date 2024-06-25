import type { FC } from "react"
import React from "react"

type TProps = {
  title: string
  info?: string
}

const ProfileInfo: FC<TProps> = ({ title, info }) => {
  if (!info) {
    return null
  }
  return (
    <p className="font-semibold">
        <span className="text-gray-500 mr-2">{title}</span>
        {info}
    </p>
  )
}

export default ProfileInfo
