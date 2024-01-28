import { useQuery } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { getUser } from './utils/auth/getUser'
import GlobalLoading from './modules/layout/GlobalLoading'

interface IProps {
    children: ReactNode
}

const AuthenRoute = (props: IProps) => {
    const token = sessionStorage.getItem('TOKEN') || ''

    const queryUser = useQuery({
        queryKey: ['user', token],
        queryFn: () => getUser({ token: token }),
        staleTime: 0,
    })

    if (queryUser.isFetching) {
        return <GlobalLoading />
    }

    const isError = queryUser.data?.name === 'JsonWebTokenError' || queryUser.data?.message === 'Invalid/Expired Token!' || queryUser.data?.name === 'TokenExpiredError'

    return isError ? <Navigate replace to={{ pathname: '/login' }} /> : props.children

}

export default AuthenRoute
