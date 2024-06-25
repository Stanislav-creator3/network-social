import type { FC } from 'react';
import {User as NextUiUser} from "@nextui-org/react"
import { BASE_URL } from '../../constants';

type TProps = {
    name: string,
    avatarUrl: string,
    description?: string,
    className?: string,
}

const User : FC<TProps> = ({
    name ="",
    avatarUrl = "",
    className= "",
    description= ""

}) => {
  return (
    <NextUiUser name={name} className={className} description = {description} avatarProps={{src:`${BASE_URL}${avatarUrl}`}}>User</NextUiUser>
  )
}

export default User