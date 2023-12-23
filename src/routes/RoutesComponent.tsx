import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation, Navigate, Outlet } from 'react-router-dom';
import { Loader } from '../components/Loader';
import { SearchBar } from '../components/SearchBar';
import { SearchPage } from '../pages/SearchPage';
import { useAuth } from '../hooks/useAuth';
import { userSelectors } from '../redux/store';
import { useAppSelector } from '../hooks/reduxHooks';
import { ThemeProvider } from '../context/ThemeContext';
const Header = lazy(() => import("../components/Header/Header"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const FavoritePage = lazy(() => import("../pages/FavoritePage/FavoritePage"));
const HistoryPage = lazy(() => import("../pages/HistoryPage/HistoryPage"));
const CardPage = lazy(() => import("../pages/CardPage/CardPage"));

interface IRedirect {
  isAuth: boolean,
  authStatus: string
}
const RedirectAfterAuth = ({ isAuth, authStatus }: IRedirect) => {
  if (authStatus === 'LOAD') return <Loader />
  return (
    <>
      {isAuth ? <Navigate to='/' /> : <Outlet />}
    </>);
};
const RedirectWithoutAuth = ({ isAuth, authStatus }: IRedirect) => {
  if (authStatus === 'LOAD') return <Loader />
  return (
    <>
      {!isAuth ? <Navigate to='/login' /> : <Outlet />}
    </>);
};

function RoutesComponent() {
  const { isAuth } = useAuth();
  const authStatus = useAppSelector(userSelectors.authStatus);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <Suspense fallback={<Loader />}>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
      {isHomePage && <SearchBar />}
      <Routes>
        <Route element={<RedirectAfterAuth isAuth={isAuth} authStatus={authStatus} />}>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Route>
        <Route element={<RedirectWithoutAuth isAuth={isAuth} authStatus={authStatus} />}>
          <Route path='/favorites' element={<FavoritePage />} />
          <Route path='/history' element={<HistoryPage />} />
        </Route>
        <Route path='/' element={<HomePage />} />
        <Route path='/player/:id' element={<CardPage />} />
        <Route path='/searchPage' element={<SearchPage />} />
        <Route path='*' element={<HomePage />} />
      </Routes>
    </Suspense>

  );
}

export default RoutesComponent;