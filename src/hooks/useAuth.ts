import { useAppSelector } from './reduxHooks';

export function useAuth() {
    const {email, id} = useAppSelector(state => state.user)
    return {
        isAuth: !!email,
        email,
        id,
    }
}