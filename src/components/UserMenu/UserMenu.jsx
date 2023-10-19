import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import  { getUserEmail } from 'redux/auth/auth-selectors';
import css from './UserMenu.module.css'

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);
  const hangleLogOut = () => dispatch(logOut());
  return (
    <div>
      <p className={css.email}>{email}</p>
      <button className={css.formButton} onClick={hangleLogOut}>Logout</button>
    </div>
  );
};

export default UserMenu;
