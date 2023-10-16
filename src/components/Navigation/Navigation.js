import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

  return (
    <nav>
      <NavLink  to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink  to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};