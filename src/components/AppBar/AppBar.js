import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import  { getIsLoggedIn } from 'redux/auth/auth-selectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </>
  );
};


