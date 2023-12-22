import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation, Navigate, Outlet } from 'react-router-dom';
import { Loader } from '../components/Loader';
import { SearchBar } from '../components/SearchBar';
import { SearchPage } from '../pages/SearchPage';
import { useAuth } from '../hooks/useAuth';
const Header = lazy(() => import("../components/Header/Header"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const FavoritePage = lazy(() => import("../pages/FavoritePage/FavoritePage"));
const HistoryPage = lazy(() => import("../pages/HistoryPage/HistoryPage"));
const CardPage = lazy(() => import("../pages/CardPage/CardPage"));

interface IRedirect {
  isAuth: boolean
}
const RedirectAfterAuth = ({ isAuth }: IRedirect) => {
  return (
    <>
      {isAuth ? <Navigate to='/' /> : <Outlet />}
    </>);
};

function RoutesComponent() {
  const { isAuth } = useAuth();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      {isHomePage && <SearchBar />}
      <Routes>
        <Route element={<RedirectAfterAuth isAuth={isAuth} />}>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Route>
        <Route path='/favorites' element={<FavoritePage />} />
        <Route path='/history' element={<HistoryPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/player/:id' element={<CardPage />} />
        <Route path='/searchPage' element={<SearchPage />} />
        <Route path='*' element={<HomePage />} />
      </Routes>
    </Suspense>

  );
}

export default RoutesComponent;