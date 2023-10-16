import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);
  return (
    <div>
      <p>{email}</p>
      <button onClick={()=> dispatch(logOut())}>Logout</button>
    </div>
  );
};

export default UserMenu;
