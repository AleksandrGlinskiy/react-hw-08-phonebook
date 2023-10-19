import { useAuth } from 'hooks/useAuth';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/auth-operations';
import { Layout } from './Layout';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';


const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(()=> import('../pages/Login'));
const ContactsPage = lazy(()=> import('../pages/Contacts'));


export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  const { isRefreshing } = useAuth();

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={RegisterPage} redirectTo="/contacts" />
            }
          />

          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
            }
          />

          <Route
            path="/contacts"
            element={<PrivateRoute component={ContactsPage} redirectTo="/login" />}
          />
        </Route>
      </Routes>
    )
  );
}
