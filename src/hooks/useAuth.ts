import { useAppSelector } from './reduxHooks';

export function useAuth() {
    const {email, uid} = useAppSelector(state => state.user)
    return {
        isAuth: !!email,
        email,
        uid,
    }
}