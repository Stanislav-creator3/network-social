import type { FC } from "react"
import type React from "react"
import Button from "../button"
import { Link } from "react-router-dom"

type TProps = {
  children: React.ReactNode
  icon: JSX.Element
  href: string
}

const NavButton: FC<TProps> = ({ children, icon, href }) => {
  return (
    <Button className="flex justify-start text-x1" icon={icon}>
      <Link to={href}>{ children }</Link>
    </Button>
  )
}

export default NavButton
