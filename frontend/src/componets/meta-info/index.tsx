import type { FC } from "react"
import type { IconType } from "react-icons"

type TProps = {
  count: number
  Icon: IconType
}

const MetaInfo: FC<TProps> = ({ count, Icon }) => {
  return (
    <div className="flex items-center gap-5 cursor-pointer">
      {count > 0 && (
        <p className="font-semibold text-default-400 text-1">{count}</p>
      )}
      <p className="text-default-400 text-x1 hover:text-2xl ease-in duration-100">
        <Icon/>
      </p>
    </div>
  )
}

export default MetaInfo
