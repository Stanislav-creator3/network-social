import { useCurrentQuery } from '../../app/services/userApi'
import { Spinner } from '@nextui-org/react'

const AuthGuar = ({children} : {children: JSX.Element}) => {
    const { isLoading} = useCurrentQuery()

    if (isLoading) {
        return <Spinner/>
    }
  return children
}

export default AuthGuar