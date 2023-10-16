import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
export function App() {
  return (

    <Routes>
     <Route path="/" element={<Layout />}>
        
        <Route
          path="/register"
          element={<Register />} />

<Route
          path="/login"
          element={<Login />} />
          
          <Route
          path="/contacts"
          element={<Contacts />} />
       
         
        
        </Route>
    </Routes>
  
      
  );
}


