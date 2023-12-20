import React, { Suspense, lazy} from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from './store/slices/userSlice';
import { auth } from './firebase';
import { Loader } from './components/Loader';
import { SearchBar } from './components/SearchBar';
import { SearchPage } from './pages/SearchPage';
const HomePage = lazy(() => import("../src/pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../src/pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("../src/pages/RegisterPage/RegisterPage"));
const FavoritePage = lazy(() => import("../src/pages/FavoritePage/FavoritePage"));
const HistoryPage = lazy(() => import("../src/pages/HistoryPage/HistoryPage"));
const CardPage = lazy(() => import("../src/pages/CardPage/CardPage"));

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/'
  console.log(isHomePage)
  const dispatch = useDispatch();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUser({
        email: user.email,
        uid: user.uid,
      }
      ))
    }
  })
  return (
    <div className="App">
        <Header />
        {isHomePage && <SearchBar />}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/favorites' element={<FavoritePage />} />
            <Route path='/history' element={<HistoryPage />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/player/:id' element={<CardPage />} />
            <Route path='/searchPage' element={<SearchPage />} />
          </Routes>
        </Suspense>
    </div>
  );
}

export default App;
