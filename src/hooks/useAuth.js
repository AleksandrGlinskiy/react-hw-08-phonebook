import { useSelector } from 'react-redux';

import {
  selectUser,
  getIsLoggedIn,
  selectIsRefreshing,
} from '../redux/auth/auth-selectors';
export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
