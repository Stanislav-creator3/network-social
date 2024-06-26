import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectCurrent } from '../../features/user/userSlice'
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react'
import { BASE_URL } from '../../constants'
import { Link } from 'react-router-dom'
import { MdAlternateEmail } from 'react-icons/md'

const Profile = () => {
    const current= useAppSelector(selectCurrent)

  return (
   <Card className='py-4 w-[302px]'>
    <CardHeader className='pd-0 pt-2 px-4 flex-col items-center'>
        <Image alt='Card Profile' className='object-cover rounded-x1' src={`${BASE_URL}${current?.avatarUrl}`} width={370}/>
    </CardHeader>
    <CardBody>
        <Link to={`/users/${current?.id}`}>
            <h4 className='font-bold text-large mb-2'>{current?.name}</h4>
        </Link>
        <p className="text-default-500 flex items-center gap-2">
            <MdAlternateEmail/>
            {current?.email}
        </p>
    </CardBody>
   </Card>
  )
}

export default Profile