import styles from './form.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { isEmailValid } from '../../utils/isEmailValid';

interface IForm {
  title: string,
  isLogin: boolean,
  handleClick: (email: string, password: string) => void
}

export function Form({ title, handleClick, isLogin }: IForm) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValidate, setEmailValidate] = useState(' ');
  const [passwordValidate, setPasswordValidate] = useState(' ');

  return (
    <form className={styles.form}>
      <h1 className={styles.formTitle}>
        {title === 'Войти' ? 'Вход' : 'Регистрация'}
      </h1>
      <label className={styles.labelForm} htmlFor='email'>Логин: </label>
      <input name='email' type='email' value={email} placeholder='email'
        className={styles.input}
        onChange={(e) => { setEmail(e.target.value) }}
        onInput={() => { setEmailValidate('') }}
        onBlur={(e) => {
          if (!isEmailValid(e.target.value)) {
            setEmailValidate('Неправильно введен email!')
          }
        }}
      />
      <p className={styles.validate}>{emailValidate}</p>
      <label className={styles.labelForm} htmlFor='password'>Пароль: </label>
      <input name='password' type='password' value={password} placeholder='password'
        className={styles.input}
        onChange={(e) => { setPassword(e.target.value) }}
        onInput={() => { setPasswordValidate('') }}
        onBlur={(e) => {
          if (e.target.value.length < 6) {
            setPasswordValidate('Пароль должен содержать не менее 6 символов!')
          }
        }}
      />
      <p className={styles.validate}>{passwordValidate}</p>
      <button
        className={styles.button}
        onClick={(e) => {
          e.preventDefault()
          if (!emailValidate && !passwordValidate) { handleClick(email, password) }
        }}
      >
        {title}
      </button>
      {isLogin && (<Link className={styles.link} to='/register'>У вас ещё нет аккаунта?</Link>)}
    </form>
  );
}
