import React, { useContext, useEffect } from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Home } from './pages';
import { COLLECTION_ROUTE, ERROR_ROUTE, HOME_ROUTE, SIGN_IN_ROUTE, SIGN_UP_ROUTE } from './constants/routes';
import NotFoundPage from './pages/NotFoundPage';
import ErrorPage from './pages/ErrorPage';
import SignInPage from './pages/SignInPage';
import { AUTH_VALIDATE } from './constants/apiEndPoints';
import makeRequest from './utils/makeRequest';
import CollectionsPage from './pages/CollectionsPage';
import HomeNavBar from './components/HomeNavBar';
import { UserAuthContext } from './context/UserAuthProvider';

function AppRoutes() {
  const navigate = useNavigate();

  const { setUserData } = useContext(UserAuthContext);

  const validateToken = async token => {
    const res = await makeRequest(true, AUTH_VALIDATE, null, {
      headers: {
        authorization: token,
      },
    });
    setUserData(res);
    return res.email;
  };

  const loginOrRegister = window.location.pathname === SIGN_UP_ROUTE || window.location.pathname === SIGN_IN_ROUTE;

  useEffect(() => {
    const redirectPath = window.location.pathname === SIGN_UP_ROUTE ? SIGN_UP_ROUTE : SIGN_IN_ROUTE;

    const token = localStorage.getItem('token');
    if (!token) navigate(redirectPath);
    else {
      validateToken(token)
        .then(isValid => {
          if (!isValid) navigate(redirectPath);
        })
        .catch(() => {
          navigate(redirectPath);
        });
    }
  }, []);
  return (
    <div
      className="app-routes"
      style={{
        display: 'grid',
        'grid-template-columns': loginOrRegister ? '1fr' : '0.2fr 0.8fr',
      }}>
      {!loginOrRegister && <HomeNavBar />}
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={`${COLLECTION_ROUTE}/:contentId`} element={<CollectionsPage />} />
        <Route path={SIGN_IN_ROUTE} element={<SignInPage login />} />
        <Route path={SIGN_UP_ROUTE} element={<SignInPage />} />
        <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<ErrorPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
export default AppRoutes;
