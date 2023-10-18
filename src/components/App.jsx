import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { Layout } from './Layout';
export function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(fetchCurrentUser());
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}
