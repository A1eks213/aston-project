import { Form } from '../../components/Form';
import { registerAction } from '../../redux/actions/authorizationActions';
import { useAppDispatch } from '../../hooks/reduxHooks';

export default function RegisterPage() {
  const dispatch = useAppDispatch();
  const handleregister = (email: string, password: string) => {
    dispatch(registerAction({email, password}))
  }
  return (
    <Form
    isLogin={false}
      title='Зарегестрироваться'
      handleClick={handleregister} 
    />
  );
}
