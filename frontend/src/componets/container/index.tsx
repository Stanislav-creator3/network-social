import type React from "react"

type TProps = {
  children: React.ReactElement[] | React.ReactElement
}

const Container: React.FC<TProps> = ({ children }) => {
  return <div className="flex max-w-screen-xl mx-auto mt-10">{children}</div>
}

export default Container
