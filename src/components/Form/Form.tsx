import React from 'react';
import styles from './form.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface IForm {
  title: string,
  isLogin: boolean,
  handleClick: (email: string, password: string) => void
}
export function Form({ title, handleClick, isLogin}: IForm) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form className={styles.form}>
      <h1 className={styles.formTitle}>
        {title === 'Войти' ? 'Вход' : 'Регистрация'}
      </h1>
      <input
        className={styles.input}
        type='email'
        value={email}
        onChange={(e) => { setEmail(e.target.value) }}
        placeholder='email'
      />
      <input
        className={styles.input}
        type='password'
        value={password}
        onChange={(e) => { setPassword(e.target.value) }}
        placeholder='пароль'
      />
      <button
        className={styles.button}
        onClick={(e) => {
          e.preventDefault()
          handleClick(email, password)
        }}
      >
        {title}
      </button>
      {isLogin && (<Link className={styles.link} to='/register'>У вас ещё нет аккаунта?</Link>)}
    </form>
  );
}
