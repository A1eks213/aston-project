// import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom'
// import { HomePage } from '../../pages/HomePage';
import logo from '../../images/logo.png';
import { useAuth } from '../../hooks/useAuth';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { removeUser } from '../../store/slices/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
export function Header() {
  const { isAuth, email } = useAuth();
  const dispatch = useAppDispatch();
  return (
    <header className={styles.header}>
      <Link to='/' className={styles.logo}>
        <img src={logo} alt="" className={styles.logoImg} />
        BarçaPlayers
      </Link>
      <nav className={styles.navList}>
        {isAuth ? (
          <>
            <Link to='/favorites' className={styles.navItem}>
              Избранное
            </Link>
            <Link to='/history' className={styles.navItem}>
              История
            </Link>
            <button
              className={styles.navItem}
              onClick={() => {
                signOut(auth)
                dispatch(removeUser())
              }}>
              Выйти
            </button>
            <span className={styles.avatar}>{email ? email[0] : '-'}</span>
          </>
        ) : (
          <Link to='/login' className={styles.navItem}>
            Войти
          </Link>
        )}

      </nav>
    </header>
  );
}
