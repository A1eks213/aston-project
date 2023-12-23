import styles from './header.module.css';
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png';
import { useAuth } from '../../hooks/useAuth';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { logoutAction } from '../../redux/actions/authorizationActions';
import { userSelectors } from '../../redux/store';
import { Loader } from '../Loader';
import { useTheme } from '../../hooks/useTheme';
export default function Header() {
  const {isRegular, setIsRegular} = useTheme();
  const headerClass = isRegular ? styles.header : styles.headerSpecial;
  const logoClass = isRegular ? styles.logo : styles.logoSpecial;
  const navItemClass = isRegular ? styles.navItem : styles.navItemSpecial;
  const { isAuth, email } = useAuth();
  const authStatus = useAppSelector(userSelectors.authStatus);
  const dispatch = useAppDispatch();
  if (authStatus === 'LOAD') return <Loader/>
  return (
    <header className={headerClass}>
      <Link to='/' className={logoClass}>
        <img src={logo} alt="" className={styles.logoImg} />
        BarçaPlayers
      </Link>
      <button className={navItemClass} onClick={() => setIsRegular(!isRegular)}> Сменить тему </button>
      <nav className={styles.navList}>
        {isAuth ? (
          <>
            <Link to='/favorites' className={navItemClass}>
              Избранное
            </Link>
            <Link to='/history' className={navItemClass}>
              История
            </Link>
            <button
              className={navItemClass}
              onClick={() => {
                dispatch(logoutAction())
              }}>
              Выйти
            </button>
            <span className={styles.avatar}>{email ? email[0] : '-'}</span>
          </>
        ) : (
          <Link to='/login' className={navItemClass}>
            Войти
          </Link>
        )}

      </nav>
    </header>
  );
}
