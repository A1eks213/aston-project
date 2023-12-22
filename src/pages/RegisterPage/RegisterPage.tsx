import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from '../../components/Form';
import { auth } from '../../firebase';

export default function RegisterPage() {
  const navigate = useNavigate();
  const handleregister = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      navigate('/');
    })
    .catch(() => alert('Пользователь с данным email уже зарегестрирован!')) 

  }
  return (
    <Form
    isLogin={false}
      title='Зарегестрироваться'
      handleClick={handleregister} 
    />
  );
}
