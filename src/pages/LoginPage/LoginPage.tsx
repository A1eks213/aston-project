// import React from 'react';
// import styles from './loginpage.module.css';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Form } from '../../components/Form';
import { auth } from '../../firebase';


export default function LoginPage() {
  const navigate = useNavigate(); 
  const handleLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        navigate('/');
      })
      .catch(() => alert('Неверно введены данные!'))


  }
  return (
    <Form
      isLogin={true}
      title='Войти'
      handleClick={handleLogin} 
    />
  );
}
