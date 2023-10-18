import { useAuth } from 'hooks/useAuth';
import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/auth-operations';
import { Layout } from './Layout';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';

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
          <Route
            path="/register"
            element={
              <RestrictedRoute component={Register} redirectTo="/contacts" />
            }
          />

          <Route
            path="/login"
            element={
              <RestrictedRoute component={Login} redirectTo="/contacts" />
            }
          />

          <Route
            path="/contacts"
            element={<PrivateRoute component={Contacts} redirectTo="/login" />}
          />
        </Route>
      </Routes>
    )
  );
}
