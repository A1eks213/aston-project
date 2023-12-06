import React from 'react';
// import styles from './registerpage.module.css';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../store/slices/userSlice';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from '../../components/Form';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { auth } from '../../firebase';

export default function RegisterPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate(); 
  const handleregister = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token: user.refreshToken,
      }))
    })
    .catch(console.error)
    navigate('/');

  }
  return (
    <Form
    isLogin={false}
      title='Зарегестрироваться'
      handleClick={handleregister} 
    />
  );
}
