// import React from 'react';
// import styles from './loginpage.module.css';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../store/slices/userSlice';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Form } from '../../components/Form';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { auth } from '../../firebase';


export default function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate(); 
  const handleLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        }))
        navigate('/');
      })
      .catch((error) => {
        alert('Неверные данные' + error)
      })

  }
  return (
    <Form
      isLogin={true}
      title='Войти'
      handleClick={handleLogin} 
    />
  );
}
