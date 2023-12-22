import { Form } from '../../components/Form';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { loginAction } from '../../redux/actions/authorizationActions';

export default function LoginPage() {
  const dispatch = useAppDispatch()
  const handleLogin = (email: string, password: string) => {
    dispatch(loginAction({email, password}))
  }
  return (
    <Form
      isLogin={true}
      title='Войти'
      handleClick={handleLogin}
    />
  );
}
